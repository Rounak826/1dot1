import React from 'react'
import { ReactComponent as Whatsapp } from '../../Assets/whatsapp.svg'
import './FloatingButton.css'
import { motion } from 'framer-motion';
export default function FloatingButton() {
  const variant = {
    wobble: {
      scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
      rotate: [0, 20, -20, 20, -20, 0],
      transition: { duration: 1 }
    }
  }
  return (
    <>
      <motion.div animate={'wobble'} variants={variant} className="floatingBtn">
        <div className="label">Whatsapp</div>
        <button><Whatsapp /></button>
      </motion.div>

    </>

  )
}
