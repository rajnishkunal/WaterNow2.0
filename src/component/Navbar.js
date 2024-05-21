import React from 'react';
import logo from '../assets/waterlogo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css';
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setLoggedIn=props.setLoggedIn;
    const notify = () => {toast.success('Logged out');
    setLoggedIn(false)}
  return (
    <div className='nav-container'>
      <nav>
        <ul className='nav-items'>
            <li>
                <Link to='/' className='link'>Home</Link>
            </li>
            <li>
                <Link to='/contact' className='link'>Contact Us</Link>
            </li>
            <li>
                <Link to='/orders' className='link'>Orders</Link>
            </li>     
                
        </ul>
      </nav>
      <div className='Logo-Container'>
      <Link to="/">
        <img src={logo} alt='logo' className='nav-logo'></img>
      </Link>
      <h1>Water Now</h1>
      </div>
      <div className='flex-button'>
        {   !isLoggedIn &&
            <Link to='/login'><button className='button'>Login</button></Link>
        }
        {   !isLoggedIn &&
            <Link to='/signup'><button className='button'>Sign Up</button></Link>
        }
        {   isLoggedIn &&
            <Link to='/'><button onClick={notify} className='button'>Log Out</button></Link>
        }
        {   isLoggedIn &&
            <Link to='/dashboard'><button className='button'>Dashboard</button></Link>
        }
      </div>
    </div>
  )
}

export default Navbar
