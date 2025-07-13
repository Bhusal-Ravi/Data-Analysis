import React, { useEffect, useRef, useState } from 'react'

import GraphSelect from './GraphSelect';
import { ChartSpline } from 'lucide-react';
import { MoveDown } from 'lucide-react';
import { MoveUp } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';

function AiGraph({ id }) {
    const fetchedRef = useRef(false);

    const [aiGraph, setAiGraph] = useState([])
    const [plotData, setPlotData] = useState([])
    const [showGraph, setShowGraph] = useState(false)

    async function graphsuggestion(idcall) {
        try {
            const response = await fetch(`https://data-analysis-v3pv.onrender.com/api/aigraph/${idcall}`, {
                method: 'GET'
            })
            if (response.ok) {
                const result = await response.json();
                setAiGraph(result.data);
                console.log(result)
            }


        } catch (error) {
            console.log("Error in Ai Graph", error);
        }
    }

    async function graphData(recommendations) {
        try {
            const response = await fetch(`https://data-analysis-v3pv.onrender.com/api/graphdata/${id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(recommendations)
            })
            const result = await response.json();
            if (result.length > 0) {
                setPlotData(result);
            }

        } catch (error) {
            console.log("Error in Ai Graph Data fetch", error);
        }
    }


    useEffect(() => {
        if (id && !fetchedRef.current) {
            fetchedRef.current = true
            graphsuggestion(id)
        }
    }, [id])

    useEffect(() => {
        if (id && aiGraph?.recommendations) {

            graphData(aiGraph.recommendations);
        }
    }, [aiGraph])

    function handleGraphMenue() {
        setShowGraph((prev) => !prev)
    }


    return (
        <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-8">
            <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-br from-gray-900 to-emerald-600 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl">
                <div className="mb-4 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-emerald-400 to-emerald-600 text-slate-800 rounded-lg shadow-lg">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold">DataSet Graph Visualization</h3>
                    <p className="text-xs sm:text-sm lg:text-base opacity-90">
                        Presenting you Graphs Visualized by <span className='text-slate-800 text-bold animate-pulse'>AI</span>
                    </p>
                </div>
                {plotData.length > 0 && aiGraph?.recommendations.length > 0 ?
                    (<div className='flex flex-col lg:flex-row bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-md p-4 sm:p-5 lg:p-6'>
                        <div className="flex-1">
                            <h3 className="text-base sm:text-lg lg:text-xl flex font-bold text-emerald-800 mb-2"><span><ChartNoAxesCombined className='mr-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' /></span>The Graphs Have Arrived!</h3>
                            <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-2 sm:mb-3 text-bold">
                                Disclaimer: Graph type and columns were selected by AI based on your data. Some combinations may be imperfect—review results with care.
                            </p>
                            <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-2 sm:mb-3">
                                After an epic quest through numbers and chaos, our brave AI has returned with glorious graphs in hand.
                            </p>

                            <p className="text-xs text-slate-500">
                                Suit up and explore your data like never before—these charts are forged in the fires of logic and legend.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-4 lg:mt-0">
                            <div className='flex flex-row justify-center items-center gap-2 sm:gap-4'>
                                <div className='animate-bounce text-emerald-800'>{!showGraph ? <MoveDown className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' /> : <MoveUp className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' />}</div>
                                <button className="flex cursor-pointer items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-medium py-2 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs sm:text-sm lg:text-base" onClick={handleGraphMenue}>
                                    <ChartSpline className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                    <span>{!showGraph ? "Load Graphs" : "Hide Graphs"}</span></button>
                            </div>
                        </div>
                    </div>) :
                    (<div className='flex items-center justify-center bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-md p-4 sm:p-5'>
                        <h1 className='text-xs sm:text-sm lg:text-base'>Graph incoming! AI is battling the data dragons....</h1>
                        <span className='w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin'></span>
                    </div>)
                }
            </div>
            {showGraph && (
                <div className='mb-4 sm:mb-6 lg:mb-9'>
                    {plotData.length > 0 && aiGraph?.recommendations.length > 0 &&
                        aiGraph.recommendations.map((config, index) => (
                            <GraphSelect key={index} plotData={plotData} aiGraph={config} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default AiGraph
