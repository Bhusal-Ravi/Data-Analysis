const express = require('express');
const cors = require('cors');
const app=express();
const dotenv= require ('dotenv').config();
const passport= require("passport");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const passportSetup=require('./passport')
const authRoute= require('./routes/auth');
const connectdb = require('./config/dbconnection');
const uploadRoute = require("./uploads/uploadRoute")
const DatasetRow= require('./uploads/datasetRoutes')
const userdataRoute= require('./uploads/userdata')
const columndeleteRoute= require('./uploads/columndelete')
const rowUpdateRoute= require('./uploads/rowUpdate')
const aisummaryRoute= require('./uploads/aisummary')
const downloadcsvRoute= require('./uploads/downloadcsv')
const aigraphRoute= require('./uploads/aigraph')
const graphdataRoute= require('./uploads/graphdatafetch')
const healthcheckRoute= require('./routes/healthcheck');

app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.DB_CONNECTION_STRING,
            ttl: 60 * 60 * 24 // 24 hours
        }),
        cookie: {
            secure: true, // true for HTTPS
            sameSite: 'none', // Required for cross-origin
            maxAge: 60 * 60 * 1000, // 1 hour
            httpOnly: true
        },
        proxy: true 
    })
);
app.use(
    cors({
        origin: ['https://data-analysis-cjd5.vercel.app'],
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        exposedHeaders: ['set-cookie'] 
    })
);
app.use(express.json()); // Important for parsing any json coming to the backend [Note]
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',authRoute);
app.use('/api',uploadRoute);
app.use('/api',DatasetRow);
app.use('/api',userdataRoute);
app.use('/api',columndeleteRoute);
app.use('/api',rowUpdateRoute);
app.use('/api',aisummaryRoute);
app.use('/api',downloadcsvRoute)
app.use('/api',aigraphRoute)
app.use('/api',graphdataRoute);
app.use('/api',healthcheckRoute);

connectdb();

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Running On Port ${PORT}`)
})
