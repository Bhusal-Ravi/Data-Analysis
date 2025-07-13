import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { SlSocialTwitter } from "react-icons/sl";
import { Heart, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



function Footer() {
    const navigate = useNavigate();
    function handleClick(value) {
        navigate(`/${value}`)
    }
    return (
        <footer className="w-full bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-800 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">


                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-emerald-300">DataAnalysis</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Making data accessible for everyone. A powerful tool for data exploration,
                            analysis, and visualization designed for both technical and non-technical users.
                        </p>
                        <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>Kathmandu, Nepal</span>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-emerald-300">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><button className='cursor-pointer' onClick={() => { handleClick("about") }}>About</button></li>
                            <li><buton className='cursor-pointer' onClick={() => { handleClick("features") }}>Features</buton></li>

                        </ul>
                    </div>


                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-emerald-300">Connect With Us</h4>
                        <div className="flex items-center text-gray-400 text-sm mb-4">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>ravibh2003@gmail.com</span>
                        </div>


                        <div className='flex justify-start items-center gap-4'>
                            <a href='https://github.com/Bhusal-Ravi' target="_blank" rel="noopener noreferrer">
                                <div className='bg-slate-800 group/icon cursor-pointer relative rounded-full p-3 hover:bg-slate-700 transition duration-300'>
                                    <FiGithub className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white' />
                                    <div className='opacity-0 absolute group-hover/icon:opacity-100 -top-10 left-1/2 -translate-x-1/2 text-white bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap transition duration-300'>
                                        GitHub
                                    </div>
                                </div>
                            </a>

                            <a href='https://www.instagram.com/com_plete_silent/' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full relative group/icon cursor-pointer bg-slate-800 p-3 hover:bg-slate-700 transition duration-300'>
                                    <FaInstagram className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white' />
                                    <div className='opacity-0 absolute group-hover/icon:opacity-100 -top-10 left-1/2 -translate-x-1/2 text-white bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap transition duration-300'>
                                        Instagram
                                    </div>
                                </div>
                            </a>

                            <a href='https://discord.gg/xERTg89H' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full relative group/icon cursor-pointer bg-slate-800 p-3 hover:bg-slate-700 transition duration-300'>
                                    <RxDiscordLogo className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white' />
                                    <div className='opacity-0 absolute group-hover/icon:opacity-100 -top-10 left-1/2 -translate-x-1/2 text-white bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap transition duration-300'>
                                        Discord
                                    </div>
                                </div>
                            </a>

                            <a href='https://x.com/RaviBhusal99965' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full relative group/icon cursor-pointer bg-slate-800 p-3 hover:bg-slate-700 transition duration-300'>
                                    <SlSocialTwitter className='h-5 w-5 text-gray-400 transition duration-300 group-hover/icon:text-white' />
                                    <div className='opacity-0 absolute group-hover/icon:opacity-100 -top-10 left-1/2 -translate-x-1/2 text-white bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap transition duration-300'>
                                        Twitter
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">


                        <div className="flex items-center text-gray-400 text-sm">
                            <span>© 2025 DataAnalysis. All rights reserved.</span>
                            <Heart className="h-4 w-4 mx-2 text-red-500" />
                            <span>Made by Ravi Bhusal</span>
                        </div>



                    </div>
                </div>


                <div className="text-center mt-6 text-xs text-gray-500">
                    <p>DataAnalysis v1.0.0 • Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;