import React, { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { X } from 'lucide-react';

function UserData({ onDataSetClick, newUploads, selectedDatasetId }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [isMenueOpen, setIsMenueOpen] = useState(false)

    async function handleUserData() {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:5001/api/datasetlist', {
                method: 'GET',
                credentials: 'include',
            });


            if (!response.ok) {

                throw new Error("Error fetching User Datasets");
            }

            const result = await response.json();
            console.log(result.datasets)
            setData(result.datasets || []);

        } catch (error) {
            console.error("Error", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleUserData();
    }, [])

    useEffect(() => {
        handleUserData();
    }, [newUploads])

    function handleClick(dataid) {
        console.log('Dataset clicked:', dataid);
        onDataSetClick(dataid)
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='relative'>
                <div className='flex justify-center items-center flex-col bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-md p-5 mb-5 rounded-xl '>
                    <h1>Show Your Previous DataSets</h1>
                    {!isMenueOpen && <ChevronDown onClick={() => setIsMenueOpen(!isMenueOpen)} />}
                    {isMenueOpen && <X onClick={() => setIsMenueOpen(!isMenueOpen)} />}
                </div>

                {isMenueOpen && (
                    <div className='absolute top-full mt-2 left-0 bg-gradient-to-r from-emerald-400 to-emerald-600 border rounded shadow-lg p-4 w-64 z-50 '>
                        {loading && (<p>Loading ...</p>)}

                        {!loading && data.length > 0 && (
                            <div className="mt-4">
                                <h2 className="text-xl font-bold mb-2">Your Datasets</h2>
                                <div className="space-y-2">
                                    {data.map((dataset) => (
                                        <div key={dataset.id} onClick={() => handleClick(dataset.id)} className={`bg-white p-3  cursor-pointer rounded shadow ${selectedDatasetId === dataset.id ? 'bg-emerald-100' : ''}`}>
                                            <h3 className="font-semibold">{dataset.name}</h3>
                                            <p className="text-sm text-gray-600">
                                                Uploaded: {new Date(dataset.uploadedAt).toLocaleDateString()}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Columns: {dataset.columns?.length || 0}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {!loading && data.length === 0 && (
                            <p className="mt-4 text-gray-600">No datasets found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserData