const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8000
const collection = require('./mongoose')

app.use(cors({
    origin:'http://localhost:8000'
}))

app.get('/',(req,res)=>{
    res.send('<h1>hi node</h1>')
})

app.get('/getmainfunction',(req,res)=>{
  collection.find()
    .then(users=>{
        res.json(users)
        
        
    }
    )
    .catch(err=>
        res.json(err)
    )
})

app.get('/getmainfunctions/:id',(req,res)=>{
    const id= req.params.id
    collection.findById({_id:id})
    .then(users=>{res.json(users)
console.log(users);

})
    .catch(err=>res.json(err))
})

app.listen(port,function(){
    console.log(`connected to ${port}`);
    
})