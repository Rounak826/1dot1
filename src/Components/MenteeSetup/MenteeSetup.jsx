import React, { useRef, useState } from 'react'
import Hero from '../Hero/Hero'
import './MenteeSetup.css'
import illustration from '../../Assets/setup.svg'
import { AlertCircle } from 'react-feather'
import {useAuth} from '../../Context/AuthContext';
import Alert from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'
const initial = {
    user_id: null,
    first_name: null,
    last_name: null,
    mail:null,
    mobile_no: null,
    institute_name: null ,
    city: null,
    state: null,
    field_interest: null,
}
export default function MenteeSetup() {
    const[message,setMessage] = useState('');
    const navigate = useNavigate()
    const [data, setData] = useState(initial);
    const {currentUser,menteeProfile} = useAuth();
    const fname = useRef();
    const lname = useRef();
    const mail = useRef();
    const mobNo = useRef();
    const institute = useRef();
    const city = useRef();
    const state = useRef();
    const interest = useRef();

    function handelSubmit(e) {
        e.preventDefault();
        setData({
            user_id: currentUser.user._id,
            first_name: fname.current.value,
            last_name: lname.current.value,
            mail : mail.current.value, 
            mobile_no: mobNo.current.value,
            institute_name:institute.current.value ,
            city: city.current.value,
            state: state.current.value,
            field_intrest: interest.current.value,
         } )
         menteeProfile(data).then(e=>{
             setMessage({status:true, message:e.result ,error:e.error})
             if(!e.error){
                 navigate('/');
             }
         })
    }
    return (
        <div className="menteeSetup">
            <Hero src={illustration} heading={'Enter Your Details'} />
            <div className="form">
                <form action="">
                    {message.status&&<Alert color={message.color} message={message.message} error={message.error} />}
                    <div className="form-row">
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="fname">First Name</label>
                            <input placeholder='Jhon' type="text" name="fname" ref={fname}/>
                            <div className="tooltip"><AlertCircle /><p> Enter Your First name</p></div>
                        </div>
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="lname">Last Name</label>
                            <input placeholder='doe' type="text" name="lname" ref={lname} />
                            <div className="tooltip"><AlertCircle /><p> Enter Your Last name</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">Email</label>
                            <input placeholder='Jhondoe@gmail.com' type="email" name="email" ref={mail}/>
                            <div className="tooltip"><AlertCircle /><p> Enter Your Email Address</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">Mobile No.</label>
                            <input placeholder='+91 6666666666' type="text" name="number" ref={mobNo} />
                            <div className="tooltip"><AlertCircle /><p> Enter Your Mobile Number including country code</p></div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">School / University Name</label>
                            <input placeholder='eg. St.Thomas College' type="text" name="organization" ref={institute}/>
                            <div className="tooltip"><AlertCircle /><p>College University or School Name</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="fname">City</label>
                            <input placeholder='eg. Bhopal' type="text" name="city" ref={city}/>
                            <div className="tooltip"><AlertCircle /><p>City</p></div>
                        </div>
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="state">State</label>
                            <input placeholder='eg. Madhya Pradesh' type="text" name="state" ref={state} />
                            <div className="tooltip"><AlertCircle /><p>State</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="Intrest">Field of Intrest</label>
                            <input placeholder='eg. IT, Banking, App Development' type="text" name="Intrest"ref={interest} />
                            <div className="tooltip"><AlertCircle /><p>Enter The fields you are intrested in.</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <button onClick={handelSubmit} className='btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
