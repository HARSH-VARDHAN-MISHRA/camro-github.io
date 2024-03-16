
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Product from './components/slideProduct/Product';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Shop from './pages/shop/Shop';
import Category from './pages/category/Category';
import Login from './pages/login/Login';
import { useState } from 'react';

import {Toaster} from 'react-hot-toast'
import SignIn from './pages/signin/SignIn';
import UserProfile from './pages/userProfile/UserProfile';
import OrderConfirm from './pages/orderConfirm/OrderConfirm';
function App() {
  const [login,setLogin] = useState(true   )
  return (

    <BrowserRouter>
    {login ? (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Products/:name/:id' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/order-confirmed' element={<OrderConfirm />} />


        <Route path='/your-profile' element={<UserProfile />} />
      </Routes>
      <Footer />
     
    </>
  ) : (
    <>
     <Routes>
     <Route path='/log-in' element={<Login />} />

     <Route path='/sign-in' element={<SignIn />} />
     </Routes>

      <Toaster/>
    </>
   
    
  )}

    </BrowserRouter>
  );
}

export default App;
