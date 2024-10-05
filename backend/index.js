const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8000
const collection = require('./mongoose')
const cart= require('./cart')
const relats = require('./related');
const order=require('./order')

const multer = require('multer')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
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




app.post('/addproducts', async (req, res) => {
  const products = req.body; // Expecting an array of products
console.log(products);

  try {
    // Assuming `collection` is your database collection
    const result = await collection.insertMany(products); // Use insertMany for an array
    res.status(201).json({ success: true, data: result }
     
      
    );
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



app.get('/getmainfunctions/:id',(req,res)=>{
    const id= req.params.id
    collection.findById({_id:id})
    .then(users=>{res.json(users)


})
    .catch(err=>res.json(err))
})




app.post('/getcart', async (req, res) => {
    // Destructure the incoming data and ensure they're of the correct type
    let { totalPrice, image, title, usersname } = req.body;
  
    // If any of the fields are arrays, pick the first value (or handle as needed)
  
  
    // Convert totalPrice to a number if it's not already
    // totalPrice = Number(totalPrice);
  
    try {
      // Create and save the new cart entry
      
    //   const newCart = new cart({
    //     totalPrice,
    //     image,
    //     title,
    //     usersname
    //   });
    for (let i = 0; i < totalPrice.length; i++) {
        const newCart = new cart({
          totalPrice: totalPrice[i],
          image: image[i],
          title: title[i],
          usersname: usersname
        })
         await newCart.save();
        // console.log(newCart);
    }
      // Save to MongoDB
  
  
      // Send a success response back to the client
      res.json({ message: 'Data saved successfully', });
    } 
    
    
    
    catch (error) {
      console.error('Error saving data to MongoDB:', error);
      res.status(500).json({ message: 'Failed to save data' });
    }
  });
  
  





app.post('/orders', async (req, res) => {
    const {name,address,phonenumber,totalPrice,title}=req.body
    try {
        // Create and save the new cart entry
        
      //   const newCart = new cart({
      //     totalPrice,
      //     image,
      //     title,
      //     usersname
      //   });
      for (let i = 0; i < title.length; i++) {
          const newCart = new order({
           name,
           address,
           phonenumber,
            title: title[i],
            
          })
           await newCart.save();
          // console.log(newCart);
      }
        // Save to MongoDB
    
    
        // Send a success response back to the client
        res.json({ message: 'Data saved successfully', });
      } 
    
    
    catch (err) {
        console.error('Error adding item to cart:', err);
        res.status(500).json({ message: 'Failed to order item' });
    }
});


app.get('/getorders',(req,res)=>{
  order.find()
  .then(users=>{
    res.json(users)
    // console.log(users);
    
  })
  .catch(err=>
    res.json(err)
)
})





app.get('/getrelatedproducts',(req,res)=>{
  relats.find()
    .then(users=>{
       res.json(users)
        console.log(users);   
    })
    .catch(err=>
        res.json(err)
    )
})






app.listen(port,function(){
    console.log(`connected to ${port}`);
    
})