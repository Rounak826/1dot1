import React from 'react'
import './Footer.css';
import logo from '../../Assets/Logo-1.png'
import { Mail, PhoneCall } from 'react-feather';
import { Link } from 'react-router-dom';
import insta from '../../Assets/SVG/instagram.svg';
import facebook from '../../Assets/SVG/facebook.svg';
import twitter from '../../Assets/SVG/twitter.svg';
import youtube from '../../Assets/SVG/youtube.svg';
import linkedin from '../../Assets/SVG/linkedin.svg';
import telegram from '../../Assets/SVG/telegram.svg';

export default function Footer() {
  return (
    <footer>
        <div className="row">
          <div className=" col ml-10">
              <div className="logo">
                <img src={logo} alt="" />
                </div>
                <a href="tel:+917394021111"><PhoneCall/>+91 7394021111</a>
                <a href="mailto:mail@1dot1.in"><Mail/>mail@1dot1.in</a>
          </div>
          <div className="col">
              <div className="head">
                <h3>Quick</h3>
              </div>
              <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/career-library">Career Library</Link>
              <Link to="/mentor-squad">Mentors Squad</Link>
              <Link to="/mentor-setup">Join as Mentor</Link>
              <Link to="/contact-us">Contact Us</Link>
          </div>
          <div className="col mr-10 end">
          <div className="head">
                <h3>Help Yourself</h3>
                <Link to='/' className='btn-primary'>Connect With Mentor</Link>
                <div className="social">
                <a href="/"><img src={insta} alt="" /></a>
                <a href="/"><img src={twitter} alt="" /></a>
                <a href="/"><img src={facebook} alt="" /></a>
                <a href="/"><img src={youtube} alt="" /></a>
                <a href="/"><img src={linkedin} alt="" /></a>
                <a href="/"><img src={telegram} alt="" /></a>

                </div>
              </div>
          </div>
        </div>
        <hr />
        <div className="bottom row">
          <div className='ml-10'>
            <Link to='/privacy-policy'>Privacy Policy</Link> | <Link to='/terms-of-services'>Terms of Service</Link>
          </div>
          <a href='https://www.techjain.com'>
            Site developed by TechJain IT Solutions
          </a>
          <div className='mr-10'>
           © 1dot1 2022. All Rights Reserved
          </div>
        </div>
    </footer>
  )
}
