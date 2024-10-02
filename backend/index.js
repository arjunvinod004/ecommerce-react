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
const bodyParser = require('body-parser');
app.use(bodyParser.json())
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



// app.post('/getcart', async (req, res) => {
//     console.log('Request Body:', req.body); // Log the incoming request body
//     try {
//         const { title, price, category, image, description, id, size, usersname } = req.body;

//         // Validate input
//         if (!title || !price || !category || !image || !description || !id || !size || !usersname) {
//             return res.status(400).json({ message: 'All fields are required.' });
//         }

//         // Create a new cart item
//         const newCartItem = new cart({
//             id,
//             title,
//             price,
//             // totalPrice, // Uncomment this line if you're using totalPrice
//             category,
//             image,
//             description,
//             size,
//             usersname
//         });

//         // Save the item to the database
//         await newCartItem.save();

//         res.status(200).json({ message: 'Item added to cart successfully', item: newCartItem });
//     } catch (err) {
//         console.error('Error adding item to cart:', err);
//         res.status(500).json({ message: 'Failed to add item to cart' });
//     }
// });

// app.post('/getcart', async (req, res) => {
//     try {
//         // Extract the array of cart items from the request body
//         const cartItems = req.body.cartItems;

//         if (!Array.isArray(cartItems) || cartItems.length === 0) {
//             return res.status(400).json({ message: 'No cart items provided' });
//         }

//         // Iterate through each item in the cart and save it
//         const savedItems = [];
//         for (const item of cartItems) {
//             const { title, price, totalPrice, category, image, description, id, size, usersname } = item;

//             // Validate required fields
//             if (!id || !title || !price || !category) {
//                 return res.status(400).json({ message: 'Missing required fields in some items' });
//             }

//             // Create a new cart item
//             const newCartItem = new cart({
//                 id,
//                 title,
//                 price,
//                 totalPrice,
//                 category,
//                 image,
//                 description,
//                 size,
//                 usersname
//             });

//             // Save the item to the database
//             const savedItem = await newCartItem.save();
//             savedItems.push(savedItem);
//         }

//         // Respond with a success message and the saved items
//         res.status(200).json({ message: 'Items added to cart successfully', items: savedItems });
//     } catch (err) {
//         console.error('Error adding items to cart:', err);
//         res.status(500).json({ message: 'Failed to add items to cart' });
//     }
// });


// app.post('/getcart', async (req, res) => {
//     try {
//         const { title, price, totalPrice, category, image, description, id,size,usersname} = req.body;

//         // Create a new cart item
//         const newCartItem = new cart({
//             id,
//             title,
//             price,
//             totalPrice,
//             category,
//             image,
//             description,
//             id,
//             size,
//             usersname           
     
            
//         });

//         // Save the item to the database
//         await newCartItem.save();

//         res.status(200).json({ message: 'Item added to cart successfully', item: newCartItem });
//     } catch (err) {
//         console.error('Error adding item to cart:', err);
//         res.status(500).json({ message: 'Failed to add item to cart' });
//     }
// });

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
        console.log(newCart);
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
  
  

// app.post('/getcart', (req, res) => {
//     const { totalPrice, image, title, usersname } = req.body;
  
//     // Log the received values to identify them
//     console.log('Total Price:', totalPrice);
//     console.log('Image:', image);
//     console.log('Title:', title);
//     console.log('Username:', usersname);
  
//     // You can now work with the data, for example, saving it to a database, etc.
//     // Send a response back to the client
//     res.json({ message: 'Data received successfully', data: req.body });
//   });

// app.post('/getcart', async (req, res) => {
//     try {
//         const cartItems = req.body.cartItems;

//         if (!Array.isArray(cartItems) || cartItems.length === 0) {
//             return res.status(400).json({ message: 'No cart items provided' });
//         }

//         const savedItems = [];
//         for (const item of cartItems) {
//             const { title, price, totalPrice, category, image, description, id, size, usersname } = item;

//             // Validate required fields
//             if (!id || !title || !price || !category) {
//                 return res.status(400).json({ message: 'Missing required fields in some items' });
//             }

//             // Create and save the cart item
//             const newCartItem = new cart({
//                 totalPrice,image,title,usersname
//                 // id,
//                 // title,
//                 // price,
//                 // totalPrice,
//                 // category,
//                 // image,
//                 // description,
//                 // size,
//                 // usersname
//             });

//             const savedItem = await newCartItem.save();
//             savedItems.push(savedItem);
//         }

//         res.status(200).json({ message: 'Items added to cart successfully', items: savedItems });
//     } catch (err) {
//         console.error('Error adding items to cart:', err);
//         res.status(500).json({ message: 'Failed to add items to cart' });
//     }
// });




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
          console.log(newCart);
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