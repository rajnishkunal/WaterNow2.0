import React from 'react'
import Template from '../component/Template'
import loginImg from '../assets/Login.jpg'
import './Login.css'
const Login = ({setLoggedIn}) => {
  return (
    <div className='login-page-container'>
      <Template
        title="Wellcome Back"
        dis1="Quench your thirst effortlessly."
        dis2="Let us bring hydration to your doorstep."
        image={loginImg}
        formtype="login"
        setLoggedIn={setLoggedIn}
      ></Template>
    </div>
  )
}

export default Login
