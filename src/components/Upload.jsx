import React, { useState } from 'react'
import { CirclePlus } from 'lucide-react';
import { CloudUpload } from 'lucide-react';

function Upload({ onUploadSuccess, onNewUpload }) {
    const [loading, setLoading] = useState(false);
    const [datasetId, setdataSetId] = useState([]);
    const [fileName, setFileName] = useState(null);
    const [filesize, setFileSize] = useState(0)

    async function handleUpload(e) {
        const file = e.target.files[0];
        setFileName(file);
        const size = ((file.size) / 1024).toFixed(1);
        setFileSize(size)
        console.log(file)
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file)
        setLoading(true);

        try {
            const response = await fetch("https://data-analysis-v3pv.onrender.com/api/upload", {
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
        <div className='flex justify-center items-center flex-col w-full'>
            <div className='flex justify-center bg-white/50 hover:bg-white/80 rounded-lg border-4 border-dashed border-emerald-500 flex-col p-4 sm:p-5 lg:p-6 xl:p-8 w-full max-w-md lg:max-w-lg xl:max-w-xl'>
                <div className='flex p-2 justify-center items-center'>
                    <CirclePlus className='mr-2 bg-slate-700 rounded-full text-emerald-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' />
                    <label className='font-semibold text-emerald-400 bg-slate-700 py-1 px-2 sm:px-3 lg:px-4 rounded-md text-sm sm:text-base lg:text-lg'>Upload File</label>
                </div>
                {fileName && <div className='flex bg-slate-700 justify-between px-3 sm:px-4 lg:px-5 py-1 rounded-md text-emerald-400 mb-2 items-center text-sm sm:text-base'><p>File: {fileName.name}</p><p className='ml-3 sm:ml-5'>Size: {filesize} KB</p></div>}
                <input onChange={handleUpload} className='file:mr-4 border-1 w-full h-full inset-0 file:rounded-md file:border-0 file:shadow-md file:bg-emerald-400 hover:file:bg-emerald-600 file:p-2 file:cursor-pointer cursor-pointer p-3 mb-1 rounded-xl' type='file' accept='.csv' />
                <p className='font-thin text-sm sm:text-base text-gray-800 text-center mt-2 mb-4 sm:mb-5'>File must be a <span className='bg-slate-700 text-emerald-400 rounded-md px-2 py-1'>. CSV</span> and upto <span className='bg-slate-700 text-emerald-400 rounded-md px-2 py-1'>4 mb</span></p>
                <div className='flex items-center justify-center'>
                    <CloudUpload className='mr-2 bg-slate-700 rounded-full p-1 h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-emerald-400' />
                    <p className='text-sm sm:text-base lg:text-lg'>Drag & Drop your file or <span className='text-emerald-400 px-2 py-1 bg-slate-700 text-semibold rounded-md'>browse to upload</span></p>
                </div>
            </div>

            {loading && <p className='text-sm sm:text-base lg:text-lg mt-4'>Loading ....</p>}
        </div>
    )
}

export default Upload
