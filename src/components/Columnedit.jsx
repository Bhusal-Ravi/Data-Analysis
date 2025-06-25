import React, { useContext, useEffect, useState } from 'react'
import { ReloadContext } from './ReloadProvider';

function Columnedit({ rows, onColumnDelete }) {
    const [dataSetId, setDataSetId] = useState(null);
    const { handleReload } = useContext(ReloadContext)



    async function handleColumnClick(col) {
        try {
            const response = await fetch(`http://localhost:5001/api/columndelete/${dataSetId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ col })
            })

            const result = await response.json();

            if (response.ok) {
                console.log("Succcess")
                onColumnDelete()
                handleReload()
            } else {
                throw new Error(result.message || "Could not delete")
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (!rows || rows.length === 0) return
        const Id = Object.entries(rows[0]).find(([key, value]) => key === 'datasetId')
        console.log(Id)
        setDataSetId(Id[1])
    }, [rows])



    return (
        <div className='flex flex-col mt-5'>
            <h1>Columns Titles</h1>
            {rows.length > 0 && Object.entries(rows[0]).filter(([key]) => key != '__v' && key != '_id' && key != 'datasetId').map(([col, value], key) => (

                <button className=' transition duration-300 cursor-pointer hover:scale-110 bg-slate-700 m-5 ' key={key} onClick={() => handleColumnClick(col)}>
                    <div className='' key={col}>
                        <p className='text-emerald-400 m-1 '>{col}</p>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default Columnedit