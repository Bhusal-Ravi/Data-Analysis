import React, { useEffect, useState } from 'react'
import Upload from './Upload'
import DataTable from './DataTable';
import UserData from './UserData';
import ReloadProvider from './ReloadProvider';

function Home() {
    const [datasetId, setdataSetId] = useState(null);
    const [newUploads, setNewUploads] = useState(0);
    const [triggerUpdate, setTriggerUpdate] = useState(0);


    useEffect(() => {
        console.log("new dataset activated", datasetId)
    }, [datasetId])
    return (
        <ReloadProvider>
            < div className=''
                style={{
                    backgroundImage: "url('/loginbg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    backgroundAttachment: "fixed",
                    paddingTop: "80px",
                }}
            >
                <div className='absolute inset-0 z-10  bg-black/20 pointer-events-none'></div>
                <div className='flex justify-center relative z-20 m-20 items-center    flex-col'>
                    <div className='flex gap-5'>
                        <Upload onUploadSuccess={setdataSetId} onNewUpload={setNewUploads} />

                        <UserData onDataSetClick={setdataSetId} newUploads={newUploads} selectedDatasetId={datasetId} onTrigger={triggerUpdate} />

                    </div>
                    <div className='ml-5 '>
                        {datasetId && <DataTable datasetId={datasetId} />}

                    </div>


                </div>
            </div >
        </ReloadProvider>
    )
}

export default Home