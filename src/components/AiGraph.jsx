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
                setAiGraph(result.data);
                console.log(result)
            }


        } catch (error) {
            console.log("Error in Ai Graph", error);
        }
    }

    async function graphData(recommendations) {
        try {
            const response = await fetch(`http://localhost:5001/api/graphdata/${id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(recommendations)
            })
            const result = await response.json();
            console.log(result)
        } catch (error) {
            console.log("Error in Ai Graph Data fetch", error);
        }
    }


    useEffect(() => {
        if (id && !fetchedRef.current) {
            fetchedRef.current = true
            graphsuggestion(id)
        }
    }, [id])

    useEffect(() => {
        if (id && aiGraph?.recommendations) {

            graphData(aiGraph.recommendations);
        }
    }, [aiGraph])


    return (
        <div>AiGraph</div>
    )
}

export default AiGraph