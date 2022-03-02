import React from 'react'
import Hero from '../Hero/Hero'
import './Contactus.css'
import illustration from '../../Assets/Questions.png'
import insta from '../../Assets/SVG/instagram.svg';
import facebook from '../../Assets/SVG/facebook.svg';
import twitter from '../../Assets/SVG/twitter.svg';
import youtube from '../../Assets/SVG/youtube.svg';
import linkedin from '../../Assets/SVG/linkedin.svg';
import telegram from '../../Assets/SVG/telegram.svg';
import { Mail, PhoneCall } from 'react-feather'
export default function Contactus() {
    return (
        <div className="contact">
            <Hero heading={'Contact Us'} src={illustration} />
            <div className="head">
                <h1>CONNECT <span>WITH US !</span> </h1>
                <hr />
            </div>
            <div className="flex row">
                <div className="info">
                    <h4>We Would Love to Hear from You</h4>
                    <p>Please write or call us with your questions, collaboration queries, etc.</p>
                    <div className='details'>
                        <h5>Contact</h5>
                        <div>
                        <a href="tel:+917394021111"><PhoneCall />+917394021111</a>
                        <a href="mailto:mail@1dot1.in"><Mail />mail@1dot1.in</a>
                        </div>
                        
                    </div>
                    <div className="social">
                        <h5>Keep In Touch</h5>
                        <div className="row">
                            <a href="/"><img src={insta} alt="" /></a>
                            <a href="/"><img src={twitter} alt="" /></a>
                            <a href="/"><img src={facebook} alt="" /></a>
                            <a href="/"><img src={youtube} alt="" /></a>
                            <a href="/"><img src={linkedin} alt="" /></a>
                            <a href="/"><img src={telegram} alt="" /></a>
                        </div>
                    </div>

                </div>
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
                                    <label htmlFor="messageType">Message Type</label>
                                    <select name="messageType" id="">
                                        <option value="Query">-Message Type-</option>
                                        <option value="Query">Query</option>
                                        <option value="Suggestion">Suggestion</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Collabaration">Collabaration</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="Subject">Subject</label>
                                    <input type="text" name="Subject" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col-100">
                                    <label htmlFor="Subject">Message</label>
                                    <textarea name="" id="" rows="5"></textarea>
                                </div>
                            </div>
        
                            <button className='btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
