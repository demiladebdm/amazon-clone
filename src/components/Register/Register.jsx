import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

// Import Authentication
import { UserAuth } from '../Context/AuthContext';

// Import fixed components

//Import styles and Icons
import './Register.css'

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError]= useState('');

  const { createUser } = UserAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.error(e.message)
    }
  }

  return (  
    <div className='register'>
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className='register__logo' />
        </Link>

        <div className="register__container">
          <h1>Register</h1>
          <form onSubmit={handleSignup}>
            <h5>E-mail</h5>
            <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
            <button className='register__registerButton'>Register</button>
          </form>

          <p>
            By Registering you agree to my Conditions of Service Agreement. For
            more info see our privacy Notice, our cookies Notice and gather data.
          </p>
          <Link to='/login'>
            <button className='login__loginButton'>Back to Login</button>
          </Link>

        </div>
    </div>
)
}

export default Register