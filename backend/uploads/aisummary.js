const express= require('express')
const DatasetRow= require('../models/DatasetRow');
const Dataset= require('../models/Dataset');
const env= require("dotenv").config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const router= express.Router();

router.get('/aisummary/:id',async(req,res)=>{
  try{
    console.log("hello")
    const {id}= req.params;
    const rows= await DatasetRow
                        .find({datasetId:id})
                        .limit(10)
                        .lean()
    console.log(rows)

    const keys= Object.keys(rows[0]).filter((key)=>key!='_id' && key !='datasetId' && key !='__v')
    
    let data='';
    
    rows.map((row,key)=>{
          Object.entries(row)
          .filter(([key])=>key!='_id' && key !='datasetId' && key !='__v')
          .map(([key,value],index)=>{
            if(index===0) {
              return  data+=`[${value},`
            } else {
              return data+=`${value},`
            }
           
    })
          data +=`]\n`;
    })
   
    


    const prompt= `Here's a sample dataset with (sample of 10 values) with the following columns: ${keys}.\n\nSample rows:\n${data}\n\nPlease summarize what this dataset is about.Give response in a bullet form in points dont put * symbols`
    


   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const result= await model.generateContent(prompt);
    const response=  result.response;
    const text= response.text();
    console.log(text)

    if(text.length>0){
     res.json({ 
      message: "Success", 
      summary: text,
      
    });
  }else {
    res.status(404).json({error:true,message:"Cannot Summarize"})
  }
    
  }catch(error){
    if (!res.headersSent) {
      res.status(500).json({ 
        error: "Server error", 
        details: error.message 
      });
    }
  }
});

module.exports= router