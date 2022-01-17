const express = require('express');
const app = express();
const PORT = 5421

app.get('/',(req,res)=>{
    res.send('hello cowboy')
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})