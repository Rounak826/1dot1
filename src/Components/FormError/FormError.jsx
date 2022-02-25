import React, { useEffect } from 'react'
import './FormError.css'
import { AlertTriangle } from 'react-feather'
import { motion, useAnimation } from 'framer-motion'
export default function FormError(props) {
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
    <motion.div animate={controls} className="formError"><AlertTriangle color='coral'/><p>{props.message}</p></motion.div>
  )
}
