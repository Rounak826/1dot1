import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import './Features.css'
import quote from '../../Assets/SVG/quote.svg'
export default function Features() {
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
    <div ref={ref} className="features">
        <div className="background"></div>
        <motion.div className="head"
            animate={animationRight}
        >
            <h3>WHY <span>1dot1</span></h3>
            <hr />

        </motion.div>
        <motion.div className="wrapper"
            animate={animationLeft}
        >
            <FeatureCard head={"Real-life"} bold={"test"} desc={"If you are thinking for opting any career, best way to understand it from the expert in that career."} />
            <FeatureCard head={"Learn from others"} bold={"mistakes"} desc={"Instead of risking your whole life in  a wrong decision, better to learn form others mistakes."} />
            <FeatureCard head={"Necessity, not"} bold={"luxury"} desc={"Easy open access to mentors team, one click to connect with mentors."} />
            <FeatureCard head={"Effective"} bold={"networking"} desc={"Grow your actual network by becoming a part of 1dot1 curated team of multiskilled professionals."} />
        </motion.div>



    </div>
  )
}
function FeatureCard(props){
    return(
        <div className="Fcard flex">
            
            <div className="top">
                <img src={quote} alt="" />
            </div>
            <h3>{props.head}<span> {props.bold}</span></h3>
            <hr />
            <p>{props.desc}</p>
        </div>
    );
}