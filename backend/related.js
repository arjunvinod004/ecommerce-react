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

const relatedschema= new mongoose.Schema({
  
    id:Number,
    title: String,
    category:String,
    image:String,
    quanity:Number,
    sleeve:String,
    Fabric:String,
    Specification:String,
    size:String,
    code:String,
    description:String,
    price:Number,
    rating:String

 
    
    



})

const relats = mongoose.model("relatedproducts",relatedschema);
module.exports=relats