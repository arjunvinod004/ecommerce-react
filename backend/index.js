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
    try {
        const cartItems = req.body.cartItems;

        if (!Array.isArray(cartItems) || cartItems.length === 0) {
            return res.status(400).json({ message: 'No cart items provided' });
        }

        const savedItems = [];
        for (const item of cartItems) {
            const { title, price, totalPrice, category, image, description, id, size, usersname } = item;

            // Validate required fields
            if (!id || !title || !price || !category) {
                return res.status(400).json({ message: 'Missing required fields in some items' });
            }

            // Create and save the cart item
            const newCartItem = new cart({
                totalPrice,image,title,usersname
                // id,
                // title,
                // price,
                // totalPrice,
                // category,
                // image,
                // description,
                // size,
                // usersname
            });

            const savedItem = await newCartItem.save();
            savedItems.push(savedItem);
        }

        res.status(200).json({ message: 'Items added to cart successfully', items: savedItems });
    } catch (err) {
        console.error('Error adding items to cart:', err);
        res.status(500).json({ message: 'Failed to add items to cart' });
    }
});




app.post('/orders', async (req, res) => {
    try {
        const {name,address,phonenumber,totalprice} = req.body;

        // Create a new cart item
        const neworderItem = new order({
           name,
           address,
           phonenumber,
           totalprice
     
            
        });

        // Save the item to the database
        await neworderItem.save();

        res.status(200).json({ message: 'order generated successfully', item: neworderItem });
    } catch (err) {
        console.error('Error adding item to cart:', err);
        res.status(500).json({ message: 'Failed to order item' });
    }
});




app.get('/getcarts',(req,res)=>{
    const id= req.params.id
    cart.find()
    .then(users=>{res.json(users)
        
})


    .catch(err=>res.json(err))
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



app.delete('/getcartsdelete/:id',(req,res)=>{
    const id= req.params.id
    cart.findByIdAndDelete({_id:id})
    .then(users=>{res.json(users)
       console.log(users);
        
})
    .catch(err=>res.json(err))
})


app.listen(port,function(){
    console.log(`connected to ${port}`);
    
})