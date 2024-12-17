import React, { useEffect } from "react";
import { TeamMember } from "./TeamMember";
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from '../pages/Images/TEAM/Bimal Patel.jpeg'
import image3 from '../pages/Images/TEAM/Gaurav Singh Khushwah.jpg'
import image4 from '../pages/Images/TEAM/HARSHDIPSINH RATHOD.jpg'
import image5 from '../pages/Images/TEAM/Harshil Khokhar.jpg'
import image6 from '../pages/Images/TEAM/Kruti.jpg'
import image7 from '../pages/Images/TEAM/Neeladri Shekhar Das.jpg'
import image8 from '../pages/Images/TEAM/Purnima Joshi.png'
import image9 from '../pages/Images/TEAM/Shivam Kumar.jpg'
import image10 from '../pages/Images/TEAM/Sushil Goswami.png'
import image11 from '../pages/Images/TEAM/TANISHKA SINGH.jpg'
import image12 from '../pages/Images/TEAM/Utsav Chaware.jpg'
import image13 from '../pages/Images/TEAM/Zulfikar Pathan.jpg'
import image14 from '../pages/Images/TEAM/ANIRUDH SINGH.jpg'



const teamMembers = [
  {
    name: 'Prof. (Dr.) Bimal N. Patel',
    designation: 'Vice-Chancellor',
    photo: [image2],
    info: 'Member, UN International Law Commission (2023-2027) Member, National Security Advisory Board of India'
  },
  {
    name: 'Mr. Sushil Goswami',
    designation: 'University DEAN',
    photo: [image10],
    info: 'Assistant Professor (Maritime Law) Director, School of Integrated Coastal and Maritime Security Studies Ph.D. (Pursuing), LL.M., B.A. LL.B (Hons.), UGC-NET'
  },
  {
    name: 'Lt. (Dr.) Gaurav Singh Kushwah',
    designation: 'Director NCC',
    photo: [image3],
    info: 'Head of Sports Fields, Amenities and Gym Branch and Assistant Director (Physical Education and Sports) PhD, MPEd, BPEd'
  },
  {
    name: 'Dr. Utsav Chaware',
    designation: 'Director BCORE',
    photo: [image12],
    info: 'Talent Identification, Basketball, Sports Policies, Health Sciences/Education, Exercise Physiology'
  },
  {
    name: 'Dr. Purnima Joshi',
    designation: 'Director I/c',
    photo: [image8],
    info: 'School of Physical Education and Sports (SPES)'
  }
];
const interns = [
  {
    name: 'Shivam Kumar',
    schoolName: 'School of International Cooperation, Security and Strategic Languages',
    photo: [image9],
    info: ''
  },
  {
    name: 'Zulfikar Pathan',
    schoolName: 'School of International Cooperation, Security and Strategic Languages',
    photo: [image13],
    info: ''
  },
  {
    name: 'Neeladri Shekhar Das',
    schoolName: 'School of International Cooperation, Security and Strategic Languages',
    photo: [image7],
    info: ''
  },
  {
    name: 'Tanishka Singh',
    schoolName: 'School of International Cooperation, Security and Strategic Languages',
    photo: [image11],
    info: ''
  },
  {
    name: 'Harshil Khokhar',
    schoolName: 'School of IT, Artificial Intelligence and Cyber Security',
    photo: [image5],
    info: ''
  },
  {
    name: 'Kruti Hudka',
    schoolName: 'School of International Cooperation, Security and Strategic Languages',
    photo: [image6],
    info: ''
  },
  {
    name: 'Harshdipsinh Rathod',
    schoolName: 'School of IT, Artificial Intelligence and Cyber Security',
    photo: [image4],
    info: ''
  },
  {
    name: 'Anirudh Singh',
    schoolName: 'School of Physical Education and Sports',
    photo: [image14],
    info: ''
  }
];

export const Team = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs only once on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div>
      <section className="overview">
        <h2>BCORE TEAM</h2>
      </section>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={member.name} className="flip-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <TeamMember
                  name={member.name}
                  designation={member.designation}
                  photo={member.photo}
                />
              </div>
              <div className="flip-card-back">
                <h3>{member.name}</h3>
                <p>{member.designation}</p>
                <p>{member.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="overview">
        <h2>BCORE INTERNS</h2>
      </section>
      <div className="team">
        {interns.map((intern, index) => (
          <div key={intern.name} className="flip-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <TeamMember
                  name={intern.name}
                  designation={intern.schoolName}
                  photo={intern.photo}
                />
              </div>
              <div className="flip-card-back">
                <h3>{intern.name}</h3>
                <p>{intern.schoolName}</p>
                <p>{intern.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
