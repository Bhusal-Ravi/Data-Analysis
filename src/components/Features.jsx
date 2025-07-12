import React from 'react'
import { Brain } from 'lucide-react';
import { Grid2x2Check } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';
function Features() {
    return (
        <div className=' flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-emerald-600'>
            <div className='grid grid-flow-col grid-cols-9 grind-rows-7 gap-10'>

                <div className='transition duration-300 delay-100 shadow-md hover:shadow-lg hover:scale-105 flex flex-col justify-start items-center col-span-3 px-2 py-5 row-span-5 border col-start-1 row-start-2  rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 h-[500px]'>

                    <img src='https://i.imgur.com/aMsvhsg.jpeg' alt='Ai Summary' className='h-[130px] transition delay-100 duration-300 shadow-sm hover:shadow-md hover:scale-105 w-full object-cover mb-5 rounded-md' />

                    <div className=' flex justify-center items-center flex-col'>
                        <div className='border-b-1 mb-2'>
                            <h1 className='flex text-emerald-600 font-semibold  '><Brain className='mr-2 ' />Ai Summary</h1>
                        </div>
                        <div>
                            <ul className='list-disc ml-5 text-sm '>
                                <li className='mt-4'>Automatic data insight generation</li>
                                <li className='mt-4'>Smart pattern detection</li>
                                <li className='mt-4'>Column and value breakdown</li>
                                <li className='mt-4'>Customizable by dataset</li>
                                <li className='mt-4'>Clean and concise output</li>
                                <li className='mt-4'>Accelerates decision-making</li>
                                <li className='mt-4'>Ideal for non-technical users</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=' transition duration-300 delay-100 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 hover:shadow-lg hover:scale-105 border-t-10 outline-emerald-600  flex flex-col justify-start items-center px-2 py-3 col-span-3 row-span-7 border border-emerald-600 col-start-4 row-start-1  rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 h-[600px]'>

                    <img src='https://i.imgur.com/rMYjlpi.jpeg' alt='Data Table' className='h-[160px] transition delay-100 duration-300 shadow-sm hover:shadow-md hover:scale-105 w-full object-cover mb-5 rounded-md ' />
                    <div className='flex justify-center items-center flex-col'>
                        <div className='border-b-1 mb-2'>
                            <h1 className='flex text-emerald-600 font-semibold  '><Brain className='mr-2 ' />Dataset Table</h1>
                        </div>
                        <div>
                            <ul className='list-disc ml-5 text-sm '>
                                <li className='mt-4'>Real-time row and column editing</li>
                                <li className='mt-4'>Instant data updates and re-rendering</li>
                                <li className='mt-4'>Clean and modern design</li>
                                <li className='mt-4'>Customizable by dataset</li>
                                <li className='mt-4'>Clean and concise output</li>
                                <li className='mt-4'>Accelerates decision-making</li>
                                <li className='mt-4'>Ideal for non-technical users</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className=' transition duration-300 delay-100 shadow-md hover:shadow-lg hover:scale-105 flex flex-col justify-start items-center col-span-3 px-2 py-5 row-span-5 border col-start-7 row-start-2  rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 h-[500px]'>

                    <img src='https://i.imgur.com/HMpRQSu.jpeg' alt='Ai Visualization' className='h-[130px] transition delay-100 duration-300 shadow-sm hover:shadow-md hover:scale-105 w-full object-cover mb-5 rounded-md ' />
                    <div className='flex justify-center items-center flex-col '>
                        <div className='border-b-1 mb-2'>
                            <h1 className='flex text-emerald-600 font-semibold  '><ChartNoAxesCombined className='mr-2 ' />Ai Visualization</h1>
                        </div>
                        <div>
                            <ul className='list-disc ml-5 text-sm '>
                                <li className='mt-4'>AI-suggested graph types</li>
                                <li className='mt-4'>Auto-mapped x and y axes</li>
                                <li className='mt-4'>Real-time graph rendering</li>
                                <li className='mt-4'>Interactive and responsive charts</li>
                                <li className='mt-4'>Clean and consistent styling</li>
                                <li className='mt-4'>Multiple chart types (bar, line, radar, etc.)</li>
                                <li className='mt-4'>Smart layout based on dataset structure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Features