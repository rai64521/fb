const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello Express")
})

const port = 4040

app.listen(port, ()=>{
    console.log(`App is listen on port: ${port}`);
    
})