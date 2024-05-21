import React from 'react';
import { NavLink } from 'react-router-dom';
import './StoreApp.css';

const StoreApp = ({ data }) => {
  return (
    <div className="StoreApp">
      <div className='nav-link'>
        <img src={data.img} alt='logo' className='img'></img>
        <h2 className='app-heading'>{data.name}</h2>
        <p className='app-detail'>{data.detail}</p>
        <p className='dis'>{data.dis}</p>
        <NavLink to={{
          pathname: '/orderform',
          state: { appData: data }  // Pass the data to OrderForm via location state
        }}>
          <button className='demo-button'>Go To Cart</button>
        </NavLink>
      </div>
    </div>
  );
}

export default StoreApp;
