import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Mentorpage.css'
import award from '../../Assets/Mentor-page/award.png'
import document from '../../Assets/Mentor-page/document.png'
import graduationCap from '../../Assets/Mentor-page/graduation-cap.png'
import job from '../../Assets/Mentor-page/job.png'
import language from '../../Assets/Mentor-page/language.png'
import { ReactComponent as Whatsapp } from '../../Assets/whatsapp.svg'
import { Facebook, Heart, Instagram, Linkedin, Share2, Twitter } from 'react-feather'
import { useAuth } from '../../Context/AuthContext'
const initial = {
    "status": 200,
    "error": false,
    "result": "",
    "message": "",
    "data": {
      "_id": "",
      "user_id": "",
      "name": "",
      "email": "",
      "mobile_no": "",
      "dob": "",
      "gender": "",
      "language": "",
      "about": "",
      "city": "",
      "current_job": " ",
      "experience": "",
      "education": "",
      "skills": "",
      "achivement": "",
      "opinion_about_1dot1": "",
      "prefered_time": "",
      "expected_fee": "",
      "payment_mode": {
        "method": "",
        "upi": "",
        "accountNo": "",
        "bankingName": "",
        "IFSC": ""
      },
      "linkedin": "",
      "instagram": "",
      "facebook": "",
      "twitter": "",
      "profile_pic_source": {
        "type": "Buffer",
        "data": []
      },
      "resume_source": {
        "type": "Buffer",
        "data": []
      },
      "__v": 0
    }
  }
export default function Mentorpage() {
    const location = useLocation();
    const [data, setData] = useState(initial);
    const {fetchMentor} = useAuth();
    useEffect(() => {
        console.log(location.state);
        fetchMentor(location.state).then(res=>{
            if(!res.error){
               setData(res.data);    
            }
            console.log(res)
        }).catch(e=>console.log(e))
    }, [fetchMentor,location.state])
    

    return (
        <div className="mentorPage">
            <div className="profile">
                <div className="side">
                    <div className="intro">
                        <img src={data.image} alt="" />
                        <div className="text">
                            <h1>{data.name}</h1>
                            <p>{data.current_job}</p>
                        </div>
                    </div>
                    <div className='section'>
                        <div className="heading sm left">
                            <h5>What <span>{data.name}</span> feels about 1dot1?</h5>
                            <hr />
                        </div>
                        <p>{data.opinion_about_1dot1}</p>
                    </div>
                    <div className="skills">
                        <div className="heading sm left">
                            <h5>Skills</h5>
                            <hr />
                        </div>
                        <ul>
                            {stringToArray(data.skills,',').map((skill, i) => <li key={i}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="time">
                        <div className="heading sm left">
                            <h5>Preferred Time</h5>
                            <hr />
                        </div>
                        <p>{data.prefered_time}</p>
                    </div>

                    <div className="social">
                        <div className="heading sm left">
                            <h5>Social Links</h5>
                            <hr />
                        </div>
                        <div className="wrapper">
                            {data.twitter&& <a href={data.twitter}><Twitter /></a>}
                            {data.facebook&& <a href={data.facebook}><Facebook /></a>}
                            {data.instagram&& <a href={data.instagram}><Instagram /></a>}
                            {data.linkedin&& <a href={data.linkedin}><Linkedin /></a>}
                        </div>

                    </div>
                    <div className="center-x">
                        <Link className='btn-tertiary' to={'/connect-with-mentor'} >Connect With Mentor</Link>
                    </div>

                </div>
                <div className="main">
                    <div className="about">
                        <Head icon={document} heading={'About'} />
                        {stringToArray(data.about, "   ").map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <div className="language">
                        <Head icon={language} heading={'Languages Known'} />
                        <ul>
                            {stringToArray(data.language, ",").map((lang, i) => <li key={i}>{lang}</li>)}
                        </ul>

                    </div>
                    <div className="education">
                        <Head icon={graduationCap} heading={'Education'} />
                        <ul>
                            {stringToArray( data.education, ",").map((edu, i) => <li key={i}>{edu}</li>)}
                        </ul>
                    </div>
                    <div className="Experience">
                        <Head icon={job} heading={'Experience'} />
                        <ul>
                            {stringToArray( data.experience, ",").map((exp, i) => <li key={i}>{exp}</li>)}
                        </ul>
                    </div>
                    <div className="Achievements">
                        <Head icon={award} heading={'Achievements'} />
                        <ul>
                            {stringToArray( data.achivement,',' ).map((achievements, i) => <li key={i}>{achievements}</li>)}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="share">
                <div className="like">
                    <button className="heart">
                        <Heart />
                    </button>
                    <p>+{data.likes}</p>
                </div>
                <hr />
                <p>Share This:</p>
                <div className="social">
                    <a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-3722" className="twitter" href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=twitter&amp;nb=1" target="_blank" title="Click to share on Twitter"><Twitter /></a>
                    <a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-3722" className='facebook' href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=facebook&amp;nb=1" target="_blank" title="Click to share on Facebook"><Facebook /></a>
                    <a rel="nofollow noopener noreferrer" data-shared="sharing-linkedin-3722" className='linkedin' href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=linkedin&amp;nb=1" target="_blank" title="Click to share on LinkedIn"><Linkedin /></a>
                    <a rel="nofollow noopener noreferrer" data-shared="sharing whatsapp-3722" className='whatsapp' href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=jetpack-whatsapp&amp;nb=1" target="_blank" title="Click to share on WhatsApp"><Whatsapp /></a>
                    <div className="more has-tooltip">
                        <div className="btn">
                            <Share2/> <span>More</span>
                        </div>
                        <div className="tooltip">
                        <a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-3722" className="twitter" href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=twitter&amp;nb=1" target="_blank" title="Click to share on Twitter"><Twitter /></a>
                    <a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-3722" className='facebook' href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=facebook&amp;nb=1" target="_blank" title="Click to share on Facebook"><Facebook /></a>
                    <a rel="nofollow noopener noreferrer" data-shared="sharing-linkedin-3722" className='linkedin' href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=linkedin&amp;nb=1" target="_blank" title="Click to share on LinkedIn"><Linkedin /></a>
                    <a rel="nofollow noopener noreferrer" data-shared="sharing whatsapp-3722" className='whatsapp' href="https://1dot1.in/mentors/finance/ca-bhavya-haswani/?share=jetpack-whatsapp&amp;nb=1" target="_blank" title="Click to share on WhatsApp"><Whatsapp /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
function Head(props) {
    return (
        <div className="head">
            <div className="icon">
                <img src={props.icon} alt="" />
            </div>
            <div className="text">
                <h2>{props.heading}</h2>
                <hr />
            </div>
        </div>
    );
}
function stringToArray(str,point){
    try{
        return str.split(point);
    }catch{
        return [];
    }
    
}