import React from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../component/SignupForm.css'
const SignupForm = ({ setLoggedIn }) => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({ FName: "", LName: "", email: "", password: "", confirmPassword: "" })
    const [showPassword, setshowPassword] = useState("false")
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event) {
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Account Created");
        Navigate('./dashboard')
    }
    return (
        <div className="signup-form-container">
            {/* <div>
                <button>Student</button>
                <button>Teacher</button>
            </div> */}
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor='FName'>
                        <p>
                            First Name <sub>*</sub>
                        </p>
                        <input
                            id='FName'
                            name='FName'
                            placeholder='Enter Your Name'
                            required
                            type='text'
                            value={formData.FName}
                            onChange={changeHandler}>
                        </input>
                    </label>
                    <label htmlFor='LName'>
                        <p>
                            First Name <sub>*</sub>
                        </p>
                        <input
                            id='LName'
                            name='LName'
                            placeholder='Enter Your Last Name'
                            required
                            type='text'
                            value={formData.LName}
                            onChange={changeHandler}>
                        </input>
                    </label>
                </div>
                <div>
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
                </div>
                <div>
                    <label htmlFor='password'>
                        <p>
                            Password <sub>*</sub>
                        </p>
                        <div className="password-input-container">
                            <input
                                id='password'
                                name='password'
                                placeholder='Enter Your Password'
                                required
                                type={showPassword ? ("text") : ("password")}
                                value={formData.password}
                                onChange={changeHandler}
                            />
                            <span className="password-toggle" onClick={() => setshowPassword((prev) => !prev)}>
                                {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                            </span>
                        </div>
                    </label>

                    <label htmlFor='confirmPassword'>
                        <p>
                            Confirm Password <sub>*</sub>
                        </p>
                        <div className="password-input-container">
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            placeholder='Enter Your Password'
                            required
                            type={showPassword ? ("text") : ("password")}
                            value={formData.confirmPassword}
                            onChange={changeHandler}>
                        </input>

                        <span className="password-toggle" onClick={() => setshowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                        </span>
                        </div>
                    </label>
                </div>
                <button>Create Account</button>
            </form>

        </div>
    )
}

export default SignupForm
