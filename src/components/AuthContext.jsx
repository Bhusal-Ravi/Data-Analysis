import React from 'react'
import { createContext, useState, useEffect } from 'react'


export const UserContext = createContext();


function AuthContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getUser() {
        try {
            const response = await fetch('https://data-analysis-v3pv.onrender.com/auth/login/success', {
              credentials: 'include', // for cookies
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

            const result = await response.json();
            if (result.error === false) {
                setUser(result.user)
                console.log('User logged in:', result.user)
            } else {
                setUser(null);
                console.log('Not authorized:', result.message)
            }

        } catch (error) {
            console.error('Auth error:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        getUser();
    }, [])

    return (
        <UserContext.Provider value={{ user, loading, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext
