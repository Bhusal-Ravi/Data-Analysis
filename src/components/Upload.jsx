import React, { useState } from 'react'
import axios from 'axios'

function Upload({ onUploadSuccess, onNewUpload }) {
    const [loading, setLoading] = useState(false);
    const [datasetId, setdataSetId] = useState([]);

    async function handleUpload(e) {
        const file = e.target.files[0];
        console.log(file)
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file)
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5001/api/upload", {
                method: "POST",
                body: formData,
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error("Upload Failed");

            }
            const result = await response.json();

            console.log(result.datasetId)
            onUploadSuccess(result.datasetId)
            onNewUpload((prev) => prev + 1);
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className='flex justify-content items-center flex-col '>

            <input onChange={handleUpload} className='bg-gradient-to-r from-emerald-400 shadow-md border-2 border-b-blue-500 to-emerald-600 p-5 mb-5 rounded-xl ' type='file' placeholder='Upload your csv file' accept='.csv' />

            {loading && <p>Loading ....</p>}

        </div>
    )
}

export default Upload