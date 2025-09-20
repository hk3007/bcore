import React, { useEffect } from "react";
import { TeamMember } from "./TeamMember";
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from '../pages/Images/TEAM/Bimal Patel.jpeg'
import image3 from '../pages/Images/TEAM/Gaurav Singh Khushwah.jpg'
import image12 from '../pages/Images/TEAM/Utsav Chaware.jpg'
import image15 from '../pages/Images/TEAM/Intern 1.jpeg'


const teamMembers = [
  {
    name: 'Prof. (Dr.) Bimal N. Patel',
    designation: 'Vice-Chancellor',
    photo: [image2],
    info: 'Member, UN International Law Commission (2023-2027) Member, National Security Advisory Board of India'
  },
  {
    name: 'Dr. Jasbirkaur Thadhani',
    designation: 'University Dean (I/c)',
    photo: 'https://rru.ac.in/wp-content/uploads/2022/11/Jasbir-img-2-scaled.jpg',
    info: 'Dr. Jasbirkaur Thadhani is the University Dean (I/c) & Assistant Professor at SBSFI'
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
    info: 'Olympic Studies and Values, Talent Identification, Sports Sciences, Sports Policies and Governance'
  },
  {
    name: 'Mr. Yash Sharma',
    designation: 'I/c Director and Assistant Professor (Physical Education & Sports)',
    photo: 'https://rru.ac.in/wp-content/uploads/2023/05/Yash-Sharma-scaled.jpg',
    info: 'Mr. Yash Sharma is the I/c Director & Assistant Professor (Physical Education & Sports), with JRF/NET qualifications, specializing in sports science and physical education.'
  }
];
const interns = [
  {
    name: 'Kushi Sriram',
    schoolName: 'School of Criminal Law and Military Law',
    photo: [image15],
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
