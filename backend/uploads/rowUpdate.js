const express= require("express");
const DatasetRow= require('../models/DatasetRow');

router= express.Router();



router.put('/rowupdate/:id',async(req,res)=>{
    const {id}= req.params;
    const editedValues= req.body
    try{
        const update= await DatasetRow.updateMany(
            {_id:id},
            {$set:editedValues}
        )
        console.log(update)
         res.json({error:false,message:"Row updated sucessfully"})
        if(!update.modifiedCount){
            res.status(404).json({error:true,message:"Document not found"})
        }
       
    }catch(error){
        console.error("Update failed:",error)
        res.status(500).json({ error:true, message: "Update failed" });
    }
})


module.exports= router