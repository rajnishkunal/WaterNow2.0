import React from 'react'
import './Store.css';
import StoreApp from './StoreApp';
// import Navbar from './Navbar';
import { AppData } from '../data';
const Store = ({onChangeTheme}) => {
  return (
    <div className='Store'>
      {/* <Navbar onChangeTheme={onChangeTheme}/> */}
      <div className='store-app-container'>
      {AppData.map(item=>(
        <StoreApp key={item.id} data={item}/>
      ))  
      }
      </div>
      
    </div>
  )
}

export default Store

