const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8000; // Make sure this matches the port in your React fetch request

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Log MongoDB connection status
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

const Product = mongoose.model('Products', productSchema);

// Helper function to check if ID is a valid MongoDB ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Routes
app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if the ID is a valid ObjectId
    if (!isValidObjectId(id)) {
      return res.status(400).send('Invalid product ID format');
    }
    
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).send('Product not found');
    }
    
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
