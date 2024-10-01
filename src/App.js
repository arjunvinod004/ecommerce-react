
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Test from './Test'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Bag from './Bag';
import Product from './components/Product';
import Cart from './Cart';
import Increments from './Increments';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './admin/Admin';
import Dashboard from './admin/Dashboard';
import Checkout from '../src/Checkout'
function App() {

  
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/increment' element={<Increments/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
     
      </Routes>
    </Router>
    // <div className="App">
    //   {/* <Test/> */}
    //  <Navbar/>
    //  <Home/>
    //  <Products/>
    // </div>
  );
}

export default App;
