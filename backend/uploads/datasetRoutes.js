const express= require('express');
const DatasetRow= require('../models/DatasetRow')
const router= express.Router();

router.get('/datasets/:id/rows',async(req,res)=>{
    const {id}= req.params;
    const page= parseInt (req.query.page) || 1;
    const limit= parseInt(req.query.limit) || 50;


    const rows= await DatasetRow.find({datasetId:id})
        .skip((page-1)*limit)
        .limit(limit);
        res.json(rows);
})

module.exports=router;