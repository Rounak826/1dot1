import React, { useEffect } from 'react'
import './AboutUs.css'
import illustration from '../../Assets/SVG/aboutus.svg'
import about from '../../Assets/SVG/about.svg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import professional from '../../Assets/ProfessionalMentor.png';
import learning from '../../Assets/learining.png';
import idea1dot1 from '../../Assets/idea-of-1dot1.png';
import rocket from '../../Assets/rocket.png';
import blocks from '../../Assets/blocks.png';
import ringer from '../../Assets/ringer.png';
import task from '../../Assets/task.png';
import Kulgaurav from '../../Assets/team/KULGAURAV-KHUNGAR.jpg';
import Vidhi from '../../Assets/team/Vidhi-Pandya.jpg';
import Palak from '../../Assets/team/Palak-Pitroda.jpg';
import Sonam from '../../Assets/team/Sonam-Panjawani.jpeg';
import Ashish from '../../Assets/team/Ashish-Panjwani1.jpg';
import Rahul from '../../Assets/team/Rahul-Ahuja.png';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'
import Hero from '../Hero/Hero'
const TeamList = [
    {src:Rahul,name:'RAHUL AHUJA',position:'Founder Mentor',social:{Instagram:"https://www.instagram.com/_rahul_ahuja_/",Twitter:"https://twitter.com/rahul_ahuja_",Facebook:"",Linkedin:"https://www.linkedin.com/in/rahulahujaca/"}},
    {src:Ashish,name:'ASHISH PANJWANI',position:'Co-Founder Mentor',social:{Instagram:"https://www.instagram.com/aaashish__/",Twitter:"https://twitter.com/AshishPanjwani1",Facebook:"https://www.facebook.com/ashish.panjwani.100",Linkedin:"https://www.linkedin.com/in/er-ashish-panjwani/"}},
    {src:Sonam,name:'SONAM PANJWANI',position:'Manager',social:{Instagram:"https://www.instagram.com/kanchandulhani/",Twitter:"https://twitter.com/kanchan_dulhani",Facebook:"https://www.facebook.com/kdulhani/",Linkedin:"https://www.linkedin.com/in/sonam-panjwani-9397aaa8/"}},
    {src:Palak,name:'PALAK PITRODA',position:'Graphic Designer',social:{Instagram:"https://www.instagram.com/palak_pitroda_/",Twitter:"https://twitter.com/palak_pitroda_",Facebook:"",Linkedin:""}},
    {src:Kulgaurav,name:'KULGAURAV KHUNGAR',position:'Content Writer (Ink Of Bond)',social:{Instagram:"https://www.instagram.com/inkofbond/",Twitter:"",Facebook:"",Linkedin:"https://www.linkedin.com/in/kulgaurav-khungar-3007/"}},
    {src:Vidhi,name:'VIDHI PANDYA',position:'Content Writer (Ink Of Bond)',social:{Instagram:"https://www.instagram.com/inkofbond/",Twitter:"",Facebook:"",Linkedin:"https://www.linkedin.com/in/vidhi-pandya-634a0b160/"}}


]



