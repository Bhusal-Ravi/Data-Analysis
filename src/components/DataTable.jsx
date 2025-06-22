import React, { useEffect, useRef, useState, useCallback } from 'react'

function DataTable({ datasetId }) {
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [currentDatasetId, setCurrentDatasetId] = useState(null);

    const tableRef = useRef(null);

    const fetchRows = useCallback(async () => {
        if (!datasetId) return;

        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5001/api/datasets/${datasetId}/rows?page=${page}&limit=50`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const newRows = await response.json();
            console.log('Received rows:', newRows.length);

            setRows((prev) => [...prev, ...newRows]);
            setHasMore(newRows.length === 50);
        } catch (error) {
            console.error("Error fetching rows:", error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, [datasetId, page]);

    // Handle dataset changes
    useEffect(() => {
        if (datasetId !== currentDatasetId) {
            console.log('Dataset changed from', currentDatasetId, 'to', datasetId);
            setCurrentDatasetId(datasetId);
            setRows([]);
            setPage(1);
            setHasMore(true);
            setLoading(false);
        }
    }, [datasetId, currentDatasetId]);

    // Fetch data when dataset or page changes
    useEffect(() => {
        if (datasetId) {
            console.log('Fetching data for dataset:', datasetId, 'page:', page);
            fetchRows();
        }
    }, [datasetId, page]);

    function handleScroll() {
        const e = tableRef.current;
        if (!e || loading || !hasMore) return;

        if (e.scrollTop + e.clientHeight >= e.scrollHeight - 10) {
            setPage(prev => prev + 1);
        }
    }

    return (
        <div className="w-full max-w-7xl mx-auto mt-8">
            {/* Stats Header */}
            <div className="mb-4 p-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg text-white shadow-lg">
                <h3 className="text-lg font-bold">Dataset View</h3>
                <p className="text-sm opacity-90">
                    Showing {rows.length} rows • Scroll down to load more
                </p>
            </div>

            {/* Scrollable Table Container */}
            <div
                ref={tableRef}
                onScroll={handleScroll}
                className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                style={{ height: "500px", overflowY: "auto" }}
            >
                {rows.length > 0 ? (
                    <table className="w-full">
                        {/* Sticky Header */}
                        <thead className="bg-gradient-to-r from-emerald-400 to-emerald-600 sticky top-0 z-10 shadow-sm">
                            <tr>
                                {Object.keys(rows[0])
                                    .filter(key => key !== '_id' && key !== "datasetId" && key !== "__v")
                                    .map((col) => (
                                        <th key={col} className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-emerald-300">
                                            {col.replace(/([A-Z])/g, ' $1').trim()} {/* Format camelCase */}
                                        </th>
                                    ))}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="bg-white divide-y divide-gray-200">
                            {rows.map((row, i) => (
                                <tr
                                    key={i}
                                    className="hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all duration-200 group"
                                >
                                    {Object.entries(row)
                                        .filter(([key]) => key !== "_id" && key !== "datasetId" && key !== "__v")
                                        .map(([key, val], j) => (
                                            <td
                                                key={key}
                                                className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100 group-hover:text-gray-800"
                                            >
                                                <div className="max-w-xs truncate" title={val}>
                                                    {val || '-'}
                                                </div>
                                            </td>
                                        ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    !loading && (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <div className="text-center">
                                <div className="text-4xl mb-4">📊</div>
                                <p className="text-lg font-medium">No data available</p>
                                <p className="text-sm">Upload a CSV file to view data</p>
                            </div>
                        </div>
                    )
                )}

                {/* Loading Indicator */}
                {loading && (
                    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                        <div className="flex items-center justify-center space-x-3">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-emerald-500"></div>
                            <span className="text-gray-600 font-medium">Loading more rows...</span>
                        </div>
                    </div>
                )}

                {/* End of Data Indicator */}
                {!hasMore && rows.length > 0 && (
                    <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4">
                        <div className="text-center">
                            <span className="text-gray-500 text-sm font-medium">
                                🎉 End of dataset • {rows.length} total rows loaded
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Summary Footer */}
            {rows.length > 0 && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>
                            <strong>{rows.length}</strong> rows loaded
                        </span>
                        <span>
                            {hasMore ? 'More data available' : 'All data loaded'}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DataTable