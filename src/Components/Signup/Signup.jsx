import React, { useRef, useState } from 'react'
import './Signup.css'
import illustration from '../../Assets/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import FormError from '../FormError/FormError';
import { useAuth } from '../../Context/AuthContext';
export default function Signup() {
    const navigate = useNavigate();
    const {createUser} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmpassRef = useRef();
    const [error, setError] = useState({ status: false, message: "" });
    const [loading, setLoading] = useState(false);
    const [mailValidation, setMailValidation] = useState({ border:"solid 1px #c1c1c1" })
    const  [passValidation, setPassValidation] = useState({ border:"solid 1px #c1c1c1" });
    const  [cPassValidation, setCPassValidation] = useState({ border:"solid 1px #c1c1c1" });
    const  [acTypeValidation, setAcTypeValidation] = useState({ border:"solid 1px #c1c1c1" });         
    const accountRef =useRef();
    function handelSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError({ status: false, message: "" })
        if (Validation()) {
            setError("");
            setLoading(true);
            createUser(emailRef.current.value,passwordRef.current.value,accountRef.current.value).then(e=>{
              setError({status:e.error,message:e.message});
              console.log(e);
              if(!e.error){
                setLoading(false);
                navigate(`/${e.user.role}-setup`);
              }
                
              setLoading(false);
            });
        }
        
        
          
      }

      function Validation() {

        let flag= true;
        if(!validateEmail(emailRef.current.value)){
          setError({ status: true, message: "Email Is Not Valid" })
          flag=false;
        }else if(!checkPassword(passwordRef.current.value, confirmpassRef.current.value)){
          flag=false;
        }else if(accountRef.current.value.length===0){
            flag =  false;
            setAcTypeValidation({ border:"solid 1px red" })
            setError({ status: true, message: "Select Your Account Type" })
        }
        else{
          flag=true;
          setError({ status: false, message: "" })
        }
        return flag;
    
      }
      function validateEmail(mail) {
        if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
          setMailValidation({ border:"solid 1px #c1c1c1" })
          return (true)
        } else {
          setMailValidation({ border:"solid 2px red" })
          return (false)
        }
    
      }
      function checkPassword(str, checkstr) {
        
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (re.test(str)) {
          setPassValidation({ border:"solid 1px #c1c1c1" })
          if(str===checkstr){
            setCPassValidation({ border:"solid 1px #c1c1c1" })
          }else{
            setCPassValidation({ border:"solid 2px red" }) 
            setError({status:true,message:"Password don't match"});
          }
    
        } else {
          setPassValidation({ border:"solid 2px red" })
          setError({status:true,message:"Password to weak Use Strong password"});
        }
    
        return re.test(str) && str===checkstr;
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
                {error.status&&<FormError message={error.message}/>}    
                <div className="form-row">
                    <div className="form-col-50">
                        <label htmlFor="account_type">Join As*</label>
                        <select ref={accountRef} style={acTypeValidation} name="account-type">
                            <option value={''}>-Select-</option>
                            <option value="mentor">Mentor</option>
                            <option value="mentee">Mentee</option>
                        </select>
                        
                    </div>
                    
                </div>    
                <div className="form-row">
                    <div className="form-col-100">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" ref={emailRef} style={mailValidation} placeholder='Jhondoe@gmail.com'/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100">
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" ref={passwordRef} style={passValidation} placeholder='Enter Strong password'/>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-col-100">
                        <label htmlFor="confirm_password">Confirm Password*</label>
                        <input type="password" name="confirm_password" ref={confirmpassRef} style={cPassValidation} placeholder='Confirm Your password'/>
                    </div>
                </div>
                
                <div className="form-row">
                <Link to='/login'>Already have an account?</Link>
                </div>
                <div className="form-row">
                    <button type="reset" className='btn-secondary'>Clear form</button>
                    <button onClick={handelSubmit} className='btn-primary'>{loading?'Creating...':'Create Account'}</button>
                </div>
                </form>
               
            </div>
        </div>
    </div>
  )
}
