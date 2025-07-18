import React, { useCallback, useEffect, useState } from 'react'
import { Save } from 'lucide-react';

function Rowedit({ editRowValue, rowUpdate }) {
    const [id, setId] = useState(null);
    const [editToogle, setEditToogle] = useState(false);
    const [editedValue, setEditedValue] = useState({});



    const fetchUpdatedRows = useCallback(async () => {
        try {
            const response = await fetch(`https://data-analysis-v3pv.onrender.com/api/rowupdate/${id}`, {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editedValue)
            }
            )
            const result = await response.json();
            if (response.ok) {
                rowUpdate();
            }
            if (!response.ok) {
                throw new Error(result.message)
            }

        } catch (error) {
            console.log(error)
        }

    }, [editedValue, id])

    useEffect(() => {
        if (editRowValue && editRowValue._id) {
            setId(editRowValue._id);
            setEditedValue(editRowValue);
        }

    }, [editRowValue])

    function handleChange(e, key) {
        let value = e.target.value
        setEditedValue((prev) => ({ ...prev, [key]: value }))
    }
    function handleSave() {
        fetchUpdatedRows()
    }
    return (
        <>
            {editRowValue && Object.entries(editRowValue)
                .filter(([key]) => key !== "_id" && key !== "datasetId" && key !== "__v")
                .map(([key, val], i) => (
                    <td
                        key={key}
                        className="px-6 py-4 bg-emerald-400/20 text-sm text-gray-900 border-b border-gray-100 group-hover:text-gray-800 whitespace-nowrap"
                    >
                        <input className='p-2 border-1 rounded-md w-full max-w-xs' value={editedValue[key] || ''} onChange={(e) => handleChange(e, key)} placeholder={`${val}`} />
                    </td>
                ))}
            <td className='sticky right-0 bg-emerald-400/20 shadow-lg border-l-2 border-emerald-200 flex justify-center items-center py-4 px-6'>
                <button onClick={handleSave} className='bg-gradient-to-r from-emerald-400 to-emerald-600 text-white transition ease-in-out duration-300 hover:scale-110 px-3 py-2 rounded-md shadow-md hover:shadow-lg flex items-center'>
                    <span><Save className='mr-2 w-4 h-4' /></span>Save
                </button>
            </td>
        </>
    )
}

export default Rowedit
