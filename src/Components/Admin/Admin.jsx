import React from 'react'
import './Admin.css';
import mentor from '../../Assets/virtual-class.png'
import mentee from '../../Assets/graduation-cap.png'
import request from '../../Assets/application.png'
import BhavyaHaswani from '../../Assets/Mentors-squad/Bhavya-Haswani1.jpg'
import { Check, Eye, Mail, X } from 'react-feather';
const reqList = [
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    },
    {
        name: 'Bhavya Haswani',
        src: BhavyaHaswani,
        position: 'Charted Accountant at Defarma pvt. ltd.',
        exp: 6,
        id: 'asjb2k39awl',
        mail: 'jhondoe@gmail.com'
    }
]
export default function Admin() {
    return (
        <div className="admin">
            <h1>Admin <span>Dashboard</span> </h1>
            <div className="overview">
                <h2>Overview</h2>
                <div className="container">
                    <div className="card">
                        <img src={mentee} alt="" />
                        <h3>Enrolled Mentee</h3>
                        <p>2125</p>
                    </div>
                    <div className="card">
                        <img src={mentor} alt="" />
                        <h3>Enrolled Mentor</h3>
                        <p>189</p>
                    </div>
                    <div className="card">
                        <img src={request} alt="" />
                        <h3>Pending Requests</h3>
                        <p>70</p>
                    </div>
                </div>
            </div>
            <div className="request">
                <h2>Pending Requests</h2>
                <div className="container">
                    {
                        reqList.map((req,i) => {
                            return <RequestCard key={i} src={req.src} name={req.name} position={req.position} exp={6} id={req.id} mail={req.mail} />
                        })
                    }

                </div>
            </div>

        </div>
    )
}
function RequestCard(props) {
    const { src, name, position, mail, id, exp } = props;
    return (
        <div key={id} className="card">
            <div className="img">
                <img src={src} alt="" />
            </div>
            <div className="info">
                <div className="column">
                    <div className='group'>
                    <h3>{name}</h3>
                    <p>{position}</p>
                    </div>
                    
                    <a href={"mailto:" + mail}><Mail /></a>
                </div>
                <div className="column">
                    <h3>Exp: +{exp}</h3>
                    <div className="row">
                        <button><Eye /></button>
                        <button><Check /></button>
                        <button><X /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}