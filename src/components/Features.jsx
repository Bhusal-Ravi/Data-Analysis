import React from 'react'
import { Brain } from 'lucide-react';
import { Grid2x2Check } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
function Features() {
    const navigate = useNavigate();
    const aiSummary = [
        'Generates plain-language summaries of your data',
        'Identifies key trends, anomalies, and distributions',
        'Breaks down columns with smart categorization',
        'Adapts insights to the context of each dataset',
        'Delivers readable explanations for non-technical users',
        'Speeds up understanding without needing graphs',
        'Perfect for quick overviews and reporting'
    ];

    const datasetTable = [
        'Inline editing of rows and columns in real-time',
        'Auto-saves changes and instantly reflects them in the UI',
        'Modern, spreadsheet-inspired interface',
        'Dynamic formatting based on data types',
        'Supports dataset-specific column configuration',
        'Ideal for hands-on data wrangling and cleanup',
        'Optimized for speed and accuracy in data entry'
    ];

    const aiVisualization = [
        'AI recommends best-fit chart types based on data',
        'Automatically assigns meaningful axes and labels',
        'Live-rendered charts that adapt on data change',
        'Hoverable tooltips and zoom for deep exploration',
        'Uniform styling for visual consistency',
        'Supports a range of charts: bar, line, radar, pie, etc.',
        'Intelligently arranges charts for readability'
    ];

    function handleClick() {
        navigate('/home')
    }
    return (
        <div className='relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-emerald-600'>
            <button onClick={handleClick} className=' flex absolute px-2 py-1 rounded-md bg-gradient-to-br from-emerald-400 to-teal-400 cursor-pointer left-10 top-10 transition duration-400 hover:scale-102'> <ChevronLeft />Back Home</button>
            <div className='mb-2 px-2 py-1 rounded-xl bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 drop-shadow-md  drop-shadow-cyan-400/70 transition-transform delay-100 duration-700  hover:drop-shadow-emerald-600/70 hover:drop-shadow-lg hover:scale-110'>

                <h1 className=' text-4xl font-bold text-white overflow-hidden'>DataAnalysis Features</h1>
            </div>
            <p className='mb-10 group text-white flex justif-center items-center'> <span className="
    bg-clip-text text-transparent 
    bg-gradient-to-r from-white to-white
    group-hover:from-amber-200 group-hover:to-amber-400
    transition-all duration-500
  ">
                Explore, Edit, and Understand Your Data — with a Little Help from AI
            </span><Sparkles className='text-amber-300  drop-shadow-sm   opacity-100
                                            transition-all duration-300
                                            group-hover:drop-shadow-amber-200
                                            group-hover:opacity-100 h-10 w-10 ml-3' /></p>
            <div className='grid grid-flow-col  grid-cols-9 grind-rows-7 gap-20 m-2'>

                <div className='transition duration-300 delay-100 shadow-md group hover:shadow-lg hover:scale-105 flex flex-col justify-start items-center col-span-3 px-2 py-5 row-span-5 border col-start-1 row-start-2  rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 h-[550px]'>

                    <div className='h-[140px] w-full mb-5 rounded-md overflow-hidden'>
                        <img src='https://i.imgur.com/aMsvhsg.jpeg' alt='Ai Summary' className=' transition-transform delay-100 duration-700 shadow-sm group-hover:shadow-md group-hover:scale-110 h-full w-full object-cover mb-5 rounded-md' />
                    </div>
                    <div className=' flex justify-center items-center flex-col'>
                        <div className='border-b-1 mb-2'>
                            <h1 className='flex text-emerald-600 font-semibold  '><Brain className='mr-2 ' />Ai Summary</h1>
                        </div>
                        <div>
                            <ul className='list-disc  ml-5 text-sm  '>
                                {aiSummary.map((ai) => (
                                    <li className='mt-4 text-slate/90 transition duration-200 hover:text-emerald-600 hover:drop-shadow-md'>{ai}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=' transition duration-300 delay-100  hover:drop-shadow-2xl hover:drop-shadow-teal-400  drop-shadow-lg drop-shadow-teal-400/50 hover:scale-110 border-t-10 outline-emerald-600  flex flex-col justify-start items-center px-2 py-3 col-span-3 row-span-7 border border-teal-400 col-start-4 row-start-1  rounded-xl bg-gradient-to-br from-slate-900/90 to-emerald-400/90  h-[650px]'>

                    <div className='h-[170px] w-full mb-5 rounded-md overflow-hidden'>
                        <img src='https://i.imgur.com/rMYjlpi.jpeg' alt='Ai Summary' className=' transition-transform delay-100 duration-700 shadow-sm group-hover:shadow-md group-hover:scale-110 h-full w-full object-cover mb-5 rounded-md' />
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='border-b-1 mb-2'>
                            <h1 className='flex text-emerald-400 font-semibold text-2xl  '><Grid2x2Check className='mr-2 h-10 w-10 bg-emerald-300 text-emerald-800 rounded-full p-1 mb-1 ' />Dataset Table</h1>
                        </div>
                        <div>
                            <ul className='list-disc ml-5 text-white/90 text-sm  '>
                                {datasetTable.map((ai) => (
                                    <li className='mt-4 text-slate/90 transition duration-200 hover:text-emerald-400 hover:drop-shadow-md'>{ai}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className=' transition duration-300 delay-100 shadow-md hover:shadow-lg hover:scale-105 flex flex-col group justify-start items-center col-span-3 px-2 py-5 row-span-5 border col-start-7 row-start-2  rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 h-[550px]'>

                    <div className='h-[140px] w-full mb-5 rounded-md overflow-hidden'>
                        <img src='https://i.imgur.com/HMpRQSu.jpeg' alt='Ai Summary' className=' transition-transform delay-100 duration-700 shadow-sm group-hover:shadow-md group-hover:scale-110 h-full w-full object-cover mb-5 rounded-md' />
                    </div>
                    <div className='flex justify-center items-center flex-col '>
                        <div className='border-b-1 mb-2'>
                            <h1 className='flex text-emerald-600 font-semibold  '><ChartNoAxesCombined className='mr-2 ' />Ai Visualization</h1>
                        </div>
                        <div>
                            <ul className='list-disc ml-5 text-sm  '>
                                {aiVisualization.map((ai) => (
                                    <li className='mt-4 text-slate/90 transition duration-200 hover:text-emerald-600 hover:drop-shadow-md'>{ai}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Features