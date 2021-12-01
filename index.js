const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// app.use(express.static('public'))
// app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port,()=>{
    console.log("working on "+port)
});