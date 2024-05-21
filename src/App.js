import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Order from './pages/Order';
import Contact from './pages/Contact';
import { useState } from 'react';
import OrderForm from './pages/OrderForm';
import Store from './component/Store';
import AdminCart from './pages/AdminCart';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/orders" element={<Order/>}/>
          <Route path='/orderform' element={<OrderForm/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}/>
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/admincart' element={<AdminCart/>}/>
        </Routes>
    </div>
  );
}

export default App;
