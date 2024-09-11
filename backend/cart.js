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

const userschema= new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: String, required: true },
    size:{type:String}
    
    



})

const cart = mongoose.model("carts",userschema);
module.exports=cart