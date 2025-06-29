import React, { useContext, useEffect, useState } from 'react'
import { ReloadContext } from './ReloadProvider';
import { Trash } from 'lucide-react';
import { Pencil } from 'lucide-react';

function Columnedit({ onColumnUpdate, col, datasetId }) {

    const { handleReload } = useContext(ReloadContext)
    const [keysdetail, setKeysdetail] = useState({})
    const [editMenue, setEditMenue] = useState(false)
    const [editedKey, setEditedKey] = useState("")





    async function handleColumnClick(type) {
        try {
            const response = await fetch(`http://localhost:5001/api/columnedit/${keysdetail.id}?type=${type}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ key: keysdetail.key, edit: editedKey })
            })

            const result = await response.json();

            if (response.ok) {
                console.log("Succcess")
                onColumnUpdate()
                handleReload()
            } else {
                throw new Error(result.message || "Could not update")
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setKeysdetail({
            key: col,
            id: datasetId
        })
    }, [col, datasetId])

    function handledelete() {
        handleColumnClick(0)

    }

    function handleEdit() {

        setEditMenue((prev) => !prev)
    }
    function handleEditApply(e) {
        e.preventDefault()

        if (!editedKey) {
            alert("Field cannot be empty");
            return
        } else {

            handleColumnClick(1);
        }
    }



    return (
        <div className='border-2 p-2 border-dashed transition ease-in-out delay-100 duration-300 hover'>
            <h1 className='font-semibold text-black'>Modification</h1>
            <div className='flex flex-col justify-center items-center rounded-md py-1  px-2'>
                <button onClick={handledelete} className='cursor-pointer flex bg-slate-700 px-2 py-1 rounded-md justify-between items-center delay-200 transition duration-300 hover:scale-110 '>
                    <span className='mr-2 '>Delete</span>
                    <Trash className='text-rose-400    ' />
                </button>
                <div className='relative'>
                    <button onClick={handleEdit} className='flex delay-200 transition duration-300 hover:scale-110 justify-between cursor-pointer bg-slate-700 rounded-md px-2 py-1 items-center mt-5 '>
                        <span className='mr-2  ' >Edit</span>
                        <Pencil className='text-emerald-400 ml-2  transition duration-300 delay-200 hover:scale-110' />
                    </button>
                    {editMenue &&
                        <div className='absolute rounded-md   bg-white  border-2 border-dashed  top-20 p-10 '>
                            <h1 className='font-semibold bg-slate-700 px-2 py-1 rounded-md'>Edit the Column's title </h1>
                            <form onSubmit={handleEditApply}>
                                <input id='edit' type='text' value={editedKey} onChange={(e) => { setEditedKey(e.target.value) }} placeholder={`${keysdetail.key}`} className=' mb-4 bg-white text-black text-md font-semi-bold px-2  border-2 mt-2 h-20 ' />
                                <input type='submit' value="Submit" className='bg-gradient-to-r text-white px-2 py-1 rounded-md transition duration-300 hover:scale-110 cursor-pointer from-emerald-500 to-emerald-700' />
                            </form>

                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Columnedit