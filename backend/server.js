const express = require('express');
const cors = require('cors');
const app=express();
const dotenv= require ('dotenv').config();
const passport= require("passport");
const session = require("express-session");
const passportSetup=require('./passport')
const authRoute= require('./routes/auth');
const connectdb = require('./config/dbconnection');
const uploadRoute = require("./uploads/uploadRoute")
const DatasetRow= require('./uploads/datasetRoutes')
const userdataRoute= require('./uploads/userdata')
const columndeleteRoute= require('./uploads/columndelete')
const rowUpdateRoute= require('./uploads/rowUpdate')

app.use(
    session({
        secret: process.env.SESSION_KEY || 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, 
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }
    })
);
app.use(
    cors({
    origin:'http://localhost:5175',
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
})
)
app.use(express.json()); // Important for parsing any json coming to the backend [Note]
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',authRoute);
app.use('/api',uploadRoute);
app.use('/api',DatasetRow);
app.use('/api',userdataRoute);
app.use('/api',columndeleteRoute);
app.use('/api',rowUpdateRoute)

connectdb();

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Running On Port ${PORT}`)
})