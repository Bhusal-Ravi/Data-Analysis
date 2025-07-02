import React, { useEffect, useState } from 'react'

function Rowedit({ editRowValue }) {
    const [id, setId] = useState(null);
    const [editToogle, setEditToogle] = useState(false);
    const [editedValue, setEditedValue] = useState({});

    useEffect(() => {
        setId(editRowValue._id)

    }, [editRowValue])

    function handleChange(e, key) {
        let value = e.target.value
        setEditedValue((prev) => ({ ...prev, [key]: value }))
    }
    return (
        <>
            {editRowValue && Object.entries(editRowValue)
                .filter(([key]) => key !== "_id" && key !== "datasetId" && key !== "__v")
                .map(([key, val], i) => (
                    <td
                        key={key}
                        className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100 group-hover:text-gray-800"
                    >
                        <input className='p-2' value={editedValue[key] || ''} onChange={(e) => handleChange(e, key)} placeholder={`${val}`} />
                    </td>
                ))}
            <div><button className='bg-gradient-to-r  from-emerald-400 to-emerald-600 transition ease-in-out duration-300 hover:scale-110 px-3 py-1 mt-2 rounded-md'>Save</button></div>
        </>
    )
}

export default Rowedit