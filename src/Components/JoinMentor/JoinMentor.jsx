import React from 'react'
import { Link } from 'react-router-dom';
import headset from '../../Assets/SVG/headset-solid.svg'
import clock from '../../Assets/SVG/clock.svg'
import money from '../../Assets/SVG/money.svg'
import './JoinMentor.css';
export default function JoinMentor() {
  return (
    <div className="joinMentor">
        <div className="info">
            <h3>JOIN AS</h3>
            <h3><span>MENTOR</span></h3>
            <hr />
            <p>If you also believe in growing together through sharing experiences and collaborating with curated professionals</p>
            <Link to="/mentor-signup" className='btn-tertiary'>
                Join as Mentor
            </Link>
        </div>

        <div className="tabel">
            <div className="Trow">
                <div className="img">
                <img src={headset} alt="" />
                </div>
                <div className="text">
                    <h5>Telephonic <span>mentoring</span> </h5>
                    <p>Mentoring via telephonic call managed by 1dot1.</p>
                </div>
            </div>
            <div className="Trow">
                <div className="img">
                <img src={clock} alt="" />
                </div>
                <div className="text">
                    <h5>In free <span>time</span> </h5>
                    <p>The calls will be scheduled as per your time convenience.</p>
                </div>
            </div>
            <div className="Trow">
                <div className="img">
                <img src={money} alt="" />
                </div>
                <div className="text">
                    <h5>Mentoring <span>fee</span> </h5>
                    <p>You can decide your mentoring fee.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
