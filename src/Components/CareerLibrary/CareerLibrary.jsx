
import React from 'react'
import './CareerLibrary.css'
import illustration from '../../Assets/SVG/career-library.svg'
import Hero from '../Hero/Hero'
import architecture from '../../Assets/career-library/architecture.svg'
import baking from '../../Assets/career-library/ayurveda.svg'
import ayurveda from '../../Assets/career-library/baking.svg'
import biochemistry from '../../Assets/career-library/biochemistry.svg'
import CA from '../../Assets/career-library/CA.svg'
import CS from '../../Assets/career-library/CS.svg'
import fashion from '../../Assets/career-library/fashion.svg'
import interior from '../../Assets/career-library/interior.svg'
import law from '../../Assets/career-library/law.svg'
import makeup_artist from '../../Assets/career-library/makeup_artist.svg'
import writer from '../../Assets/career-library/writer.svg'
import { motion } from 'framer-motion'


const libList = [
    {name:'Architecture', src:architecture , desc:'Building the castle of dreams'},
    {name:'Baking', src:baking , desc:'Reason behind our tummy smile'},
    {name:'Ayurveda', src:ayurveda , desc:'Science of life'},
    {name:'Biochemistry', src:biochemistry , desc:'The study of life in its chemical processes'},
    {name:'Chartered Accountant', src:CA , desc:'A person who is awake in those that sleep'},
    {name:'Company Secretary', src:CS , desc:'A Value Creator'},
    {name:'Fashion Designing', src:fashion , desc:'More than a mere outfit'},
    {name:'Interior Designing', src:interior , desc:'A career full of design secrets'},
    {name:'Law', src:law , desc:'Advice that matters'},
    {name:'Makeup Artist', src:makeup_artist , desc:'Beautify your career'},
    {name:'writer', src:writer , desc:'Building career out of words'},
];
export default function CareerLibrary() {
  return (
    <div className="careerLibrary">
        <Hero heading={'Career Library'} src={illustration} />
        <div className="library">
            { libList.map((career,index)=><LibraryCard key={index} name={career.name} src={career.src} desc={career.desc} />) }
        </div>
    </div>
  )
}

function LibraryCard(props){
    return(
        <div className="libCard">
            <div className="image">
                <motion.img whileHover={{scale:1.3}} transition={{duration:1}} src={props.src} alt="" />
            </div>
            <div className="info">
                <h5>{props.name}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}