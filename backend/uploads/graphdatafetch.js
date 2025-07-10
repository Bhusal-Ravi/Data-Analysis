const express= require("express");
const router = express.Router();
const DatasetRow= require('../models/DatasetRow')


router.post('/graphdata/:id',async(req,res)=>{
    try{
        const {id}= req.params;
        const recommendation= req.body;
        console.log("graphdata",recommendation,id)


        const keys= recommendation.reduce((acc,rec)=>{
            if(!access.includes(rec.x)){
                acc.push(rec.x)
            }
            if(!access.includes(rec.y)){
                acc.push(rec.y)
            }
            return acc;
        },[])

        console.log(keys)
        
    }catch(error){

    }
})

module.exports= router