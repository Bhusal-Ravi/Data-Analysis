const express= require('express')
const DatasetRow= require('../models/DatasetRow');
const Dataset= require('../models/Dataset');
const env= require("dotenv").config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const router= express.Router();


router.get('/aigraph/:id',async(req,res)=>{
    try{
        const {id}= req.params

        const datarow= await DatasetRow.find(
            {datasetId:id}
        ).limit(30)
        console.log("ai graph",datarow)


    }catch(error){

    }
})

module.exports= router;