const express= require('express');
const DatasetRow= require('../models/DatasetRow')
const router= express.Router();

router.get('/datasets/:id/rows',async(req,res)=>{
    const {id}= req.params;
    const sort = req.query.sort;
    const order= req.query.order;
    const page= parseInt (req.query.page) || 1;
    const limit= parseInt(req.query.limit) || 50;

    const orderBinary=  order==="ascending"? 1:-1;

    const sortObj=sort?({[sort]:orderBinary}): ({})

    console.log("Hellos okok ",sort,order)

    const rows= await DatasetRow.find({datasetId:id})
        .sort(sortObj)
        .skip((page-1)*limit)
        .limit(limit);
        res.json(rows);
})

module.exports=router;