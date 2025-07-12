import React, { useContext, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react';
import { X } from 'lucide-react';
import { ReloadContext } from './ReloadProvider';

function UserData({ onDataSetClick, newUploads, selectedDatasetId }) {
    const { trigger } = useContext(ReloadContext)

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
    }, [newUploads, trigger])

    function handleClick(dataid) {
        console.log('Dataset clicked:', dataid);
        onDataSetClick(dataid)
    }

    return (
        <div className='flex justify-center items-center w-full'>
            <div className='relative w-full max-w-md lg:max-w-lg xl:max-w-xl'>
                <div className='flex justify-center items-center flex-col bg-white/50 rounded-lg border-2 transition duration-500 hover:scale-105 border-dashed border-emerald-400 shadow-md p-4 sm:p-5 lg:p-6 mb-4 sm:mb-5'>
                    <h1 className='text-sm sm:text-base lg:text-lg font-semibold text-center'>Show Your Previous DataSets</h1>
                    {!isMenueOpen && <ChevronDown className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' onClick={() => setIsMenueOpen(!isMenueOpen)} />}
                    {isMenueOpen && <X className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' onClick={() => setIsMenueOpen(!isMenueOpen)} />}
                </div>

                {isMenueOpen && (
                    <div className='absolute top-full mt-2 left-0 overflow-y-scroll max-h-96 bg-white/50 border-2 border-dashed border-emerald-400 rounded-xl shadow-lg p-4 w-full min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] z-50'>
                        {loading && (<p className='text-sm sm:text-base lg:text-lg'>Loading ....</p>)}

                        {!loading && data.length > 0 && (
                            <div className="mt-4">
                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Your Datasets</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    {data.map((dataset) => (
                                        <div key={dataset.id} onClick={() => handleClick(dataset.id)} className={`bg-slate-700 p-3 sm:p-4 lg:p-5 cursor-pointer rounded-lg shadow hover:bg-slate-600 transition-colors ${selectedDatasetId === dataset.id ? 'bg-emerald-100' : ''}`}>
                                            <h3 className="font-semibold text-emerald-400 text-sm sm:text-base lg:text-lg">{dataset.name}</h3>
                                            <p className="text-xs sm:text-sm lg:text-base text-emerald-600 mt-1">
                                                Uploaded: {new Date(dataset.uploadedAt).toLocaleDateString()}
                                            </p>
                                            <p className="text-xs sm:text-sm lg:text-base text-emerald-600 mt-1">
                                                Columns: {dataset.columns?.length || 0}
                                                {console.log("HELLOGELLO", dataset.columns)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {!loading && data.length === 0 && (
                            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">No datasets found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserData