import React, { createContext, useState } from 'react'

export const ReloadContext = createContext();
function ReloadProvider({ children }) {
    const [trigger, setTrigger] = useState(0)
    function handleReload() {
        setTrigger((prev) => prev + 1);
    }
    return (
        <ReloadContext.Provider value={{ handleReload, trigger }}>
            {children}
        </ReloadContext.Provider>
    )
}

export default ReloadProvider