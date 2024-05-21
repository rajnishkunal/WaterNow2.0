import React from 'react'
import './Signup.css'
import Template from '../component/Template'
import signupImage from '../assets/Signup.jpg'
const Signup = ({setLoggedIn}) => {
  return (
    <div className='signup-page-container'>
        <Template
        title="Join Us Today!"
        // dis1="Coding is a path of challenges and triumphs."
        // dis2="Embrace errors, celebrate successes, and remember: every coder was once a beginner."
        image={signupImage}
        formtype="signup"
        setLoggedIn={setLoggedIn}
      ></Template>
    </div>
  )
}

export default Signup
