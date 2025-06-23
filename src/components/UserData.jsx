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
                <div className='flex justify-center items-center flex-col bg-white/50 rounded-md border-2 transition duration-500 hover:scale-105  border-dashed border-emerald-400 shadow-md p-5 mb-5  '>
                    <h1>Show Your Previous DataSets</h1>
                    {!isMenueOpen && <ChevronDown className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' onClick={() => setIsMenueOpen(!isMenueOpen)} />}
                    {isMenueOpen && <X className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' onClick={() => setIsMenueOpen(!isMenueOpen)} />}
                </div>

                {isMenueOpen && (
                    <div className='absolute top-full mt-2 left-0 overflow-y-scroll h-100 bg-white/50 border-2 border-dashed border-emerald-400 rounded-xl shadow-lg p-4 w-64 z-50 '>
                        {loading && (<p>Loading ...</p>)}

                        {!loading && data.length > 0 && (
                            <div className="mt-4">
                                <h2 className="text-xl font-bold  mb-2">Your Datasets</h2>
                                <div className="space-y-2">
                                    {data.map((dataset) => (
                                        <div key={dataset.id} onClick={() => handleClick(dataset.id)} className={`bg-slate-700 p-3 b  cursor-pointer rounded-md shadow ${selectedDatasetId === dataset.id ? 'bg-emerald-100' : ''}`}>
                                            <h3 className="font-semibold text-emerald-400">{dataset.name}</h3>
                                            <p className="text-sm text-emerald-600">
                                                Uploaded: {new Date(dataset.uploadedAt).toLocaleDateString()}
                                            </p>
                                            <p className="text-sm text-emerald-600">
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