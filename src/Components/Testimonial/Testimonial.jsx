import React from 'react'
import './Testimonial.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
export default function Testimonial() {
    const List = [
    `This is a wonderful initiative! Thanks a lot for providing such an amazing opportunity for students to talk about their problems. The session was quite helpful and I think my mentor was able to clear my doubts and provide me with some great advice.`,
    `I have seen many positive changes in me because of CA Priyanshi Jain. With her help, now I’m focusing very well on studies. She is a great mentor. No weakness can be changed in one night, but she is helping me to overcome the same and it improves my way of study. Thank you so much Priyanshi.`,
    `It was great talking to Harsh. Wanted guidance on the company secretary and legal arena and he very well explained the pathway towards it and ensured the great clarity all together. Really was great talking to him. Will recommend his mentorship for sure to the world.`,
    `1dot1 is a great platform exactly designed to cater the needs of students. It is need of the hour. The mentors here are very helping & provided valuable insight to decide future steps. I had a call with Yash Khandelwal, and got very helpful suggestions and a friendly mentor.`    
];
  return (
    <div className="testimonial">
    <div className="head heading md">
        <h5>See what <span>mentees</span> say about our mentorship sessions</h5>
        <hr />
    </div>
    <div className="carousal">
           <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false} showStatus={false}>
               {List.map((x,i)=>{
                   return(
                       <div key={i} className="item">
                           <p>{x}</p>
                       </div>
                   )
               })}
           </Carousel>
    </div>
</div>
  )
}
