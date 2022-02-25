import React from 'react'
import illustration from '../../Assets/login.svg'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className="login">
    <div className="head">
        <h1>Login to <span>1dot1</span></h1>
        <hr />
    </div>
    <div className="row">
        <div className="illustration">
            <img src={illustration} alt="Login illustration" />
        </div>
        <div className="form">
            <form action="">
            <div className="form-row">
                <div className="form-col-100">
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email"  placeholder='Jhondoe@gmail.com'/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-col-100">
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password"  placeholder='Enter your password'/>
                </div>
            </div>
            
            <div className="form-row">
            <Link to='/signup'>Create an account?</Link>
            </div>
            <div className="form-row">
                <button className='btn-primary'>Login To Your Account</button>
            </div>
            </form>
           
        </div>
    </div>
</div>
  )
}
