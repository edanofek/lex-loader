const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(process.env.PORT || port,()=>{
    console.log("working on "+port)
});