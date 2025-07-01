import React, { useEffect, useState } from 'react'

function Rowedit({ rowId }) {
    const [id, setId] = useState(null);
    const [editToogle, setEditToogle] = useState(false);
    const [editedValue, setEditedValue] = useState({});

    useEffect(() => {
        setId(rowId)
        { id ? console.log(rowId) : console.log("no id hahaha") }
    })
    return (
        <div>Edit Mode</div>
    )
}

export default Rowedit