const express= require("express");
const router = express.Router();
const DatasetRow= require('../models/DatasetRow')


router.post('/graphdata/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const recommendation= req.body;
       


        const keys= recommendation.reduce((acc,rec)=>{
            if(!acc.includes(rec.x)){
                acc.push(rec.x)
            }
            if(!acc.includes(rec.y)){
                acc.push(rec.y)
            }
            return acc;
        },[])

        const graphdata= await DatasetRow.find({datasetId:id})
                                        .select(keys.join(' ') + ' -_id')
                                        .limit(50);
                         

        console.log("graphdata",graphdata)

        if(graphdata.length>0){
            res.status(200).json(graphdata)
        }
        else{
            res.status(500).json("Couldnt find the dataset")
        }
        
    }catch(error){
        console.error(error);
    }
})

module.exports= router