export default function AboutUs() {
  return (
    <div className="aboutPage">
       <Hero heading={'About Us'} src={illustration} />
       <About/>
       <History/>
       <Plan />
       <Thinking/>
       <div className="team">
           <div className="head">
               <h5>Our <span>TEAM</span></h5>
               <hr />
           </div>
           <div className="wrapper">
                {
                    TeamList.map((member,index)=>{
                        return <TeamCard key={index} team={member} />
                    })
                }
           </div>
       </div>
    </div>
  )
}
function About(){
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
    return(
        <div ref={ref} className="about">
        <motion.div className="info flex col"
            animate={animationRight}
          >
            <h3>ABOUT <span>1dot1</span> </h3>
            <hr />
            <p>1We’re a team of professionals from different background and experiences. We initiated this platform with a motive to be a person which we wished we had during our career decision turns at any walk of life.</p>
            <p>This platform is for sharing and exchanging experiences in the form of mentoring. Professionals can also develop their business network by joining this curated professional team.</p>
          </motion.div>
          <motion.div className="img"
            animate={animationLeft}
          >
            <img src={about} alt="" />
          </motion.div>
        </div>
    )
}
function History(){
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
    return(
        <div ref={ref} className="history">
           <motion.div className="info flex col"
            animate={animationRight}
          >
            <h3>HOW IT <span>STARTED ?</span> </h3>
            <hr />
            <p>A casual discussion with friends on the lack of personalized career guidance based on hands on experiences gave birth to the thought of an online platform for the benefit of individuals across the country.</p>
          </motion.div>
          <motion.div className="img"
            animate={animationLeft}
          >
            <img src={about} alt="" />
          </motion.div>
        </div>
    )
}
function Plan(){
    return(
        <div className="plan">
            <div className="card" >
                <div className="Image">
                        <img src={professional} alt="" />
                </div>
                <h3>Realising the <span>gap</span></h3>
                <p>Experiential learning is the need of the hour. Most professionals do feel a gap between theory and practical aspects of an industry.</p>
            </div>
            <div className="card" >
                <div className="Image">
                        <img src={learning} alt="" />
                </div>
                <h3><span>Collaborating</span></h3>
                <p>Experienced professionals have come forward to create curated network and mentor people from all walks of life who are in need of practical insights of a particular industry to decide for their future prospects.</p>
            </div>
            <div className="card">
                <div className="Image">
                        <img src={idea1dot1} alt="" />
                </div>
                <h3><span>1dot1</span></h3>
                <p>Experiential learning is the need of the hour. Most professionals do feel a gap between theory and practical aspects of an industry.</p>
            </div>
        </div>
    )
}
function Thinking(){
    return(
        <div className="thinking">
        <div className="info">
            <div>
            <h3>1dot1</h3>
            <h3><span>Thinking</span></h3>
            <hr />
            </div>
            
        </div>

        <div className="tabel">
            <div className="Trow">
                <div className="img">
                <img src={rocket} alt="" />
                </div>
                <div className="text">
                    <h5><span>No login required</span> - easy access to resources</h5>
                </div>
            </div>
            <div className="Trow">
                <div className="img">
                <img src={ringer} alt="" />
                </div>
                <div className="text">
                    <h5><span>Telephonic mentoring</span>- widely acceptable and convenient</h5>
                </div>
            </div>
            <div className="Trow">
                <div className="img">
                <img src={blocks} alt="" />
                </div>
                <div className="text">
                    <h5><span>Experiential learning</span> - necessity, not luxury</h5>
                </div>
            </div>

            <div className="Trow">
                <div className="img">
                <img src={task} alt="" />
                </div>
                <div className="text">
                    <h5><span>Let's grow together </span> - CONNECT : DISCUSS : COLLABORATE </h5>   
                </div>
            </div>
        </div>
    </div>
    )
}
function TeamCard(props){
    return(
        <motion.div whileHover={{scale:1.05}} transition={{duration:0.3,type:'tween'}} className="teamCard">
            <div className="image">
                <img src={props.team.src} alt="" />
            </div>
            <div className="info">
                <h4>{props.team.name}</h4>
                <p>{props.team.position}</p>
            </div>
            <div className="social">
            {props.team.social.Twitter.length>0&&<a href={props.team.social.Twitter}><Twitter/></a>}
            {props.team.social.Facebook.length>0&&<a href={props.team.social.Facebook}><Facebook/></a>}
            {props.team.social.Instagram.length>0&&<a href={props.team.social.Instagram}><Instagram/></a>}
            {props.team.social.Linkedin.length>0&&<a href={props.team.social.Linkedin}><Linkedin/></a>}
            </div>
        
        </motion.div>
    )
}