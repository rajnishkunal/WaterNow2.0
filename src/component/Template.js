import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase'; // Import Firebase app instance

import SignupForm from '../component/SignupForm';
import LoginForm from '../component/LoginForm';
import './Template.css';
import { useNavigate } from 'react-router-dom';

const Template = ({ title, dis1, dis2, image, formtype, setLoggedIn }) => {
    const Navigate = useNavigate();
    const handleGoogleSignIn = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // You can access the signed-in user's information here
                const user = result.user;
                console.log(user);
                setLoggedIn(true);
                Navigate('/'); // Update the login state
            })
            .catch((error) => {
                // Handle errors here
                console.error(error);
            });
    };

    return (
        <div className='template-container'>
            <div className='template-sub-container'>
                {/* Your form and other elements */}
                {
                    formtype === "signup" ? 
                    (<SignupForm setLoggedIn={setLoggedIn} />) : 
                    (<LoginForm setLoggedIn={setLoggedIn}/>)
                }
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div>
                    <button className="google-signup-button" onClick={handleGoogleSignIn}>
                        <p>Signup With Google</p>
                    </button>
                </div>
            </div>
            <div>
                <img src={image} alt='loginimage' className='login-image'></img>
            </div>
        </div>
    );
};

export default Template;
