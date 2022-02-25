import React, { useEffect } from 'react'
import CallAway from '../CallAway/CallAway'
import Hero1 from '../Hero/Hero1'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import './Landing.css'
import pie1 from '../../Assets/Pie1.png'
import JoinMentor from '../JoinMentor/JoinMentor';
import Partners from '../Partners/Partners';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
export default function Landing() {
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
    <div className="landing">
        
        <Hero1/>
        <CallAway/>
        <div ref={ref} className="mentor-chart flex row">
          <motion.div className="info flex col"
            animate={animationRight}
          >
            <h3>MENTORS IN A <span>PIE</span> </h3>
            <hr />
            <p>1dot1 family include mentors from different backgrounds with varied real-world experiences.</p>
          </motion.div>
          <motion.div className="img"
            animate={animationLeft}
          >
            <img src={pie1} alt="" />
          </motion.div>
        </div>
        <JoinMentor />
        <Partners/>
        <Features />
        <Testimonial/>
    </div>
  )
}
