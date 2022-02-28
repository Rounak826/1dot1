import React, { useRef, useState } from 'react'
import Hero from '../Hero/Hero'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import './MentorSetup.css'
import illustration from '../../Assets/SVG/mentor-signup.svg'
import terms from '../../Assets/SVG/terms.svg'
import money from '../../Assets/mentor-signup/money.png'
import moneybag from '../../Assets/mentor-signup/money-bag.png'
import check from '../../Assets/mentor-signup/check-mark.png'
import clock from '../../Assets/mentor-signup/wall-clock.png'
import { AlertCircle, X } from 'react-feather'
import { useAuth } from '../../Context/AuthContext'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileEncode)

export default function MentorSignup() {
    const [showForm, setShowForm] = useState(false);
    const [showGuidelines, setShowGuidelines] = useState(false);
    
    return (
        <div className="mentorSignup">
            <Hero heading={'Join As A Mentor'} src={illustration} />
            <Info setShowFrom={setShowForm} setShowGuidelines={setShowGuidelines} />
            {showGuidelines && <Guidelines setShowFrom={setShowForm} setShowGuidelines={setShowGuidelines} />}
            {showForm && <Form />}

        </div>

    )
}
function Info(props) {
    return (
        <div className="info">
            <div className="head">
                <h5>Become Mentor</h5>
                <p>Before Filling Form </p>
                <hr />
            </div>
            <div className="row">
                <div className="image">
                    <img src={terms} alt="" />

                </div>
                <div className="tabel">
                    <div className="Trow">
                        <div className="img">
                            <img src={money} alt="" />
                        </div>
                        <div className="text">
                            <h5> Joining  1dot1 <span>as mentor</span> is completely free.</h5>
                            <p> Right to join anyone or change in process/ terms are completely under discretion with 1dot1 team.</p>
                        </div>
                    </div>
                    <div className="Trow">
                        <div className="img">
                            <img src={check} alt="" />
                        </div>
                        <div className="text">
                            <h5>Below details should be <span>complete</span> in all aspects as with the help of this form</h5>
                            <p>1dot1 will show your profile on the website.</p>
                        </div>
                    </div>
                    <div className="Trow">
                        <div className="img">
                            <img src={clock} alt="" />
                        </div>
                        <div className="text">
                            <h5>After <span>submitting</span>  the form (with complete details) </h5>
                            <p>1dot1 team will go through your profile and get back to you (within a week).</p>
                        </div>
                    </div>
                    <div className="Trow">
                        <div className="img">
                            <img src={moneybag} alt="" />
                        </div>
                        <div className="text">
                            <h5>Mentoring <span>fee</span></h5>
                            <p>You have to decide this for 30 mnt. (maximum) telephonic mentoring. 100% fee will be transferred to the mentor (monthly settlement). You can change this later also.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <button onClick={() => props.setShowGuidelines(true)} className='join btn-tertiary'>Need Help ?</button>
                <button onClick={() => props.setShowFrom(true)} className='join btn-primary'>Join Now</button>
            </div>

        </div>

    );
}
const initial = {
    user_id: "",
    name: "",
    mobile_no: "",
    dob: "",
    gender: "",
    language: "",
    about: "  ",
    city: "",
    current_job: "",
    experience: "",
    education: "",
    skills: "",
    achivement: null,
    opinion_about_1dot1: "",
    prefered_time: "",
    expected_fee: "",
    payment_mode: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
    profile_pic_source: "",
    resume_source: "",
}
function Form() {
    const [method, setMethod] = useState(0);
    const [data, setData] = useState(initial);
    const {currentUser} = useAuth(); 
    const UID = currentUser.user._id; 
    const [photo, setPhoto] = useState()
    const [resume, setResume] = useState()
    const { mentorProfile } = useAuth();
    const name = useRef();
    const dob = useRef();
    const gender = useRef();
    const langauge = useRef();
    const aboutYou = useRef();
    const email = useRef();
    const mobNo = useRef();
    const address = useRef();
    const job = useRef();
    const exp = useRef();
    const education = useRef();
    const skills = useRef();
    const achievements = useRef();
    const about1dot1 = useRef();
    const time = useRef();
    const fee = useRef();
    const upiId= useRef();
    const acNo = useRef();
    const bankingName = useRef();
    const IFSC = useRef();
    const Linkedin = useRef();
    const Instagram = useRef();
    const Facebook = useRef();
    const Twitter = useRef();
    const other = useRef();




    async function handelSubmit(e) {

        e.preventDefault();
        let photo64 =photo[0].getFileEncodeDataURL();
        let resume64 = resume[0].getFileEncodeDataURL();
        console.log(currentUser.user._id);
        setData({
            user_id:UID,
            name: name.current.value,
            email:email.current.value,
            mobile_no: mobNo.current.value,
            dob: dob.current.value,
            gender:gender.current.value,
            language: langauge.current.value,
            about:aboutYou.current.value,
            city:address.current.value,
            current_job: job.current.value,
            experience: exp.current.value,
            education: education.current.value,
            skills:skills.current.value,
            achivement: achievements.current.value,
            opinion_about_1dot1: about1dot1.current.value,
            prefered_time:time.current.value,
            expected_fee: fee.current.value,
            payment_mode: {method:method,upi:upiId.current?upiId.current.value:"", accountNo:acNo.current? acNo.current.value:'', bankingName:bankingName.current?bankingName.current.value:'',IFSC:IFSC.current? IFSC.current.value:''},
            linkedin: Linkedin.current.value,
            instagram: Instagram.current.value,
            facebook: Facebook.current.value,
            twitter: Twitter.current.value,
            profile_pic_source:photo64,
            resume_source:resume64,
        })
        mentorProfile(data).then(e=>{console.log(e)});
        
    }
    return (
        <div className="form">
            <form action="" onSubmit={handelSubmit} >
            <h4>Upload Files</h4>
                <div className="form-row">
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="photo">Photograph</label>
                        <FilePond
                            files={photo}
                            onupdatefiles={setPhoto}
                            allowMultiple={false}
                            name="photo"
                            allowFileEncode	={true}
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                        <div className="tooltip"><AlertCircle /><p>Please do not share unclear images. At least face should be clearly visible. Best would be with professional attire.</p></div>
                    </div>
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="resume">Resume</label>
                        <FilePond
                            files={resume}
                            onupdatefiles={setResume}
                            allowMultiple={false}
                            name="resume"
                            allowFileEncode	={true}
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                        <div className="tooltip"><AlertCircle /><p> You can skip below mentioned relevant fields which are covered in your resume.</p></div>

                    </div>
                </div>
                <h4>Personal Details</h4>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="name">Full Name</label>
                        <input placeholder='Jhon Doe' type="text" name="name" ref={name}/>
                        <div className="tooltip"><AlertCircle /><p> Enter Your Full name</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-25">
                        <label htmlFor="DOB">D.O.B </label>
                        <input type="date" name="DOB"  ref={dob}/>

                    </div>
                    <div className="form-col-25">
                        <label htmlFor="currentjob">Select Gender</label>
                        <select name="gender" ref={gender} id="">
                            <option value="">-Select Gender-</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="lgbtq">LGBTQ</option>
                        </select>

                    </div>
                    <div className="form-col-25">
                        <label htmlFor="lang">Languages Known</label>
                        <input placeholder='English, Hindi etc.' type="text" name="lang" ref={langauge} />

                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="about">About You</label>
                        <textarea ref={aboutYou} name="" id="" rows="5"></textarea>
                        <div className="tooltip"><AlertCircle /><p>Hint: Think like you're telling someone your journey till now. Your native place, family background, your thoughts/ beliefs, some detail about your work - what you feel about it - what do you like/ dislike?</p></div>
                    </div>
                </div>
                <h4>Contact Details</h4>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="email">Email Address</label>
                        <input placeholder='Jhondoe@gmail.com' type="email" name="email" ref={email} />
                        <div className="tooltip"><AlertCircle /><p>For office use only.</p></div>
                    </div>

                </div>
                <div className="form-row">
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="mob no">Mobile No.</label>
                        <input placeholder='+91 6666666666' type="text" ref={mobNo} name="mob no" />
                        <div className="tooltip"><AlertCircle /><p>For office use and for scheduling call</p></div>

                    </div>
                    <div className="form-col-50">
                        <label htmlFor="city">City Country</label>
                        <input placeholder='eg. Mumbai,India' type="text" name="city" ref={address} />
                    </div>
                </div>
                <h4>Professional Details</h4>
                <div className="form-row">
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="currentjob">Current Job Role/ Position </label>
                        <input placeholder='Job Role or Position ,company' type="text" name="currentjob" ref={job} />
                        <div className="tooltip"><AlertCircle /><p>Job Role or Position - Company Name (Ex. Equity Research Analyst - Edelweiss Securities Ltd.)</p></div>

                    </div>
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="exp">Experience</label>
                        <input placeholder='Job Role or Position ,company' type="text" name="exp"  ref={exp}/>
                        <div className="tooltip"><AlertCircle /><p>Eg.: 1. Job role X - Company name X (From-To), 2. Job role Y - Company name Y (From-To).</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="education">Education Details </label>
                        <input placeholder='Degree , specialization, college/university' type="text" name="education" ref={education} />
                        <div className="tooltip"><AlertCircle /><p>Ex: B.Com, M.Phil, PHD, CA, Dr. (+) Branch/ Specialization (+) College/ Institute name, City</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="skills">Skills/ Professional Fields </label>
                        <input placeholder='eg. App Development, Painting,' type="text" name="skills" ref={skills} />
                        <div className="tooltip"><AlertCircle /><p>This will help people to find you through applying filters. Like - Compliance Officer, IPS, Equity Research, App Development, Painting, Due-Diligence, Farming, Chef, Business Analysis etc.</p></div>
                    </div>
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="achievements">Achievements </label>
                        <input placeholder='Awards, Recognition, Rank' type="text" name="achievements" ref={achievements} />
                        <div className="tooltip"><AlertCircle /><p>Hint: Any Awards, Proud moment, Recognition, Rank in exams etc. Mention "N.A." in other case</p></div>
                    </div>
                </div>
                <h4>1dot1 Specific Details</h4>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="about1dot1">What do you feel about 1dot1? *</label>
                        <textarea name="about1dot1" id="" rows="5" ref={about1dot1}></textarea>
                        <div className="tooltip"><AlertCircle /><p>This will be part of your profile.</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="time">Preferred Time for Mentoring </label>
                        <input placeholder='eg.7pm-8pm weekends' type="text" name="time" ref={time}/>
                        <div className="tooltip"><AlertCircle /><p>Ex: Daily 7pm-8pm/ Weekends/ Sunday 11am-2pm. *This will be mentioned in your profile. So that Mentee will submit request after checking preferred time. Anyways we'll schedule call only after your confirmation, but just a check on your preferred time*</p></div>
                    </div>
                    <div className="form-col-50 has-tooltip">
                        <label htmlFor="fee">Expected Mentorship Fee</label>
                        <input placeholder='eg. Rs 200' type="text" name="fee" ref={fee} />
                        <div className="tooltip"><AlertCircle /><p>INR per Call (20-30 mnt). 100% will be transferred to you. We've average mentoring fee of Rs.200</p></div>
                    </div>
                </div>
                <h4>Banking Details</h4>
                <div className="form-row">
                    <div className="form-col-25 has-tooltip">
                        <label htmlFor="currentjob">Payment Method</label>
                        <select onChange={(e) => { setMethod(e.target.value) }} value={method} name="gender" id="">
                            <option value='0'>-Select-</option>
                            <option value="1">Upi</option>
                            <option value="2">Bank Transfer</option>
                        </select>
                        <div className="tooltip"><AlertCircle /><p>For Mentorship Fee. Only for office use. Bank Details Required: Full Name, A/c no., IFSC</p></div>
                    </div>

                </div>
                {method === '1' && <div className="form-row">
                    <div className="form-col-50">
                        <label htmlFor="upi">UPI ID</label>
                        <input placeholder='eg. abc@ok.sbi' type="text" name="upi" ref={upiId} />
                    </div>
                </div>}
                {
                    method === '2' && <>
                        <div className="form-row">
                            <div className="form-col-100">
                                <label htmlFor="acno">Account No.</label>
                                <input placeholder='Your 16 digit Acc. No.' type="text" name="acno" ref={acNo} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col-50">
                                <label htmlFor="bankingName">Full Name</label>
                                <input placeholder='eg. Jhon Doe' type="text" name="bankingName" ref={bankingName}/>
                            </div>
                            <div className="form-col-50">
                                <label htmlFor="ifsc">IFSC code</label>
                                <input placeholder='' type="text" name="ifsc" ref={IFSC} />
                            </div>
                        </div>
                    </>
                }
                <h4>Social Media Details</h4>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="linkedin">LinkedIn Profile Link</label>
                        <input type="text" name="linkedin" ref={Linkedin} />
                        <div className="tooltip"><AlertCircle /><p>To get link - Go to Profile &#62;Contact Section &#62;  Copy link &#62; Paste here eg: https://www.linkedin.com/in/rahulahujaca/ </p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="Instagram">Instagram Profile Link</label>
                        <input type="text" name="Instagram" ref={Instagram} />
                        <div className="tooltip"><AlertCircle /><p>Hint: https://www.instagram.com/_rahul_ahuja_</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="Facebook">Facebook Profile Link</label>
                        <input type="text" name="Facebook" ref={Facebook} />
                        <div className="tooltip"><AlertCircle /><p>To get link - Go to Profile &#62; Copy link &#62; Paste here</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="Twitter">Twitter Profile Link</label>
                        <input type="text" name="Twitter" ref={Twitter} />
                        <div className="tooltip"><AlertCircle /><p>Hint: (https://twitter.com/rahul_ahuja_)</p></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-col-100 has-tooltip">
                        <label htmlFor="other">If we missed anything!!!</label>
                        <input type="text" name="other" ref={other} />
                        <div className="tooltip"><AlertCircle /><p>Eg. any other social media links, website address or anything you want to show in your profile</p></div>
                    </div>
                </div>
                <input type='submit' className='btn-primary' />
            </form>
        </div>
    )
}
function Guidelines(props) {
    return (
        <div className="guidelines">

            <div className="dialouge">
                <button className='closeDialouge' onClick={() => props.setShowGuidelines(false)}><X /></button>
                <div className="heading sm center">
                    <h5>Few <span>suggestions/ guidelines</span> before filling the form:</h5>
                    <hr />
                </div>
                <ul>
                    <li>Visit any Mentor's profile on the website to get sense how this form details will be used to create your profile. Mentor Team Link: www.1dot1.in/mentors-squad/</li>
                    <li>Your profile should be complete in all aspects. As it might be visited by many other professionals for networking, exchanging ideas, new business offers etc. and not only just for the purpose of mentoring.</li>
                    <li>Description are given just below the questions to make it clearer.</li>
                    <li>ocial media links: Please try to share all links, 1dot1 will connect with you there for tagging/mentioning you on the posts, sharing your profile etc. This will help us to public your profile. 1dot1 will never spam your mail/ social media.</li>
                    <li>Try to fill the form at one go (it'll take 20 minutes only). Though the form can be edited even after submitted. In case you didn't complete the form, do not refresh/ close the form, so that you can continue with the same form next time.  </li>
                    <li>Keep in handy: Photo, UPI Id, Social media links (Time consuming task).</li>

                </ul>
                <div>
                    <p>This is a social initiative. Terms & conditions can be changed for the sake of platform 1dot1.</p>
                    <p>Feel free to reach out to us for any query on +91-739-402-1111 or mentor@1dot1.in</p>
                </div>
                <button onClick={() => props.setShowFrom(true)} className='btn-secondary'>Continue To Form</button>
            </div>

        </div>
    )
}
