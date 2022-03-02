import React, { useRef, useState } from 'react'
import illustration from '../../Assets/login.svg'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import FormError from '../FormError/FormError'
import { useAuth } from '../../Context/AuthContext'
export default function Login() {
  const {authenticateUser} = useAuth()
  const navigate = useNavigate();
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);
  const [mailValidation, setMailValidation] = useState({ border: "solid 1px #c1c1c1" })
  const [passValidation, setPassValidation] = useState({ border: "solid 1px #c1c1c1" });
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError({ status: false, message: "" })
    if (Validation()) {
      setError("");
      setLoading(true);
      authenticateUser(emailRef.current.value,passwordRef.current.value).then(e=>{
        setError({status:e.error,message:e.message});
        if(!e.error){
          navigate('/')
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }



  }

  function Validation() {

    let flag = true;
    if (!validateEmail(emailRef.current.value)) {
      setError({ status: true, message: "Email Is Not Valid" })
      flag = false;
    } else if (!checkPassword(passwordRef.current.value, passwordRef.current.value)) {
      flag = false;
    } else {
      flag = true;
      setError({ status: false, message: "" })
    }
    return flag;

  }
  function validateEmail(email) {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setMailValidation({ border: "solid 1px #c1c1c1" })
      return (true)
    } else {
      setMailValidation({ border: "solid 2px red" })
      return (false)
    }

  }
  function checkPassword(str) {

    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    let flag = false;
    if (str.length>0) {
      setPassValidation({ border: "solid 1px #c1c1c1" })
      flag =true;

    }else {
      setPassValidation({ border: "solid 2px red" })
      setError({ status: true, message: "Please Enter Your Password" });
      flag = false;
    }

    return flag;
  }
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
            {error.status && <FormError message={error.message} />}
            <div className="form-row">
              <div className="form-col-100">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" ref={emailRef} style={mailValidation} placeholder='Jhondoe@gmail.com' />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col-100">
                <label htmlFor="password">Password*</label>
                <input type="password" name="password" ref={passwordRef} style={passValidation} placeholder='Enter your password' />
              </div>
            </div>

            <div className="form-row">
              <Link to='/signup'>Create an account?</Link>
            </div>
            <div className="form-row">
              <button onClick={handleSubmit} className='btn-primary'>{loading ? 'Validating Credentials...' : "Login To Your Account"}</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

