import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../component/LoginForm.css'
 function LoginForm({setLoggedIn}) {

    const Navigate=useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [showPassword, setshowPassword] = useState(false)
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In");
        Navigate('./dashboard')
    }
    return (
        <div className='LoginForm-Container'>
        <h1>Welcome</h1>
            <form onSubmit={submitHandler}>

                <label htmlFor='email'>
                    <p>
                        Email Address <sub>*</sub>
                    </p>
                    <input
                        id='email'
                        name='email'
                        placeholder='Enter Your Email'
                        required
                        type='text'
                        value={formData.email}
                        onChange={changeHandler}>
                    </input>
                </label>

                <label htmlFor='password'>
                    <p>
                        Password <sub>*</sub>
                    </p>
                    <input
                        id='password'
                        name='password'
                        placeholder='Enter Your Password'
                        required
                        type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        onChange={changeHandler}>
                    </input>
                    <span className="password-toggle" onClick={() => setshowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye />):(<AiOutlineEyeInvisible />)}
                    </span>
                    <Link to="#">
                        <p>
                            Forgot Password
                        </p>
                    </Link>
                </label>
                <button>
                    <p>
                        Sign In
                    </p>
                </button>

            </form>
        </div>
    )
}
export default LoginForm;