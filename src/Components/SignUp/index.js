import React, { useState } from 'react';
import './style.css';

const SignUp=()=>{

    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState('');

    return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}} >
        <div className="signup">
            <h1 style={{textAlign: 'center',fontSize:'35px',color:'white'}}>Sign Up</h1>
            <form onSubmit>
                <div className="form_label">
                    <label>Email</label>
                    <input type='email' placeholder="Email"></input>
                </div>
                <div className="form_label">
                    <label>Password</label>
                    <input type='password' placeholder="Password"></input>
                </div>
                <div className="form_label">
                    <label>Confirm Password</label>
                    <input type='password' placeholder="Confirm Password"></input>
                </div>
                <button className="signup_btn">SignUp</button>
            </form>
        </div >
    </div>
    );
}
export default SignUp; 