import React from 'react'
import { Link } from 'react-router-dom'
import './Mentorpage.css'
import BhavyaHaswani from '../../Assets/Mentors-squad/Bhavya-Haswani1.jpg'
import award from '../../Assets/Mentor-page/award.png'
import document from '../../Assets/Mentor-page/document.png'
import graduationCap from '../../Assets/Mentor-page/graduation-cap.png'
import job from '../../Assets/Mentor-page/job.png'
import language from '../../Assets/Mentor-page/language.png'
import { ReactComponent as Whatsapp } from '../../Assets/whatsapp.svg'
import { Facebook, Heart, Instagram, Linkedin, Share, Share2, Twitter } from 'react-feather'
const data = {
    name: 'CA BHAVYA HASWANI',
    title: 'Asst. Manager, Practus Advisor Pvt. Ltd.',
    image: BhavyaHaswani,
    about_1dot1: `At the age where one is practically considered child for making any decision, the most important decision of his life (Career Choice) is on him.
    It is very important to make the right decision and follow the right direction 1dot1 is an attempt to ease your life here.`,
    skills: ['Business Analysis', 'Financial Reporting', 'Cost Management Services', 'Legal Documentation', 'Banking Compliance'],
    time: 'Daily (7:30 pm to 8:30 pm)',
    social: { Instagram: 'https://instagram.com/', Twitter: 'https://www.twitter.com/', Linkedin: '', Facebook: '' },
    about: [
        'Bhavya never had a rigid plan on where he would go from the very 1st day. It’s always been “one step at a time” for him. Starting from the day he passed HSC, he was clear about going for Commerce because he could not handle science.',
        'During 1st year of graduation, he thought of giving a chance to CA field and finally he registered himself for CPT (CA Foundation now) and gradually with the time he was sure to pursue career in this field.',
        'As he said “one step at a time” all this happened with this simple formula. Meanwhile, he worked on start ups, sold mobile phones, handled legal and banking compliance, done promotional events too.',
        'He always thinks, re-thinks, handle confusions and then try all the available options.While in midst of all this he realized his attraction towards financial consultancyto end with.',
        'Here he is now “Financial Consultant”, and loves to maintain his travel albums.'
    ],
    languages: ['English', 'Hindi', 'Sindhi'],
    education: [
        'Chartered Accountancy, The Institute of Chartered Accountancy of India',
        'Bachelor’s of Law (Intellectual Property rights and Law of Medicine), KC Law College',
        'Bachelor’s of Commerce (Audit and Finance), HR College of Commerce and Economics'
    ],
    exp: [
        'Assistant Manager (Finance Delivery), Practus Advisor’s Pvt Ltd (Mar’20 – Present)',
        'Secretarial and Finance, MyMINZ (Jul’16 – Jan’18)',
        'Associate (Legal Documentaion), Integreon Managed Services (Jun’17 – Jul’17)',
        'Article Intern (Financial Consultancy), MyCFO (Jul’13 – Oct’15)',
        'Article Intern (Audit and Taxation), Rohira Mehta and Associates (Sep’12 – Jun’13)'
    ],
    achievements: [
        '(IPCC + Final) 17 Attempts and Now CA'
    ],
    likes: 3
}
export default function Mentorpage() {
    return (
        <div className="mentorPage">
            <div className="profile">
                <div className="side">
                    <div className="intro">
                        <img src={data.image} alt="" />
                        <div className="text">
                            <h1>{data.name}</h1>
                            <p>{data.title}</p>
                        </div>
                    </div>
                    <div className='section'>
                        <div className="heading sm left">
                            <h5>What <span>{data.name}</span> feels about 1dot1?</h5>
                            <hr />
                        </div>
                        <p>{data.about_1dot1}</p>
                    </div>
                    <div className="skills">
                        <div className="heading sm left">
                            <h5>Skills</h5>
                            <hr />
                        </div>
                        <ul>
                            {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="time">
                        <div className="heading sm left">
                            <h5>Preferred Time</h5>
                            <hr />
                        </div>
                        <p>{data.time}</p>
                    </div>

                    <div className="social">
                        <div className="heading sm left">
                            <h5>Social Links</h5>
                            <hr />
                        </div>
                        <div className="wrapper">
                            {data.social.Twitter.length > 0 && <a href={data.social.Twitter}><Twitter /></a>}
                            {data.social.Facebook.length > 0 && <a href={data.social.Facebook}><Facebook /></a>}
                            {data.social.Instagram.length > 0 && <a href={data.social.Instagram}><Instagram /></a>}
                            {data.social.Linkedin.length > 0 && <a href={data.social.Linkedin}><Linkedin /></a>}
                        </div>

                    </div>
                    <div className="center-x">
                        <Link className='btn-tertiary' to={'/connect-with-mentor'} >Connect With Mentor</Link>
                    </div>

                </div>
                <div className="main">
                    <div className="about">
                        <Head icon={document} heading={'About'} />
                        {data.about.map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                    <div className="language">
                        <Head icon={language} heading={'Languages Known'} />
                        <ul>
                            {data.languages.map((lang, i) => <li key={i}>{lang}</li>)}
                        </ul>

                    </div>
                    <div className="education">
                        <Head icon={graduationCap} heading={'Education'} />
                        <ul>
                            {data.education.map((edu, i) => <li key={i}>{edu}</li>)}
                        </ul>
                    </div>
                    <div className="Experience">
                        <Head icon={job} heading={'Experience'} />
                        <ul>
                            {data.exp.map((exp, i) => <li key={i}>{exp}</li>)}
                        </ul>
                    </div>
                    <div className="Achievements">
                        <Head icon={award} heading={'Achievements'} />
                        <ul>
                            {data.achievements.map((achievements, i) => <li key={i}>{achievements}</li>)}
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