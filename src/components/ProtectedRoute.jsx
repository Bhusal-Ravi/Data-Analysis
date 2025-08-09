import React, { useContext } from 'react'
import { UserContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

    const { user, loading } = useContext(UserContext)

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center text-7xl text-emerald-800">Wait The Backend Is Starting</div>
    }

    if (!user) {
        return <Navigate to='/' replace />
    }


    return children
}

export default ProtectedRoute
