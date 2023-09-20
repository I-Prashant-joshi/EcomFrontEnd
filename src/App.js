
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/Product';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Navbar from "../src/Component/Navbar";

import Login from './pages/Login';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Protected from './Component/Protected';


function App() {
  return (
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route  path='/' element={<Protected Component={Home}  />} />
        <Route  path='/ProductList' element={<Protected Component={ProductList}  />} />
        <Route  path='/SingleProduct' element={<Protected Component={SingleProduct}  />} />
        <Route  path='/Cart' element={<Protected Component={Cart}  />} />
        <Route  path='/Login' element={<Protected Component={Login}  />} />
        <Route  path='/Register' element={<Register />} />
      </Routes>
      </BrowserRouter>


    // <Home />
  //  <ProductList />
  // <SingleProduct />
  // <Register />
  // <Cart />
  // <Login />


  );
}

export default App;
