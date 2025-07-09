import React, { useEffect, useRef, useState } from 'react'

function AiGraph({ id }) {
    const fetchedRef = useRef(false);
    const [aiGraph, setAiGraph] = useState([])

    async function graphsuggestion(idcall) {
        try {
            const response = await fetch(`http://localhost:5001/api/aigraph/${idcall}`, {
                method: 'GET'
            })
            if (response.ok) {
                const result = await response.json();
                setAiGraph(result);
                console.log(result)
            }


        } catch (error) {
            console.log("Error in Ai Graph", error);
        }
    }


    useEffect(() => {
        if (id && !fetchedRef.current) {
            fetchedRef.current = true
            graphsuggestion(id)
        }
    }, [id])


    return (
        <div>AiGraph</div>
    )
}

export default AiGraph