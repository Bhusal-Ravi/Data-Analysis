import React, { useEffect } from 'react'



function Columnedit({ rows }) {

    useEffect(() => {

    }, [])

    return (
        <div className='flex flex-col mt-5'>
            <h1>Columns Titles</h1>
            {rows.length > 0 && Object.entries(rows[0]).filter(([key]) => key != '__v' && key != '_id' && key != 'datasetId').map(([col, value], key) => (

                <button className=' transition duration-300 hover:scale-110 bg-slate-700 m-5 '><div className='' key={col}>
                    <p className='text-emerald-400 m-1 '>{col}</p>
                </div>
                </button>
            ))}
        </div>
    )
}

export default Columnedit