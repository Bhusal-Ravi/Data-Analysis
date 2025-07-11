const express= require('express')
const DatasetRow= require('../models/DatasetRow');
const Dataset= require('../models/Dataset');
const env= require("dotenv").config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { access } = require('fs');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const router= express.Router();


router.get('/aigraph/:id',async(req,res)=>{
    try{
        const {id}= req.params

        const datarow= await DatasetRow.find(
            {datasetId:id}
        ).limit(30)
        .lean()
        
        let promptData=''
        let temp=``
        const keys= Object.keys(datarow[0]).filter((key)=>(key!='_id' && key !='datasetId' && key !='__v' ))
        console.log("aigraph",keys)
        const filtereddata= datarow.map((row)=>(
                Object.entries(row)
                        .filter(([key])=>(key!='_id' && key !='datasetId' && key !='__v'))
                        .reduce((acc,[key,value])=>{
                                acc[key]=value
                                return acc

                        },{})

         

        ))
        promptData= JSON.stringify(filtereddata,null,2)

       
        const prompt = `
                        You are a data visualization expert. I will provide you with a dataset sample of 30 values. 

                        Analyze the data and return chart recommendations in this exact JSON format:

                        {
                        "recommendations": [
                            {
                            "x": "column_name_for_x_axis",
                            "y": "column_name_for_y_axis", 
                            "graph": "LineChart|BarChart|PieChart|ScatterChart|AreaChart|RadarChart",
                            "description": "short message explaining why this chart works for this data"
                            }
                        ]
                        }

                        Rules:
                        1. Only use Recharts component names for example like (LineChart, BarChart, ScatterChart, AreaChart, RadarChart)
                        2. Choose the most appropriate columns for x and y axes for each chart
                        3. Keep description under 20 words
                        4. For PieChart, use the category column as x and value column as y but avoid pie chart as much as possible
                        5. Provide 2-4 different chart recommendations. No more than 4 graphs
                        6. Order recommendations by effectiveness (best first)
                        7. Return only valid JSON, without any markdown formatting, code blocks, or additional text. The response must start with { and end with }.
                        8. Each recommendation should use different chart types or different column combinations
                        9. Do not provide same type of graph twice (For example dont recommed scatter chart twice)

                        Dataset sample:
                        ${promptData}
                        `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-06-17" });
        const result = await model.generateContent(prompt);
        const response =  result.response;
        const text = response.text();
        
     

        
        try {
            const filter= text.replace(/^```json|```$/g,'').trim();
            const chartRecommendation = JSON.parse(filter);
            res.json({
                success: true,
                data: chartRecommendation,
                
            });
        } catch (parseError) {
           
            res.json({
                success: false,
                message: "AI response was not valid JSON",
                rawResponse: text
            });
        }

    } catch (error) {
        console.error('Error in aigraph route:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
});
        

    

module.exports= router;