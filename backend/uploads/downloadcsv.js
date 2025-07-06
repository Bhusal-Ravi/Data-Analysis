const express = require('express');
const Dataset= require('../models/Dataset');
const DatasetRow= require('../models/DatasetRow');
const fs= require('fs');
const {Parser}= require('json2csv');
const router= express.Router()
const path= require("path");


router.get('/downloadcsv/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const parser= new Parser();
        
        const dataraw= await DatasetRow.find(
            {datasetId:id}
        ).lean()
        const dataset= await Dataset.findOne({_id:id});
        

       const data = dataraw.map(item => {
    const { _id, datasetId, __v, ...cleanedItem } = item;
    return cleanedItem;
});
        console.log(data)
        if(data && dataset){
    const csv= parser.parse(data);
    const filename=`${dataset.name || "dataset.csv"}`;
    const tempDir= path.join(__dirname,'../temp');
     const filePath = path.join(tempDir,filename)
     if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    
    fs.writeFileSync(filePath, csv);
    
   
     res.download(filePath, filename, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).json({ message: 'Error downloading file' });
      } else {
        fs.unlinkSync(filePath);
      }
    });
   
        }
        
    }catch(error){
        console.error(error);
        res.status(500).json("Error Downloading")
    }
})

module.exports= router


