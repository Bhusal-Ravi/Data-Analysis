const express= require ('express');
const DatasetRow = require('../models/DatasetRow');
const Dataset= require('../models/Dataset')


const router= express.Router();


router.put('/columnedit/:dataSetId',async (req,res)=>{
    try{
        const {dataSetId} = req.params
        const type= Number(req.query.type)
        const col= req.body.key
        const editkey= req.body.edit


        if (!col) {
      return res.status(400).json({ error: true, message: "Missing column name" });
    }

       
       if(type===0){
        const deletedColumn= await DatasetRow.updateMany(
            {datasetId:dataSetId},
            {$unset: {[col]:""}} //write col as [col] because mongo takes col as a key value instead [NOTE]
        )
        const datasetcolumnDelete= await Dataset.updateOne(
            {_id:dataSetId},
            {$pull:{columns:col}} // pull is used to remove a field from array
        )
        console.log(deletedColumn)
        console.log(type)
        console.log(datasetcolumnDelete)

        const dataset= await Dataset.findOne({_id:dataSetId})

        if(dataset.columns.length===0){
          const datasetDelete= await Dataset.deleteOne({_id:dataSetId});
          const datasetrowDelete = await DatasetRow.deleteMany({datasetId:dataSetId})
          console.log("Columns Completly Deleted",datasetDelete)
          console.log("Rows Completly Deleted",datasetrowDelete)


        }

        if (deletedColumn.modifiedCount === 0) {
    return res.status(404).json({ error: true, message: "Column not found or already deleted" });
        
       }
  

  res.status(200).json({ error: false, message: "Column successfully deleted" });
  }

  else if(type===1){
    console.log("Now we need to edit",editkey)
        const edited= await DatasetRow.updateMany(
          {datasetId:dataSetId},
          {$rename:{[col]:editkey}}
        )
        console.log(edited)

        const editedpulledcol = await Dataset.updateOne(
          {_id: dataSetId},
          {$pull:{columns:col}}
        )

        const editedpushedcol = await Dataset.updateOne(
          {_id: dataSetId},
          {$push:{columns:editkey}}
        )
        console.log(editedpulledcol,editedpushedcol)

        if(edited.modifiedCount===0 || editedpushedcol.modifiedCount===0){
          return res.status(404).json({ error: true, message: "Column not found or already edited" })
        }
        res.status(200).json({ error: false, message: "Column successfully Updated" });
          
  }

    }catch(error){
        console.error("Error deleting column:", error);
  res.status(500).json({ error: true, message: error});
    }
})

module.exports= router