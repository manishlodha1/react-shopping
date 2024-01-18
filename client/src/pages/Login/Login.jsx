import React, { useState } from 'react'
import "./login.css"
import { login } from '../../redux/apiCalls';
import {useDispatch, useSelector} from 'react-redux';


const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=>state.user);

  const handleClick = (e) =>{
    e.preventDefault();
    login(dispatch,{username,password})  
  }

  return (
    <div className='loginContainer'>
    <div className='loginWrapper'>
        <h1 className="loginTitle">SIGN IN</h1>
        <form className='loginForm'>
           
            <input className='loginInputs' type="text" placeholder='UserName' onChange={(e) => setUsername(e.target.value)}  />
            <input className='loginInputs' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}  />
            <button className='loginBtn' onClick={handleClick} disabled={isFetching} >LOGIN</button>
            {error && <span className='error'>Something went wrong...</span> }
           <a className='fALink' href="">FORGOT PASSWORD</a>
           <a className='fALink' href="">CREATE AN ACCOUNT</a>

        </form>

    </div>
</div>
  )
}

export default Login