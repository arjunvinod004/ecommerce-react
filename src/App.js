
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Test from './Test'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Bag from './Bag';
import Product from './components/Product';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<Product/>}/>
       
     
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
