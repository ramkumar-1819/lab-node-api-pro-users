//getting express,body=parser,cors package
const express=require('express');       
const bodyParser=require('body-parser');
const cors=require('cors');

//creating express server
const app=express();

//Parsing request body in bodyparser middleware and enabling cors to all origin
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

//connection to DB in Atlas
const {moongose}=require('../config/connection');

//Perfoming CRUD
const user=require('../Crud/crud');

//start server
app.listen(3000,(err,res)=>{
    if(err) throw err;
    console.log("Port Started at 3000")}
    );
app.use('/api',user);