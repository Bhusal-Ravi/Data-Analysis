const express= require("express");
const router = express.Router();
const DatasetRow= require('../models/DatasetRow')


router.post('/graphdata/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const recommendation= req.body;
       


        const keys= recommendation.reduce((acc,rec)=>{
           const xKey = rec.x.trim();
            const yKey = rec.y.trim();
            
            if (!acc.includes(xKey)) {
                acc.push(xKey);
            }
            if (!acc.includes(yKey)) {
                acc.push(yKey);
            }
            return acc;
        },[])
        
             const selectedObject= {};
             keys.forEach(key=>{
                selectedObject[key]=1;
             });
              selectedObject._id = 0;

        const graphdata = await DatasetRow.find({ datasetId: id })
            .select(selectedObject)
            .limit(30);
                         

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