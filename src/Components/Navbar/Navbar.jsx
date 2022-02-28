import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { LogOut, Menu, User, X } from 'react-feather';
import { Link, useLocation } from 'react-router-dom'
import logo from '../../Assets/Logo-1.png'
import { useAuth } from '../../Context/AuthContext';
import './Navbar.css'
export default function Navbar() {
  const {currentUser}= useAuth()
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);

  }, [scrollPosition]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <>
      <nav className={`flex row ${scrollPosition > 50 ? 'solid' : 'transparent'}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links flex row center-y">
          <Link to='/'>Home</Link>
          <Link to='About-us'>About Us</Link>
          <Link to='/Career-Library'>Career Library</Link>
          <Link to='/mentor-squad'>Mentors Squad</Link>
          <Link to='/contact-us'>Contact Us</Link>
          <Link to='/connect-with-mentor' className='btn-primary' >Connect With Mentor</Link>
        </div>
        {currentUser&&<div className="user">
          <button><User /></button>
          <button><LogOut /></button>
        </div>}
        <button onClick={() => { setShowMenu(true) }} className='menu'><Menu /></button>
      </nav>
      {showMenu &&
        <AnimatePresence>
          <motion.div initial={{ opacity: 0, x: '+10vw' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} exit={{ opacity: 0, x: '+10vw' }} className="sideBar">
            <div className="top">
              <button onClick={() => { setShowMenu(false) }} className='menu'><X /></button>
            </div>
            <div className="links">
              <Link to='/'>Home</Link>
              <Link to='About-us'>About Us</Link>
              <Link to='/Career-Library'>Career Library</Link>
              <Link to='/mentor-squad'>Mentors Squad</Link>
              <Link to='/contact-us'>Contact Us</Link>
              <Link to='/connect-with-mentor' >Connect With Mentor</Link>
            </div>

          </motion.div>
        </AnimatePresence>
      }
    </>
  )
}
