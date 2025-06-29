import React, { useContext, useState } from 'react'
import Logout from './Logout'
import { UserContext } from './AuthContext'
import { User } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

function Navbar() {
    const { user } = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [imageError, setImageError] = useState(false)
    function handleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className='bg-gradient-to-r fixed top-0 left-0 right-0 z-30 from-emerald-500 to-emerald-700 border-b-2 border-b-green-800 shadow-md px-6 py-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center '>
                    <div className='flex items-center justify-center bg-white/20 rounded-lg text-white py-2 px-4 backdrop-blur-sm'>
                        {!imageError && user?.avatar ? (
                            <img
                                src={user.avatar}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (<User size={20} className="text-white" />)}

                    </div>

                </div>
                <div className='flex flex-row justify-center items-center'>
                    <img
                        className='h-10 w-10 sm:h-15 sm:w-15 md:h-20 md:w-20 object-contain drop-shadow-lg'
                        src='/dataanalysisw.png'
                        alt="Data Analysis Logo"
                    />
                    <h1 className='text-2xl font-bold text-white'>Data Analysis</h1>
                </div>

                <div>
                    {isMenuOpen ? (<X size={25} className='text-white' onClick={handleMenu} />) : (<Menu size={25} className='text-white' onClick={handleMenu} />)}

                    {isMenuOpen && (
                        <div className='bg-gradient-to-r from-teal-600 to-cyan-600 flex flex-col justify-start border-2 border-white/20 shadow-lg text-white absolute right-2 top-15 p-5 rounded-xl backdrop-blur-sm'>
                            <div className='p-4 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600'>
                                <div className='flex flex-row mb-5 items-center'>
                                    {!imageError && user?.avatar ? (
                                        <img
                                            src={user.avatar}
                                            alt="User Avatar"
                                            className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (<User size={24} className="text-white/90" />)}
                                    <span className='font-semibold ml-3 text-white/90'>{user?.name}</span>
                                </div>
                                <h1 className='font-medium mb-5 text-white/80'>Email: <span className='bg-white/20 p-1.5 px-2 rounded-md text-white'>{user?.email}</span></h1>
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