import React from 'react'
import Hero from '../Hero/Hero'
import './MenteeSetup.css'
import illustration from '../../Assets/setup.svg'
import { AlertCircle } from 'react-feather'
export default function MenteeSetup() {
    return (
        <div className="menteeSetup">
            <Hero src={illustration} heading={'Enter Your Details'} />
            <div className="form">
                <form action="">
                    <div className="form-row">
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="fname">First Name</label>
                            <input placeholder='Jhon' type="text" name="fname" />
                            <div className="tooltip"><AlertCircle /><p> Enter Your First name</p></div>
                        </div>
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="lname">Last Name</label>
                            <input placeholder='doe' type="text" name="lname" />
                            <div className="tooltip"><AlertCircle /><p> Enter Your Last name</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">Email</label>
                            <input placeholder='Jhondoe@gmail.com' type="email" name="email" />
                            <div className="tooltip"><AlertCircle /><p> Enter Your Email Address</p></div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">Mobile No.</label>
                            <input placeholder='+91 6666666666' type="text" name="number" />
                            <div className="tooltip"><AlertCircle /><p> Enter Your Mobile Number including country code</p></div>
                        </div>
                        
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">School / University Name</label>
                            <input placeholder='eg. St.Thomas College' type="text" name="organization" />
                            <div className="tooltip"><AlertCircle /><p>College University or School Name</p></div>
                        </div>  
                    </div>
                    <div className="form-row">
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="fname">City</label>
                            <input placeholder='eg. Bhopal' type="text" name="city" />
                            <div className="tooltip"><AlertCircle /><p>City</p></div>
                        </div>  
                        <div className="form-col-50 has-tooltip">
                            <label htmlFor="fname">State</label>
                            <input placeholder='eg. Madhya Pradesh' type="text" name="city" />
                            <div className="tooltip"><AlertCircle /><p>State</p></div>
                        </div>  
                    </div>
                    <div className="form-row">
                        <div className="form-col-100 has-tooltip">
                            <label htmlFor="fname">Field of Intrest</label>
                            <input placeholder='eg. IT, Banking, App Development' type="text" name="organization" />
                            <div className="tooltip"><AlertCircle /><p>Enter The fields you are intrested in.</p></div>
                        </div>  
                    </div>
                    <div className="form-row">
                        <button className='btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
