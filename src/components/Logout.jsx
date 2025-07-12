import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './AuthContext';

function Logout() {
    const [logoutError, setLogoutError] = useState(null);
    const navigate = useNavigate();
    const { logout } = useContext(UserContext);

    async function handleLogout() {
        try {
            const response = await fetch('http://localhost:5001/auth/logout', {
                credentials: 'include',
                method: 'POST'
            })
            if (response) {
                const result = await response.json();
                console.log(result)
                if (result.message) {
                    setLogoutError(result.message)
                }

                if (result.logoutcode === 1) {
                    logout();
                    navigate('/');
                }
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
    return (
        <div>
            <button className='bg-gradient-to-r from-teal-400 to-teal-600 rounded-md py-2 px-3 sm:px-4 lg:px-5 hover:bg-red-400 cursor-pointer font-semibold text-xs sm:text-sm lg:text-base transition-all duration-200' onClick={handleLogout}><span>Logout</span></button>
            {logoutError && (<p className='text-xs sm:text-sm lg:text-base text-red-600 mt-2'>{logoutError}</p>)}
        </div>
    )
}

export default Logout