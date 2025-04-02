const express=require('express')
require('dotenv').config()
const nocache=require('nocache')
const mongoose= require('mongoose')
const path=require('path')
const cookieparser=require('cookie-parser')

const app=express()

app.use(nocache())
app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))


mongoose.connect(process.env.DB_URL)

.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log("mongodb not connected",err)
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.listen(process.env.PORT,()=>{
    console.log("server started at ",process.env.PORT)
})