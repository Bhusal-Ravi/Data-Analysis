const express= require('express');
const mongoose=require('mongoose');
const router= express.Router();
const Dataset= require('../models/Dataset');

router.get('/datasetlist',async (req,res)=>{
    try{
        console.log("datasetlist hit")
    const userId= req.user._id;
    console.log(userId)
    const datasets=await Dataset.find({userId:userId})

    if (!datasets || datasets.length === 0) {
            return res.status(504).json({ error: true, message: "No datasets available" });
        }
       const datasetList = datasets.map(dataset => ({
            name: dataset.name,
            id: dataset._id,
            uploadedAt: dataset.uploadedAt,
            columns: dataset.columns
        }));
        console.log(datasetList)
          res.json({ success: true, datasets: datasetList });

    
    }catch(error){
         console.error('Error fetching datasets:', error);
        res.status(500).json({ error: true, message: "Internal server error" });
    }

})

module.exports= router