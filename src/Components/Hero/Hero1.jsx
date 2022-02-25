import React from 'react'
import './Hero.css'
import heroImg from '../../Assets/SVG/heroImage.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function hero1() {

  return (
    <div className="hero1">
        <motion.div className="info"
            initial={{x:'-50vw',opacity:0.1}}
            animate={{x:'0',opacity:1}}
            transition={{duration:2}}    
        > 
            <h2>Hello,</h2>
            <h2>I am <span>1dot1.</span></h2>
            <hr />
            <p>Understand the practical insights of different career via telephonic discussion with our expert mentors.</p>
            <Link className='btn-secondary' to='/'>Connect With Mentor</Link>
        </motion.div>
        <motion.div className="img"
            initial={{x:'+50vw',opacity:0.1}}
            animate={{x:'0',opacity:1}}
            transition={{duration:2}}
        >
            <img src={heroImg} alt="" />
        </motion.div>
    </div>
  )
}
