import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FileText } from 'lucide-react';

function AiSummary({ id }) {

    const [aiSummary, setAiSummary] = useState("")
    const [loading, setLoading] = useState(false)
    const fetchedRef = useRef(false);

    const summaryStart = useCallback(async () => {

        if (loading) return
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5001/api/aisummary/${id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }

            })
            const result = await response.json();
            console.log(result.message)
            setAiSummary(result.summary)
            console.log(result)

        } catch (error) {
            console.error("Error fetching summary:", error);
            setError("Failed to load summary");
        } finally {
            setLoading(false);
        }
    }, [id])

    useEffect(() => {

        if (id && !fetchedRef.current) {
            fetchedRef.current = true
            setAiSummary("")
            summaryStart()

        }


    }, [id, summaryStart])

    return (
        <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-br from-gray-900 to-emerald-600 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl">

            <div className="mb-4 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg text-slate-800 shadow-lg">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">AI Summary</h3>
                <p className="text-xs sm:text-sm lg:text-base opacity-90">
                    Presenting you a short summary of the DataSet
                </p>
            </div>
            <div className="mb-4 p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200 shadow-sm">
                {!aiSummary && aiSummary.length < 1 ? (
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <div className='text-slate-600 text-xs sm:text-sm lg:text-base'>Loading Summary of the dataset</div>
                        <div className='w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin'></div>
                    </div>
                ) : (
                    <div className='space-y-3 sm:space-y-4'>
                        <div className='flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 border-b border-slate-200'>
                            <div className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center'>
                                <FileText className='text-emerald-800 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />
                            </div>
                            <h3 className='text-base sm:text-lg lg:text-xl font-bold text-emerald-800'>Dataset Summary</h3>
                        </div>
                        <div className='prose prose-slate max-w-none'>
                            <p className='text-slate-700 leading-relaxed whitespace-pre-wrap text-xs sm:text-sm lg:text-base'>{aiSummary}</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AiSummary