const express = require('express')
require('dotenv').config()

const app= express()
const PORT = process.env.PORT ||5000

app.listen((3000),()=>{
    console.log(`app is listening on ${PORT}`);
    
})