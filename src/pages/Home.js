import React from 'react'
import HeroPhoto from '../assets/WaterNowHero.png'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='Home-Container'>
     <div className='Section1'>
      <div className='Hero-Container-Left'>
        <img src={HeroPhoto}  alt='hero'></img>
      </div>
      <div className='Hero-Container-Right'>
        <h1>Efficient Water Transport Solution</h1>
        <p>Experience fast and dependable water delivery services tailored to your needs. Our efficient solutions ensure that clean, refreshing water is always within reach, wherever you are</p>
        <Link to='/store'><button>OrderNow</button></Link>
    
      </div>
     </div>
    </div>
  )
}

export default Home

