import React, { useContext, useState } from 'react'
import Logout from './Logout'
import { UserContext } from './AuthContext'
import { User } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { user } = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [imageError, setImageError] = useState(false)
    const navigate = useNavigate();
    function handleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function handleClick(option) {
        if (option === "features") {
            navigate('/features')
        } else if (option === "pricing") {
            navigate('/pricing')
        } else {
            navigate('/about')
        }
    }
    return (
        <div className='bg-gradient-to-r fixed top-0 left-0 right-0 z-30 from-emerald-500 to-emerald-700 border-b-2 border-b-green-800 shadow-md px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-5 shadow-md'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center bg-white/20 rounded-lg text-white py-2 px-3 sm:px-4 lg:px-5 backdrop-blur-sm'>
                        {!imageError && user?.avatar ? (
                            <img
                                src={user.avatar}
                                alt="User Avatar"
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (<User size={20} className="text-white sm:w-6 sm:h-6 lg:w-8 lg:h-8" />)}
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <img
                        className='h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 object-contain drop-shadow-lg'
                        src='/dataanalysisw.png'
                        alt="Data Analysis Logo"
                    />
                    <h1 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white ml-2 sm:ml-3 lg:ml-4'>Data Analysis</h1>
                </div>
                <div className='hidden sm:flex items-center space-x-6 lg:space-x-8 text-white/90 text-sm lg:text-base font-medium'>
                    <button onClick={() => handleClick("features")} className='hover:text-white cursor-pointer transition-colors'>Features</button>
                    <button onClick={() => handleClick("pricing")} className='hover:text-white cursor-pointer transition-colors'>Pricing</button>
                    <button onClick={() => handleClick("about")} className='hover:text-white cursor-pointer transition-colors'>About</button>
                </div>
                <div>
                    {isMenuOpen ? (<X size={20} className='text-white sm:w-6 sm:h-6 lg:w-8 lg:h-8' onClick={handleMenu} />) : (<Menu size={20} className='text-white sm:w-6 sm:h-6 lg:w-8 lg:h-8' onClick={handleMenu} />)}

                    {isMenuOpen && (
                        <div className='bg-gradient-to-r from-teal-600 to-cyan-600 flex flex-col justify-start border-2 border-white/20 shadow-lg text-white absolute right-2 top-15 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]'>
                            <div className='p-4 sm:p-5 lg:p-6 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600'>
                                <div className='flex flex-row mb-4 sm:mb-5 lg:mb-6 items-center'>
                                    {!imageError && user?.avatar ? (
                                        <img
                                            src={user.avatar}
                                            alt="User Avatar"
                                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white/30"
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (<User size={24} className="text-white/90 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />)}
                                    <span className='font-semibold ml-3 text-white/90 text-sm sm:text-base lg:text-lg'>{user?.name}</span>
                                </div>
                                <h1 className='font-medium mb-4 sm:mb-5 lg:mb-6 text-white/80 text-sm sm:text-base'>Email: <span className='bg-white/20 p-1.5 px-2 rounded-md text-white'>{user?.email}</span></h1>
                                <div className='mb-2'><Logout /></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar