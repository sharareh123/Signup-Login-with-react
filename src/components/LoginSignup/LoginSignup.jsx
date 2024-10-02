import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assest/person.png'
import email_icon from '../Assest/email.png'
import password_icon from '../Assest/password.png'

const LoginSignup = () => {
  const [action,setAction]=useState("Sign up"); 
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
        <img src={user_icon} alt=''/>
        <input type='text' placeholder='Name'/>
      </div>}
      <div className='input'>
        <img src={email_icon} alt=''/>
        <input type='email' placeholder='Email Id'/>
      </div>
      <div className='input'>
        <img src={password_icon} alt=''/>
        <input type='password' placeholder='Password'/>
      </div>
      {action==="Sign up"? <div></div>:<div className="forget-password">Lost Password? <span>Click here</span></div>}
      <div className='submit-container'>
          <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
          <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      </div>

    </div>
  )
}
export default LoginSignup