import React, { useContext, useEffect } from 'react'
import { UserContext } from './AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
    const { user, loading } = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user, loading])

    function handleLogin() {
        window.open('https://data-analysis-v3pv.onrender.com/auth/google', "_self");
    }

    if (loading) {
        return <div>Loading...</div>
    }

    function handleClick(value){
        navigate(`/${value}`);    
}

    return (
        <div
            className='flex flex-col bg-cover bg-center bg-fixed min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 relative'
            style={{
                backgroundImage: "url('/loginbg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Overlay for better readability */}
            <div className='absolute inset-0 bg-black/20'></div>

            <nav className='relative z-20 flex justify-between items-center py-6 sm:py-8 lg:py-10 xl:py-12'>
                <div className='flex items-center space-x-3'>
                    <span className='text-white font-semibold text-lg sm:text-xl lg:text-2xl drop-shadow-lg'>DataAnalytics Pro</span>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='hidden sm:flex items-center space-x-6 lg:space-x-8 text-white/90 text-sm lg:text-base font-medium'>
                        <button onClick={()=>{handleClick("features")}} className='hover:text-white cursor-pointer transition-colors'>Features</button>
                        
                        <button onClick={()=>{handleClick("about")}} className='hover:text-white cursor-pointer transition-colors'>About</button>
                    </div>
                </div>
            </nav>

            <div className='flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-16'>
                <div className='flex justify-center items-center w-full lg:w-auto relative z-10'>
                    <div className='bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 justify-center flex rounded-2xl mr-3 p-3 sm:p-4 lg:p-5 min-w-[64px] min-h-[64px] sm:min-w-[128px] sm:min-h-[128px] lg:min-w-[160px] lg:min-h-[160px] shadow-2xl border border-emerald-300/30'>
                        <img
                            className='min-w-[48px] min-h-[48px] h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 object-contain drop-shadow-lg'
                            src='/dataanalysisw.png'
                            alt="Data Analysis Logo"
                        />
                    </div>
                    <div className='text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold ml-2 sm:ml-4 lg:ml-6 flex flex-col leading-tight drop-shadow-2xl'>
                        <span className='bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent'>DATA</span>
                        <span className='bg-gradient-to-r from-emerald-100 to-white bg-clip-text text-transparent'>ANALYSIS</span>
                    </div>
                </div>
                <div className='w-full max-w-md lg:max-w-lg xl:max-w-xl px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='bg-white/10 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl w-full shadow-2xl border border-white/30'>
                        <div className='flex flex-col justify-center items-center mb-8'>
                            <div className='w-full flex justify-center mb-4'>
                                <div className='w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full'></div>
                            </div>
                            <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white bg-gradient-to-r from-emerald-500 to-emerald-700 p-3 rounded-xl text-center shadow-lg'>Login to Your Account</h1>
                            <p className='text-white/90 text-center text-sm sm:text-base lg:text-lg font-medium leading-relaxed'>Join the world of insights — sign in with Google to begin your DataAnalysis journey.</p>
                        </div>

                        <div className='flex justify-center mb-6'>
                            <div className='bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 justify-center flex rounded-2xl mr-3 p-4 lg:p-6 shadow-2xl border border-emerald-300/30'>
                                <img
                                    className='h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 object-contain drop-shadow-lg'
                                    src='/dataanalysisw.png'
                                    alt="Data Analysis Logo"
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button
                                className='flex items-center gap-3 font-semibold cursor-pointer bg-white/20 backdrop-blur-md border-2 border-white/30 hover:bg-white/30 hover:border-white/50 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 rounded-xl shadow-lg transition-all duration-200 text-sm sm:text-base lg:text-lg hover:shadow-xl transform hover:scale-105'
                                onClick={handleLogin}
                            >
                                <img className='h-5 w-5' src='/google.png' alt="Google Logo" />
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
