import React from 'react'
import { motion } from 'framer-motion'



export default function Hero(props) {
    return(
        <div  className="hero">

        <motion.div 
            initial={{x:'-50vw',opacity:0.1}}
            animate={{x:'0',opacity:1}}
            transition={{duration:2}}  
            className="col">
            <h1>{props.heading}</h1>
            <hr />
        </motion.div>
        <motion.div  
            initial={{x:'+50vw',opacity:0.1}}
            animate={{x:'0',opacity:1}}
            transition={{duration:2}}
            className="image">
            <img src={props.src} alt="" />
        </motion.div>



    </div>
    )
}
