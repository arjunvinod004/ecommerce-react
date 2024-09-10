const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8000
const collection = require('./mongoose')
const cart= require('./cart')

// app.use(cors({
//     origin:'http://localhost:8000',
//     methods:'GET'
// }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Adjust as needed
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

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


})
    .catch(err=>res.json(err))
})

// app.post('/getcart',(req,res)=>{
//     cart.create(req.body)
//     .then(users=>{res.json(users)
// console.log(users);
// console.log(req.body);


// })
//     .catch(err=>res.json(err))
// })





app.post('/getcart', async (req, res) => {
    try {
        const { title, price, category, image, description, id, quantity } = req.body;

        // Create a new cart item
        const newCartItem = new cart({
            id,
            title,
            price,
            category,
            image,
            description,
     id
            
        });

        // Save the item to the database
        await newCartItem.save();

        res.status(200).json({ message: 'Item added to cart successfully', item: newCartItem });
    } catch (err) {
        console.error('Error adding item to cart:', err);
        res.status(500).json({ message: 'Failed to add item to cart' });
    }
});



app.get('/getcarts',(req,res)=>{
    const id= req.params.id
    cart.find()
    .then(users=>{res.json(users)
        
})
    .catch(err=>res.json(err))
})

app.listen(port,function(){
    console.log(`connected to ${port}`);
    
})