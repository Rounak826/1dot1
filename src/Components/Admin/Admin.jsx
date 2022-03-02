import React, { useEffect, useState } from 'react'
import './Admin.css';
import mentor from '../../Assets/virtual-class.png'
import mentee from '../../Assets/graduation-cap.png'
import request from '../../Assets/application.png'
import { Check, Eye, Mail, X } from 'react-feather';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
export default function Admin() {
    const [reload, setReload] = useState(false);
    const {fetchRequests, getOverview} = useAuth();
    const [requestList ,setList] = useState([]);
    const [overview ,setOverview] = useState(
        {
            "status": 200,
            "data": {
              "mentorCount": 0,
              "menteeCount": 0
            },
            "error": false,
            "result": "SUCCESS",
            "message": "SUCCESS"
          }
    );
    useEffect(() => {
      fetchRequests().then(e=>{
          setList(e);
      })
      getOverview().then(e=>{
        setOverview(e);
        //console.log(e);
      })

    }, [getOverview,fetchRequests,reload])
    
    return (
        <div className="admin">
            <h1>Admin <span>Dashboard</span> </h1>
            <div className="overview">
                <h2>Overview</h2>
                <div className="container">
                    <div className="card">
                        <img src={mentee} alt="" />
                        <h3>Enrolled Mentee</h3>
                        <p>{overview.data.menteeCount}</p>
                    </div>
                    <div className="card">
                        <img src={mentor} alt="" />
                        <h3>Enrolled Mentor</h3>
                        <p>{overview.data.mentorCount}</p>
                    </div>
                    <div className="card">
                        <img src={request} alt="" />
                        <h3>Pending Requests</h3>
                        <p>{requestList.length}</p>
                    </div>
                </div>
            </div>
            <div className="request">
                <h2>Pending Requests</h2>
                <div className="container">
                    {
                        requestList.map((req,i) => {
                            return <RequestCard key={i} setReload={setReload} reload={reload}  src={req.profile_pic_source} name={req.name} position={req.current_job} exp={req.experience} id={req.user_id} mail={req.email} category={req.category} />
                        })
                    }

                </div>
            </div>

        </div>
    )
}
function RequestCard(props) {

    const { src, name, position, mail, id, exp , category,setReload,reload } = props;
    const {respondRequest,currentUser,pushMentor} = useAuth();
    function handelClick(mentor_id,response) {
       // console.log(response);
        respondRequest({mentor_id, admin_id:currentUser?currentUser.user._id:null ,response}).then(e=>{
           // console.log(e);
            if(response==="true"){

                pushMentor(
                    {
                        category: category,
                        mentor:{
                            "id":id,
                            "name":name,
                            "job":position,
                            "image": src
                        }
                    }
                ).then(e=>{
                   // console.log(e);
                    setReload(!reload);
                    
                })
            }else{
                setReload(true);
            }
            
        })
    }
    
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
                        <Link to='/mentor' state={id}><Eye /></Link>
                        <button onClick={(e)=>handelClick(id, "true")}><Check /></button>
                        <button onClick={(e)=>handelClick(id, "rejected")}><X /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}