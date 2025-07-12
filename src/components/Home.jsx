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
            <div className='min-h-screen'
                style={{
                    backgroundImage: "url('/loginbg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    paddingTop: "80px",
                }}
            >
                <div className='absolute inset-0 z-10 bg-black/20 pointer-events-none'></div>
                <div className='relative z-20 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12 xl:py-16'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12'>
                            <div className='flex-1 lg:max-w-md xl:max-w-lg'>
                                <Upload onUploadSuccess={setdataSetId} onNewUpload={setNewUploads} />
                            </div>
                            <div className='flex-1 lg:max-w-md xl:max-w-lg'>
                                <UserData onDataSetClick={setdataSetId} newUploads={newUploads} selectedDatasetId={datasetId} onTrigger={triggerUpdate} />
                            </div>
                        </div>
                        <div className='w-full'>
                            {datasetId && <DataTable datasetId={datasetId} />}
                        </div>
                    </div>
                </div>
            </div>
        </ReloadProvider>
    )
}

export default Home