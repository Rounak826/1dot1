import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import './Partners.css'
import pImage1 from '../../Assets/Canopus.jpg'
import pImage2 from '../../Assets/Concordiscc.jpg'
import pImage3 from '../../Assets/Skill-Key-India.png'
import pImage4 from '../../Assets/Ink-Bond.png'
export default function Partners() {
    const {ref,inView} = useInView();
    const animationLeft = useAnimation();
    const animationRight = useAnimation();
    useEffect(() => {
        if(inView){
            animationLeft.start({
                x:0,
                opacity:1,
                transition:{
                    duration:2
                }
            })
            animationRight.start({
              x:0,
              opacity:1,
              transition:{
                  duration:2
              }
          })
        }
        if(!inView){
            animationLeft.start(
                {
                    x:'+50vw',
                    opacity:0.1
                }
            )
            animationRight.start(
              {
                  x:'-50vw',
                  opacity:0.1
              }
          )
        }
        
    }, [inView,animationLeft,animationRight])
  return (
    <div ref={ref} className="partners">
        <motion.div className="info"
          animate={animationRight}      
        >
            <h3>OUR <span>PARTNERS</span></h3>
            <hr />
            <p>1dot1 believes in creating win-win partnerships, exchanging knowledge, sharing resources, and learning from each other will increase our collective impact.</p>
            <p>Let’s catch up to explore new ideas and make this world a better place. Together we can make a difference!</p>
            <Link to="/" className="btn-primary">Partner With Us</Link>
        </motion.div>
        <motion.div className="img" 
            animate={animationLeft}    
        >
            <div className="flex row">
                <img src={pImage1} alt="Canopus" />
                <img src={pImage2} alt="Concordiscc" />
            </div>
            <div className="flex row">
                <img src={pImage3} alt="Skill-key-India" />
                <img src={pImage4} alt="Ink-Bond" />
            </div>
        </motion.div>
    </div>
  )
}
