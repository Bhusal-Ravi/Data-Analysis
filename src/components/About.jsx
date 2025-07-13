import React from 'react'
import { Heart, Target, Users, Lightbulb, Code, Sparkles } from 'lucide-react';
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { SlSocialTwitter } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { UserRoundSearch } from 'lucide-react';
import { AppWindow } from 'lucide-react';
import { Component } from 'lucide-react';
import { MapPin } from 'lucide-react';

function About() {
    const navigate = useNavigate()
    const whoItsFor = [
        'Non-technical users needing quick insights',
        'Developers and analysts building fast prototypes',
        'Students learning how to understand data',
        'Teams exploring datasets collaboratively',
        'Anyone who wants clarity from messy data'
    ];

    const whyThisSystemWasCreated = [
        'To simplify exploring complex datasets',
        'To help non-technical users make sense of data',
        'To reduce the time between raw data and insights',
        'To blend AI with data handling — effortlessly',
        'To make data analysis visually intuitive'
    ];

    const designPrinciples = [
        'Dark, accessible UI for focus',
        'Fast, no-refresh experience',
        'No clutter, just clarity',
        'Everything reacts as you\'d expect',
        'Minimal, subtle UX choices appeal to devs and designers'
    ];
    function handleClick() {
        navigate('/home')
    }
    return (
        <div className='flex flex-col px-2 relative justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-emerald-600'>
            <button onClick={handleClick} className='  flex absolute px-2 py-1 rounded-md bg-gradient-to-br from-emerald-400 to-teal-400 cursor-pointer left-10 top-10 transition duration-400 hover:scale-102'> <ChevronLeft />Back Home</button>
            <div className='mb-2 mt-5 px-2 py-1 rounded-xl bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 drop-shadow-md drop-shadow-cyan-400/70 transition-transform delay-100 duration-700 hover:drop-shadow-emerald-600/70 hover:drop-shadow-lg hover:scale-110'>
                <h1 className='text-4xl font-bold text-white overflow-hidden'>About DataAnalysis</h1>
            </div>

            <p className='mb-10 group text-white flex justify-center items-center text-lg'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-amber-200 group-hover:to-amber-400 transition-all duration-500">
                    Making Data Accessible for Everyone
                </span>
                <Sparkles className='text-amber-300 drop-shadow-sm opacity-100 transition-all duration-300 group-hover:drop-shadow-amber-200 group-hover:opacity-100 h-10 w-10 ml-3' />
            </p>


            <div className='w-full max-w-4xl group rounded-md m-2 mx-auto p-4 bg-gradient-to-r from-slate-900 via-emerald-700 to-slate-900 transition duration-400 hover:drop-shadow-2xl hover:drop-shadow-teal-400 hover:scale-102 drop-shadow-lg drop-shadow-teal-400/50 '>
                <div className='flex justify-center items-center '>
                    <div className='  h-25 w-25 mr-5 overflow-hidden'>
                        <img src='https://i.imgur.com/0HZFPar.jpeg' className='rounded-full h-25 w-25 transition duration-300 group-hover:scale-115 object-cover object-left ' />
                    </div>
                    <div className='flex flex-col font-semibold text-emerald-400'>
                        <h1 className='text-xl font-bold text-white'>About The Developer</h1>
                        <h1 className='flex flex-col justify-center items-center'>- Ravi Bhusal <span className='font-thin text-sm ml-2 flex text-white/50'>< MapPin className='mr-2' />Nepal, Kathmandu</span></h1>

                    </div>
                </div>
                <div className='mt-3'>
                    <div className='flex justify-center items-center gap-5 '>
                        <a href='https://github.com/Bhusal-Ravi ' target="_blank" rel="noopener noreferrer">
                            <div className='bg-slate-800 group/icon cursor-pointer relative rounded-full p-2'>
                                <FiGithub className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white hover:font-bold' />
                                <div className='opacity-0 absolute group-hover/icon:opacity-100 top-9 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded-sm transition duration-700'>Github</div>
                            </div>
                        </a>

                        <a href='https://www.instagram.com/com_plete_silent/' target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full relative group/icon cursor-pointer bg-slate-800 p-2'>
                                < FaInstagram className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white hover:font-bold' />
                                <div className='opacity-0 absolute group-hover/icon:opacity-100 top-9 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded-sm transition duration-700'>Instagram</div>
                            </div>
                        </a>

                        <a href='https://discord.gg/xERTg89H' target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full relative group/icon cursor-pointer bg-slate-800 p-2'>
                                <RxDiscordLogo className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white hover:font-bold' />
                                <div className='opacity-0 absolute group-hover/icon:opacity-100 top-9 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded-sm transition duration-700'>Discord</div>
                            </div>
                        </a>

                        <a href='https://x.com/RaviBhusal99965' target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full relative group/icon cursor-pointer bg-slate-800 p-2'>
                                <SlSocialTwitter className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white hover:font-bold' />
                                <div className='opacity-0 absolute group-hover/icon:opacity-100 top-9 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded-sm transition duration-700'>Twitter</div>
                            </div>
                        </a>


                    </div>
                </div>
            </div>


            <div className='w-full max-w-6xl mb-10   mx-auto flex flex-row mt-10 justify-center items-center '>

                <div className=' w-full rounded-lg h-[500px] mr-10 group transition duration-400 hover:scale-105 p-2   flex flex-col justify-start items-center  bg-gradient-to-r from-emerald-50  to-emerald-100  '>

                    <div className='h-[140px] w-full overflow-hidden mb-5'>
                        <img src='https://i.imgur.com/KUuKhyA.jpeg' className='rounded-md object-cover transition duration-400 group-hover:scale-105' />
                    </div>
                    <h1 className='border-b-1 flex text-emerald-800 font-semibold '>
                        <UserRoundSearch className='mr-2' />Who Its For
                    </h1>


                    <div className='mt-5'>
                        <ul className='list-disc list-inside text-sm font-thin px-4 '>
                            {whoItsFor.map((data) => (
                                <li className='mt-5 transition duration-200 hover:text-emerald-700 '>{data}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full h-[600px] border-t-10 border-emerald-400 rounded-lg p-2 mr-10  group transition duration-400 hover:scale-105   flex flex-col justify-start items-center    hover:drop-shadow-2xl hover:drop-shadow-teal-400  drop-shadow-lg drop-shadow-teal-400/50 bg-gradient-to-r from-slate-800  to-emerald-700  '>

                    <div className='h-[150px] w-full overflow-hidden mb-5'>
                        <img src='https://i.imgur.com/XJ4FGbG.jpeg' className='rounded-md object-cover transition duration-400 group-hover:scale-105' />
                    </div>
                    <h1 className='border-b-1 text-emerald-400 flex font-bold '><AppWindow className='mr-2' />Reason For Development</h1>

                    <div className='mt-5'>
                        <ul className='px-4 list-disc list-inside text-white text-md font-thin'>
                            {whyThisSystemWasCreated.map((data) => (
                                <li className='mt-5 transition duration-200 hover:text-emerald-400'>{data}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full h-[550px] rounded-lg group transition duration-400 hover:scale-105 p-2   flex flex-col justify-start items-center bg-gradient-to-r from-emerald-50  to-emerald-100 '>

                    <div className='h-[140px] w-full overflow-hidden mb-5'>
                        <img src='https://i.imgur.com/Y1P6UNR.jpeg' className='rounded-md object-cover transition duration-400 group-hover:scale-105' />
                    </div>
                    <h1 className='border-b-1 flex  text-emerald-800 font-semibold '>< Component className='mr-2' />Design Principles</h1>

                    <div className='mt-5 px-4'>
                        <ul className='list-disc list-inside text-sm font-thin'>
                            {designPrinciples.map((data) => (
                                <li className='mt-5 transition duration-200 hover:text-emerald-700'>{data}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default About