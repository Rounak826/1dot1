import React, { useEffect } from 'react'
import './Alert.css'
import { AlertTriangle, CheckCircle } from 'react-feather'
import { motion, useAnimation } from 'framer-motion'
export default function Alert(props) {
    const controls = useAnimation();

    const variant = {
        wobble: {
          x:[5,-5,5,-5,0],
          transition: { duration: 0.6, }
        }
      }
      
      useEffect(()=>{ 
        controls.start(
            variant.wobble
        )
    },[variant.wobble,controls,props.message])
  return (
    <motion.div id='Form-alert' animate={controls} className="formError">{props.error?<AlertTriangle color={'red'}/>:<CheckCircle color={'green'}/>}<p>{props.message}</p></motion.div>
  )
}
