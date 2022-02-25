
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import './CallAway.css'
import homeBack1 from '../../Assets/BackHome1.png'
import homeBack2 from '../../Assets/BackHome2.png'
import homeBack3 from '../../Assets/BackHome3.png'
import library from '../../Assets/library.png'
import mentor_connect from '../../Assets/mentor_connect.png';
import squad from '../../Assets/squad_of_mentors.png'

export default function CallAway() {
    const {ref,inView} = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if(inView){
            animation.start({
                x:0,
                opacity:1,
                transition:{
                    duration:2
                }
            })
        }
        if(!inView){
            animation.start(
                {
                    x:'+50vw',
                    opacity:0.1
                }
            )
        }
        
    }, [inView,animation])
    
    return (
        <div className="callAway flex col">
            <h3>Just A <span>Call Away!</span></h3>
            <hr />
            <motion.div ref={ref} className="container flex wrap" 
               animate={animation}
            >
                <CallCard icon={library} back={homeBack1} heading={'CAREER LIBRARY'} text={'Learn about different careers, the 1dot1 way!'} />
                <CallCard icon={mentor_connect} back={homeBack2} heading={'MENTORS SQUAD'} text={'Learn about different careers, the 1dot1 way!'} />
                <CallCard icon={squad} back={homeBack3} heading={'CONNECT WITH MENTOR'} text={'Fill the form, sit back. 1dot1 will arrange a call connecting your preferred mentor.'} />
            </motion.div>

        </div>
    )
}

function CallCard(props) {
    return (
        <div className="callCard" style={{ backgroundImage: `url(${props.back})` }}>
            <img src={props.icon} alt="" />
            <div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            </div>
            
        </div>
    )
}