import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='registerContainer'>
        <div className='registerWrapper'>
            <h1 className="registerTitle">CREATE AN ACCOUNT</h1>
            <form className='registerForm'>
                <input className='registerInputs' type="text" placeholder='firstName' />
                <input className='registerInputs' type="text" placeholder='lastName'  />
                <input className='registerInputs' type="text" placeholder='UserName'  />
                <input className='registerInputs' type="email" placeholder='Email...'  />
                <input className='registerInputs' type="password" placeholder='Password'  />
                <input className='registerInputs' type="password" placeholder='Confirm Password'  />
                <span className='registerAgreement'> By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></span>
                <button className='registerBtn'>CREATE</button>
            </form>

        </div>
    </div>
  )
}

export default Register