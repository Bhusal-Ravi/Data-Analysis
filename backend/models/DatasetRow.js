const mongoose = require('mongoose')
const express = require('express')
const router= require('express').Router

const DatasetRowSchema= mongoose.Schema({
    datasetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dataset"},
},{strict:false})

module.exports= mongoose.model("DatasetRow",DatasetRowSchema)

