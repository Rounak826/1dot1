import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import './MentorSquad.css'
import illustration from '../../Assets/Collaboration-amico.png'
import { Search } from 'react-feather'
import Slider from "react-slick";
import { motion } from 'framer-motion'
import placeholder from '../../Assets/male-placeholder.jpeg'
import DikshaHeliwal from '../../Assets/Mentors-squad/Diksha-Heliwal1.png'
import GarimaDhanwani from '../../Assets/Mentors-squad/Garima-Dhanwani.jpg'
import PrabalKumar from '../../Assets/Mentors-squad/Prabal-Kumar-Rajpoot1.png'
import PushkarDeshpande from '../../Assets/Mentors-squad/CA-Pushkar-Deshpande-1.png'
import RahulChattani from '../../Assets/Mentors-squad/Rahul-Chattani-1.jpg'
import BhavyaHaswani from '../../Assets/Mentors-squad/Bhavya-Haswani1.jpg'
import PriyanshiJain from '../../Assets/Mentors-squad/CA-Priyanshi-Jain.png'
import { useAuth } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
const categoryList = ['FINANCE', 'LAW', 'INFORMATION TECHNOLOGY', 'MEDICINE & SURGERY', 'COMPANY SECRETARY', 'BAKING', 'MAKEUP ARTIST​', 'LITERATURE & ARTS', 'FINANCE', 'LAW', 'INFORMATION TECHNOLOGY', 'MEDICINE & SURGERY']
export default function MentorSquad() {
  const [data, setData] = useState([]);
  const{fetchCategory}=useAuth()
  useEffect(() => {
    fetchCategory().then(e=>{
      setData(e);
    })
  }, [fetchCategory])
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    className: 'category',
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
      responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      }
    
    ]
  };

  const dummydata = [
    {
      category: 'Finance',
      mentors: [
        {
          name: 'CA PRIYANSHI JAIN',
          title: 'Faculty & Student Mentor, CAPS Academy',
          image: PriyanshiJain
        },
        {
          name: 'CA BHAVYA HASWANI',
          title: 'Asst. Manager, Practus Advisor',
          image: BhavyaHaswani
        },
        {
          name: 'CA RAHUL CHHATTANI',
          title: 'Manager, Waterfield Advisors',
          image: RahulChattani
        },
        {
          name: 'CA PUSHKAR DESHPANDE',
          title: 'Business & Integration Arch Senior Analyst, Accenture',
          image: PushkarDeshpande
        },
        {
          name: 'PRABAL KUMAR RAJPOOT',
          title: 'Analyst, JPMorgan Chase & Co.',
          image: PrabalKumar
        },
      ]

    },
    {
      category:'Baking',
      mentors: [
        {name:'DIKSHA HELIWAL',
         title:'Professional Home Baker',
         image: DikshaHeliwal
        },
        {name: 'GarimaDhanwani',
        title:'Professional Home Baker',
        image: GarimaDhanwani
       },
      ]
    },
    {
      category:'Baking',
      mentors: [
        {name:'DIKSHA HELIWAL',
         title:'Professional Home Baker',
         image: DikshaHeliwal
        },
        {name: 'GarimaDhanwani',
        title:'Professional Home Baker',
        image: GarimaDhanwani
       },
      ]
    },
    {
      category: 'Finance',
      mentors: [
        {
          name: 'CA PRIYANSHI JAIN',
          title: 'Faculty & Student Mentor, CAPS Academy',
          image: PriyanshiJain
        },
        {
          name: 'CA BHAVYA HASWANI',
          title: 'Asst. Manager, Practus Advisor',
          image: BhavyaHaswani
        },
        {
          name: 'CA RAHUL CHHATTANI',
          title: 'Manager, Waterfield Advisors',
          image: RahulChattani
        },
        {
          name: 'CA PUSHKAR DESHPANDE',
          title: 'Business & Integration Arch Senior Analyst, Accenture',
          image: PushkarDeshpande
        },
        {
          name: 'PRABAL KUMAR RAJPOOT',
          title: 'Analyst, JPMorgan Chase & Co.',
          image: PrabalKumar
        },
      ]

    }
  ]

  return (
    <div className="mentorSquad">
      <Hero heading={'Mentors Squad'} src={illustration} />
      <div className="search">
        <div className="control">
          <input type="text" placeholder='search here...' />
          <button>
            <Search />
          </button>
        </div>

      </div>

      <Slider {...settings}>
        {data.map((x, i) => {
          return (
            <Item key={i} text={x.category} index={i} />
          );
        })}
      </Slider>
      {
        data.map((catData, index) => {
          return (
            <div key={index} className={'col background-'+ (index%2===0?'':Math.floor( Math.random() * 3 ) + 1)}>
              <div className="heading lg center" style={{color: index%2===0?'#023E8A':'#fff'}}>
                <h5>{catData.category}</h5>
                <hr />
              </div>

              <div className="container">

                {catData.mentors.map((mentor, index) => {
                  return (
                    <MentorCard key={index} id={mentor.id} src={mentor.image?mentor.image:placeholder} name={mentor.name} desc={mentor.job} />
                  )
                })

                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
function Item(props) {
  return (
    <div className='item' key={props.index}>
      <h5>{props.text}</h5>
    </div>
  );

}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: '2rem' }}
      onClick={onClick}
    >
    </div>
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: '2rem' }}
      onClick={onClick}
    >
    </div>
  );
}

function MentorCard(props) {
  console.log(props);
  return (
    <Link to='/mentor' className='mentorCard' state={props.id} >
    
      <div className="image">
        <motion.img whileHover={{ scale: 1.3 }} transition={{ duration: 1 }} src={props.src} alt="" />
      </div>
      <div className="info">
        <h5>{props.name}</h5>
        <p>{props.desc}</p>
      </div>
    </Link>
  )
}
