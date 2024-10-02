const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://arjunvt67:arjun67vt@cluster0.9e71qs9.mongodb.net/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(
    ()=>{
        console.log(' mongodb connected');
        
    }
)
.catch((err)=>console.error('not connected')
)

const orderschema= new mongoose.Schema({
  
    name:String,
    address:String,
    phonenumber:Number,
    totalPrice:Number,
    title:String

   

 
    
    



})

const order = mongoose.model("orderproducts",orderschema);
module.exports=order