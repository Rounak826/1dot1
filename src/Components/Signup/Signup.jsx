import React, { useState } from 'react'
import './Signup.css'
import illustration from '../../Assets/login.svg'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
    const navigate = useNavigate();
    const [acType,setAcType] = useState(null);
    const handelSubmit = (e)=>{
        console.log(acType);
        e.preventDefault() ;

        if(acType==='mentor'){
            navigate('/mentor-setup');
        }else{
            navigate('/mentee-setup');
        }

    }
  return (
    <div className="signup">
        <div className="head">
            <h1>Join <span>1dot1</span></h1>
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
                        <input type="password" name="password"  placeholder='Enter Strong password'/>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-col-100">
                        <label htmlFor="confirm_password">Confirm Password*</label>
                        <input type="password" name="confirm_password" i placeholder='Confirm Your password'/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-50">
                        <label htmlFor="account_type">Confirm Password*</label>
                        <select name="account-type" onChange={(e)=>{setAcType(e.target.value)}}>
                            <option value="mentor">Mentor</option>
                            <option value="mentee">Mentee</option>
                        </select>
                        
                    </div>
                    
                </div>
                <div className="form-row">
                <Link to='/login'>Already have an account?</Link>
                </div>
                <div className="form-row">
                    <button type="reset" className='btn-secondary'>Clear form</button>
                    <button onClick={handelSubmit} className='btn-primary'>Create Account</button>
                </div>
                </form>
               
            </div>
        </div>
    </div>
  )
}
