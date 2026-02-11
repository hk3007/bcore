import React, { useEffect } from "react";
import { TeamMember } from "./TeamMember";
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from '../pages/Images/TEAM/Bimal Patel.jpeg'
import image3 from '../pages/Images/TEAM/Gaurav Singh Khushwah.jpg'
import image12 from '../pages/Images/TEAM/Utsav Chaware.jpg'
import image15 from '../pages/Images/TEAM/Intern 1.jpeg'
import image4 from '../pages/Images/TEAM/Krishna Ramani.jpeg'
import image5 from '../pages/Images/TEAM/Sumit Pandey.jpeg'
import image6 from '../pages/Images/TEAM/Sonika Bisht.png'
import { Helmet } from 'react-helmet';

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
    photo: 'https://legacy.rru.ac.in/wp-content/uploads/2025/02/Jasbir-img-2-scaled-1.jpg',
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
    photo: 'https://legacy.rru.ac.in/wp-content/uploads/2023/05/Yash-Sharma-scaled.jpg',
    info: 'Mr. Yash Sharma is the I/c Director & Assistant Professor (Physical Education & Sports), with JRF/NET qualifications, specializing in sports science and physical education.'
  },
  {
    name: 'Ms. Sonika Bisht',
    designation: 'Research Officer BCORE',
    photo: [image6],
    info: 'Ms. Sonika Bisht is a Research Officer at the Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gujarat. She holds a Master of Laws (LL.M) from Rashtriya Raksha University and a B.B.A LL.B (Hons.) degree from Law College Dehradun, Uttaranchal University.'
  }
];
const interns = [
  {
    name: 'Kushi Sriram',
    schoolName: 'School of Criminal Law and Military Law',
    photo: [image15],
    info: 'Research And Publication'
  },
  {
    name: 'Krishna Ramani',
    schoolName: 'School of Internal Security, Defence and Strategic Studies',
    photo: [image4],
    info: 'Sponsership And Events'
  },
  {
    name: 'Sumit Pandey',
    schoolName: 'School of Applied Science and Engineering Technology',
    photo: [image5],
    info: 'Public Relations And Marketing'
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
       <Helmet>
        <title>Team – Bharat Centre of Olympic Research & Education</title>
        <meta name="description" content="Home page of BCORE..." />
      </Helmet>
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
