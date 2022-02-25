import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/LandingPage/Landing';
import AboutUs from './Components/About Us/AboutUs';
import Footer from './Components/Footer/Footer';
import MentorSquad from './Components/MentorSquad/MentorSquad';
import CareerLibrary from './Components/CareerLibrary/CareerLibrary';
import Contactus from './Components/Contactus/Contactus';
import ConnectMentors from './Components/ConnectMentors/ConnectMentors';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Terms from './Components/Terms/Terms';
import Mentorpage from './Components/MentorPage/Mentorpage';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import MentorSetup from './Components/MentorSetup/MentorSetup';
import MenteeSetup from './Components/MenteeSetup/MenteeSetup';
import Admin from './Components/Admin/Admin';


function App() {
  
  return (

    <div className="App">
      <Router>
        <Navbar />
        <FloatingButton/>
        <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/About-us' element={<AboutUs/>}/>
        <Route exact path='/career-Library' element={<CareerLibrary/>}/>
        <Route exact path='/contact-us' element={<Contactus/>}/>
        <Route exact path='/mentor-squad' element={<MentorSquad/>}/>
        <Route exact path='/connect-with-mentor' element={<ConnectMentors/>}/>
        <Route exact path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route exact path='/terms-of-services' element={<Terms/>}/>
        <Route exact path='/Mentor' element={<Mentorpage/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/mentor-setup' element={<MentorSetup/>}/>
        <Route exact path='/mentee-setup' element={<MenteeSetup/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
       </Routes>
       
       <Footer/>
      </Router>

    </div>
  );
}

export default App;
