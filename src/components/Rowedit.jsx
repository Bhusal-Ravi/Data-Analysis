import React, { useCallback, useEffect, useState } from 'react'

function Rowedit({ editRowValue, rowUpdate }) {
    const [id, setId] = useState(null);
    const [editToogle, setEditToogle] = useState(false);
    const [editedValue, setEditedValue] = useState({});



    const fetchUpdatedRows = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/rowupdate/${id}`, {

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
                        className="px-6 py-4 text-sm text-gray-900 border-b border-gray-100 group-hover:text-gray-800"
                    >
                        <input className='p-2' value={editedValue[key] || ''} onChange={(e) => handleChange(e, key)} placeholder={`${val}`} />
                    </td>
                ))}
            <td><button onClick={handleSave} className='bg-gradient-to-r  from-emerald-400 to-emerald-600 transition ease-in-out duration-300 hover:scale-110 px-3 py-1 mt-2 rounded-md'>Save</button></td>
        </>
    )
}

export default Rowedit