const express=require('express');
const multer= require('multer');
const csv= require('csv-parser');
const fs= require('fs') //file system node module (Note)
const Dataset= require("../models/Dataset");
const DatasetRow= require("../models/DatasetRow")


const router= express.Router();


const upload= multer({dest:"uploads/"});

router.post("/upload",upload.single('file'),async(req,res)=>{
    const filePath= req.file.path;
    const results= [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data",(data)=>results.push(data))
        .on('end',async()=>{
            const dataset= new Dataset({
                name: req.file.originalname,
                columns: Object.keys(results[0]), //only storing the keys of csv file
                uploadedAt: new Date(),
                userId: req.user._id
            })
            await dataset.save(); //keys dataset saved

            //inserting rows of csv dataset to avoid hitting buffer limit on mongodb

            const rowsWithId= results.map(row=>({
                datasetId: dataset._id,
                ...row
            }));

            await DatasetRow.insertMany(rowsWithId);

            fs.unlinkSync(filePath);

            res.json({
                datasetId: dataset._id,
            })
           
        });

        
        
})

module.exports = router;

