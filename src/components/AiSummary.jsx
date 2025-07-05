import React, { useEffect, useState } from 'react'
import { FileText } from 'lucide-react';

function AiSummary({ id }) {
    const [iddataSet, setIdDataset] = useState(null)
    const [aiSummary, setAiSummary] = useState("")

    async function summaryStart(idcall) {
        try {
            const response = await fetch(`http://localhost:5001/api/aisummary/${idcall}`, {
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

        }
    }

    useEffect(() => {

        if (id) {
            setIdDataset(id);
            setAiSummary("")
            summaryStart(id)

        }


    }, [id])

    return (
        <div className="w-full max-w-7xl mx-auto mt-8 ">

            <div className="mb-4 p-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg text-white shadow-lg">
                <h3 className="text-lg font-bold">AI Summary</h3>
                <p className="text-sm opacity-90">
                    Presenting you a short summary of the DataSet
                </p>
            </div>
            <div className='bg-gradient-to-br from-white to-slate-50 p-6 rounded-lg shadow-sm border border-slate-200 mb-4'>
                {aiSummary.length < 1 ? (
                    <div className='flex items-center gap-3'>
                        <div className='text-slate-600'>Loading Summary of the dataset</div>
                        <div className='w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin'></div>
                    </div>
                ) : (
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3 pb-3 border-b border-slate-200'>
                            <div className='w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center'>
                                <FileText className='text-emerald-600' />
                            </div>
                            <h3 className='text-lg font-semibold text-slate-800'>Dataset Summary</h3>
                        </div>
                        <div className='prose prose-slate max-w-none'>
                            <p className='text-slate-700 leading-relaxed whitespace-pre-wrap'>{aiSummary}</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default AiSummary