require('dotenv').config()
const express =require('express')

// express app 
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })// next() to run the next request,req.path to find the path .req.method to finde the request type

//listen for request
app.listen(process.env.PORT,()=>{console.log("listing to port 4000  ")})

//route
app.get("/",(req,res)=>{
    res.json({message:"welcome to the app "})
})