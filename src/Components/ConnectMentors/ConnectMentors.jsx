import React from 'react'
import './ConnectMentors.css'
import Hero from '../Hero/Hero'
import join from '../../Assets/SVG/join.svg'
import discussion from '../../Assets/SVG/discussion.svg'
import edit from '../../Assets/connectMentors/edit.png'
import bank from '../../Assets/connectMentors/bank.png'
import calendar from '../../Assets/connectMentors/calendar.png'
import clock from '../../Assets/connectMentors/clock.png'
import notebook from '../../Assets/connectMentors/notebook.png'
import telephone from '../../Assets/connectMentors/telephone.png'
import online from '../../Assets/connectMentors/online-support.png'
export default function ConnectMentors() {
    return (
        <div className="connectMentors">
            <Hero heading={'Connect With Mentors'} src={join} />
            <Info/>
            <Tricks/>
            <div className="form">
            <form action="">
                        <div className="form-row">
                            <div className="form-col-50">
                                <label htmlFor="FirstName">First Name</label>
                                <input placeholder='Jhon' type="text" name="FirstName" />
                            </div>

                            <div className="form-col-50">
                                <label htmlFor="lastName">Last Name</label>
                                <input placeholder='Doe' type="text" name="lastName" />
                            </div>
                        </div>    
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="Email">Email</label>
                                    <input placeholder='Jhondoe@gmail.com' type="text" name="Email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="Phone">Phone</label>
                                    <input placeholder='+91 666666666' type="text" name="Phone" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="occupation">Current Occupation</label>
                                    <input type="text" name="occupation" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="fee">Mentorship Fee (in INR)</label>
                                    <input type="text" name="fee" />
                                </div>
                             </div>
                             <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="coupan">Coupon Code</label>
                                    <input type="text" name="coupan" />
                                </div>
                            </div>  
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="intrest">Fields of Interest</label>
                                    <input type="text" name="intrest" />
                                </div>
                            </div>  
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="Subject">Query</label>
                                    <textarea name="" id="" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className='check'>
                                <input type="checkbox" name="terms" id="agreeCheck" /> 
                                <p>I have read and agree to the Terms of Service and Privacy Policy</p>
                                </div>
                                
                            </div>
                            <button className='btn-primary'>Proceed To Payment</button>
            </form>
            </div>
        </div>
    )
}
function Info(){
    return(
        <div className="info">
                <div className="head">
                    <p>Know More</p>
                    <h5>About The Process</h5>
                    <hr />
                </div>
                <div className="row">
                    <div className="image">
                        <img src={discussion} alt="" />
                    </div>
                    <div className="tabel">
                        <div className="Trow">
                            <div className="img">
                                <img src={calendar} alt="" />
                            </div>
                            <div className="text">
                                <h5>Call  <span>scheduling</span> for 30 mins. (max) </h5>
                                <p>Confirmation within 3 days after form submission. 1dot1 will try to fix the call within a week.</p>
                            </div>
                        </div>
                        <div className="Trow">
                            <div className="img">
                                <img src={clock} alt="" />
                            </div>
                            <div className="text">
                                <h5>We're <span>trying</span>  our best</h5>
                                <p>Sometimes there can be slight delay in connecting with mentors due to unavoidable situations.</p>
                            </div>
                        </div>
                        <div className="Trow">
                            <div className="img">
                                <img src={bank} alt="" />
                            </div>
                            <div className="text">
                                <h5>Mentorship  <span>fee</span> </h5>
                                <p>As per preferred mentor. For general query – ₹100 (1dot1 will connect you with a mentor, based on your query).</p>
                            </div>
                        </div>
                        <div className="Trow">
                            <div className="img">
                                <img src={edit} alt="" />
                            </div>
                            <div className="text">
                                <h5>Cancellation  <span>or </span> Changes</h5>
                                <p>Accepted before call gets scheduled.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}
function Tricks(){
    return(
        <div className="tricks clip-path3">
        <div className="head">
            <h4>1dot1 Tricks</h4>
            <p>For A Good Call</p>
            <hr />
            <div className="row">
                <div className="item">
                    <div className="image">
                        <img src={telephone} alt="" />
                    </div>
                    <h5>Record or make note of call</h5>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={notebook} alt="" />
                    </div>
                    <h5>Prepare fully what you want to ask</h5>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={online} alt="" />
                    </div>
                    <h5>Stay in touch with mentor over social media</h5>
                </div>

            </div>
        </div>

    </div>
    )
}