const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'src')))
app.use('/openai',require('./routes/openai_routes'))
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})