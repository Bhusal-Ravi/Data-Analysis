import React from 'react'
import { createContext, useState, useEffect } from 'react'


export const UserContext = createContext();


function AuthContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getUser() {
        try {
            const response = await fetch('http://localhost:5001/auth/login/success', {
                credentials: 'include' //for cookies
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