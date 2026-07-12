import React , {useEffect}from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import QR1 from './Images/qr-code (2).png';
import brochure from "./Broucher/Broucher.pdf";
import schedule from "./Broucher/Schedule.pdf";
import logo5 from './Images/Indian_Olympic_Association_logo.png'
import sponser1 from './Images/Hyperlab Logo.png';
import sponser2 from './Images/AISTS.png';
import collaborator1 from './Images/Ministry_of_Youth_Affairs_and_Sports.png'
import Speaker from './Images/Yoonkyu Song.png';
import speaker1 from './Images/Col Anant Kumar.png';
import speaker2 from './Images/Lambis.png';
import speaker3 from './Images/Maria Bogner.png';
import BCORENightRunDetails from "./BCORENightRunDetails";
import SafeSportEvent from '../components/EventPages/SafeSportEvent';
import Highlights from "../components/eventsdetails/Highlights";
import ImportantDates from "../components/eventsdetails/ImportantDates";
import CallForAbstract from "../components/eventsdetails/CallForAbstract";
import StepsToRegister from "../components/eventsdetails/StepsToRegister";
import ResourcesSection  from "../components/eventsdetails/ResourcesSection";
import AbstractGuidelines  from "../components/eventsdetails/AbstractGuidelines";
import EventHeader  from "../components/eventsdetails/EventHeader";
import WorkshopSection from "../components/eventsdetails/WorkshopSection";
import NearbyTransportation from '../components/eventsdetails/NearbyTransportation';
import BcoreLogo from "./Images/BCORE Logo.png"
import NadaLogo from "./Images/NADA Logo.png"
import IORC2 from "./Images/IORC2.png"
import GoBananas from "./Images/Go Bananas.png"

export const EventDetails = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array means this runs only once on mount
    const { id } = useParams(); // Get the ID from the URL

    const events = [
        {
            id: 1,
            name: '1st International Olympic Research Conference',
            date: '27 - 30 January 2025',
            place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar',
            description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
            subpoints: [
                'Renowned researchers and experts in Olympic studies will deliver lectures, conduct workshops, and facilitate discussions on current trends, challenges, and opportunities in the field.',
                'Members of the Olympic Studies Research Centre (OSRC) will have the opportunity to present their research findings and ongoing projects to a diverse, international audience.',
                'The academy welcomes attendees from India and around the globe, fostering international collaboration and knowledge sharing.',
                'BCORE will facilitate accommodation and local support for all participants throughout the academy.',
                'Participants will enjoy a guided tour of the heritage city of Ahmedabad and Statue of Unity offering insights into Indian culture and history.',
                'Attendees will have the unique opportunity to network and collaborate with industry experts and entrepreneurs.',
            ],
            Steps: [
                { event: 'Step 1', date: ' Submit the abstract' },
                { event: 'Step 2', date: 'Wait For confirmation' },
                { event: 'Step 3', date: 'Register to the Olympics conference' },
                { event: 'Step 4', date: 'Fill Google Form' },
            ],
            abstractGuidelines: {
                formatRequirements: [
                    'Abstract should be between 150-250 words.',
                    'Use 12-point Times New Roman font.',
                    'Double-space all text.',
                    'Set 1-inch (2.54 cm) margins on all sides.',
                    'Include page number in the top-right header.',
                    'Center the word "Abstract" as the title (bold).',
                    'Text should be left-aligned and not indented.'
                ],
                contentStructure: [
                    {
                        heading: 'Introduction',
                        description: 'Begin with a brief introduction to the research problem. Clearly state the purpose and objectives of the study.'
                    },
                    {
                        heading: 'Methodology',
                        description: 'Describe the research design. Include information about participants, if applicable. Outline data collection methods and procedures. Mention analytical approaches used.'
                    },
                    {
                        heading: 'Results',
                        description: 'Present key findings concisely. Include statistical significance when relevant. Focus on main outcomes only.'
                    },
                    {
                        heading: 'Conclusions',
                        description: 'State primary conclusions. Address implications of findings. Avoid introducing new information.'
                    },
                    {
                        heading: 'Keywords',
                        description: 'Include 3-5 keywords. Place keywords on a new line below the abstract. Indent the first line of keywords. Begin with "Keywords:" (italicized).'
                    }
                ]
            },
            importantDates: [
                { event: 'Last date for Abstract Submission', date: '12 January, 2025' },
                { event: 'Early Bird Registrations closes', date: '30 December, 2024' },
                { event: 'Regular Registrations closes', date: '15 January, 2025' },
                { event: 'Late Registrations till', date: '24 January, 2025' },
            ],
            guests: [
                {
                    id: 1,
                    name: "Shri (Dr.) Mansukh Mandaviya",
                    about: "Shri (Dr.) Mansukh Mandaviya is the current Union Minister of Health and Family Welfare, Chemicals, and Fertilizers, Government of India. Known for his visionary leadership, he has been instrumental in driving key healthcare reforms and fostering India's self-reliance in the pharmaceutical sector.",
                    img: "https://www.gavi.org/sites/default/files/body/2021-10/MANDAVIYA_Mansukh.jpg",
                },
                {
                    id: 2,
                    name: "Shri Harsh Sanghavi",
                    about: "Harsh Sanghavi is the Minister of State for Home, Industries, and Youth Affairs in the Government of Gujarat. A dynamic leader, he is known for his proactive approach to governance and engaging with youth for progressive development initiatives.",
                    img: "https://harshsanghavi.in/img/ss11.png ",
                },
                {
                    id: 3,
                    name: "Dr. PT USHA",
                    about: "PT Usha, fondly known as the 'Golden Girl of India,' is one of the greatest athletes in Indian history. A legendary sprinter, she has won numerous international medals and inspired generations with her dedication to sports and excellence.",
                    img: "https://c.ndtvimg.com/2022-11/nl30k5eg_pt-usha-twitter_625x300_28_November_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738",
                },
                {
                    id: 5,
                    name: "Prof. Bimal N Patel, VC, RRU",
                    about: "Prof. (Dr.) Bimal N. Patel is the Vice-Chancellor of Rashtriya Raksha University (RRU), a premier security and police university in India. He is also a Member of the National Security Advisory Board (NSAB) of India and the UN International Law Commission (2023-2027)",
                    img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Prof.%28Dr.%29_Bimal_N._Patel.jpg"
                }
            ],
            speakers: [
                {
                    id: 1,
                    name:"Mr. Lambis Konstantinidis, Executive Director, Planning Paris 2024 Games, France",
                    about: "Mr. Lambis Konstantinidis, Executive Director, Planning Paris 2024 Games, France Mr. Lambis Konstantinidis is the Executive Director of Planning and Coordination for the Paris 2024 Olympic and Paralympic Games",
                    img: [speaker2]
                },
                {
                    id: 2,
                    name:"Ms. Maria Bogner, Head of the International Olympic Studies Centre",
                    about: "Ms. Maria Bogner serves as the Head of the International Olympic Studies Centre, where she oversees research and educational initiatives focused on the Olympic Movement. She plays a key role in fostering global collaboration on sports and Olympic studies.",
                    img: [speaker3]
                },
                {
                    id: 3,
                    name:"Mr. Prasanth Shantakumaran, Head Sports Sector, KPMG, India",
                    about: "Mr. Prasanth Shantakumaran is a Partner at KPMG in India, where he leads the Digital Engineering and Quality (DEQ) practice as well as the Sports sector",
                    img: "https://kpmg.com/content/dam/kpmgsites/in/images/2020/12/prasanth-shanthakumaran.jpg"
                },
                {
                    id: 4,
                    name:"Mr Pranshu Jain, Executive Director, Sports Advisory, PwC India",
                    about: "Mr. Pranshu Jain is the Executive Director of Sports Advisory at PwC India. Pranshu has previously worked with firms like Deloitte and has been involved in various projects related to sports management and digital transformation",
                    img: "https://media.licdn.com/dms/image/v2/C4D03AQH1nThVeWchzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516893474724?e=1760572800&v=beta&t=CrX-cyMa7W_7q5LRky8H-siLlQyMngeghYSWHRtki9c"
                }
                ,
                {
                    id: 5,
                    name: "Prof. Wolfgang Maennig, The University of Hamburg, Department of Economics, Germany",
                    about: "Prof. Wolfgang Maennig is a distinguished academic at the University of Hamburg, specializing in Economics. His research focuses on urban and sports economics, including the economic impacts of major events and infrastructure development.",
                    img: "https://assets.rrz.uni-hamburg.de/instance_assets/fakws/14447474/maennig-640x361-75e48055c7df6d3b79ce8663e6e7ae0301cfcc41.jpg",
                },
                {
                    id: 6,
                    name:"Prof.  Rajendra Shrivastav, Novartis Professor of Marketing Strategy",
                    about: "Prof. Rajendra Srivastava is the Novartis Professor of Marketing Strategy and Innovation at the Indian School of Business (ISB). He is also the Executive Director of the Centre for Business Innovation (CBI) at EFPM",
                    img: "https://media.licdn.com/dms/image/v2/C5103AQHE4hB7W4kWwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517579741419?e=2147483647&v=beta&t=kl-igT0JMeqG9VOx2hu4YWcNkV18jfcUx1AcfJR1TO0"
                },
                {
                    id: 7,
                    name:"Christian Klaue Director, Corporate Communications and Public Affairs, International Olympic Committee (IOC)",
                    about: "Christian Klaue is the Director of Corporate Communications and Public Affairs at the International Olympic Committee (IOC). He joined the IOC in September 2015 and has been leading the department since October 2019",
                    img: "https://img.olympics.com/images/image/private/t_original_380/f_auto/primary/n6bepq6tdifn0jkpnvca"
                },
                {
                    id: 8,
                    name:"Prof Mahesh Panchagnula, Professor of Applied Mechanics, IIT Madras, India",
                    about: "Prof. Mahesh Panchagnula is a Professor of Applied Mechanics at IIT Madras, India. He specializes in fluid dynamics, atomization, and spray nozzle design",
                    img: "https://home.iitm.ac.in/mvp/img/prof-img.png"
                },
                {
                    id: 9,
                    name:"Mr. Ramesh. Kumar, CEO, IIT Madras Center of Excellence in Sports Science & Analytics",
                    about: "Mr. Ramesh Kumar is the CEO of the Center of Excellence in Sports Science and Analytics (CESSA) at IIT Madras, leading innovation in sports technology and research.",
                    img: "https://media.licdn.com/dms/image/sync/v2/D4D27AQES632CHz09iA/articleshare-shrink_800/articleshare-shrink_800/0/1711138359716?e=2147483647&v=beta&t=NalRaBoJGM9-riLKSa-8uyOMtzbnh0UOvEpSTRl79L8"
                },
                {
                    id: 10,
                    name: "Mr Cedric Vanden Bogaerde, Executive Director of AISTS",
                    about: "Mr. Cedric Vanden Bogaerde is the Executive Director of the International Academy of Sport Science and Technology (AISTS). He leads the organization in fostering innovation, education, and research to advance the global sports industry.",
                    img: "https://www.smartcitiesandsport.org/wp-content/uploads/2024/11/Cedric_Vanden_Bogaerde_250x250.png",
                },
                {
                    id: 11,
                    name: "Ms. Urvi Khasnis, Researcher from Scotland OSRC",
                    about: "Ms. Urvi Khasnis is a dedicated researcher affiliated with the Scotland OSRC (Olympic Studies Research Centre). Her work contributes to advancing research and promoting a deeper understanding of the Olympic Movement and its global impact.",
                    img: "https://www.research.ed.ac.uk/files-asset/311454898/Urvi_Photo_GMP.jpg?w=160&f=jpg",
                },
                {
                    id: 12,
                    name: "Mr. Dheeraj Malhotra, General Manager, BCCI",
                    about: "Mr. Dheeraj Malhotra serves as the General Manager of the Board of Control for Cricket in India (BCCI). He plays a pivotal role in managing cricket operations, strategizing development initiatives, and fostering the growth of the sport in India.",
                    img: "https://fifacies.pimsr.ac.in/wp-content/uploads/2021/01/Dheeraj_Malhotra.jpg",
                },
                {
                    id: 13,
                    name:"Mr. Udit Seth, Founder & Managing Director, Transtadia",
                    about: "Mr. Udit Seth is the Founder and Managing Director of TransStadia, a sports infrastructure company in India. He has been instrumental in developing multi-use sports facilities, including the Arena Stadium in Ahmedabad, through innovative public-private partnerships",
                    img: "https://ekaclub.net/wp-content/uploads/2023/Udit-Photo.jpg.webp"
                },
                {
                    id: 14,
                    name: "Mr. Ravneet Gill, Chief Executive Officer, AISTS India",
                    about: "Mr. Ravneet Gill, Chief Executive Officer, AISTS India",
                    img: "https://media.licdn.com/dms/image/v2/D4D03AQGjYjgUFhgT6A/profile-displayphoto-crop_800_800/B4DZh0YvkdH4AM-/0/1754299301359?e=1760572800&v=beta&t=nvvwhUr1tppGV2eUcEAAuMpc-LoURmpXjac1IS92Ly0",
                },
                {
                    id: 15,
                    name:"Ms. Isha Rathee, Architect, Populous",
                    about: "Ms. Isha Rathee is a Principal Architect at Populous, based in their New Delhi studio. She has over 10 years of experience in designing sports and entertainment venues, including the Narendra Modi Stadium in Ahmedabad",
                    img: "https://populous.com/uploads/2018/01/Isha-Rathee_005_BW_500X500_web.jpg"
                },
                {
                    id: 16,
                    name:"Mr. Yoonkyu Song, PhD Candidate of Willibald Gebhardt Institute e.V.",
                    about: "Mr. Yoonkyu Song is a PhD candidate at the Willibald Gebhardt Institute e.V., focusing on research related to sports science and the Olympic Movement. His work emphasizes the role of sports in fostering international collaboration and development.",
                    img: [Speaker]
                },
                {
                    id: 17,
                    name:"Mr. Chris Jenkins OBE, President of Commonwealth Games Federation",
                    about: "Mr. Chris Jenkins OBE is the President of the Commonwealth Games Federation (CGF). He provides strategic leadership to the organization, driving its mission to promote the values of humanity, equality, and destiny through the Commonwealth Games and its associated initiatives.",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MnfYs2psF2WqlMuinrBymeUiVunyuVALkA&s"
                },
                {
                    id: 18,
                    name: "Shri Ajay Patel, Senior Vice-President Indian Olympic Association",
                    about: "Shri Ajay Patel serves as the Senior Vice-President of the Indian Olympic Association (IOA). He plays a key role in promoting Olympic sports in India and fostering collaboration to enhance the nation's presence in international sports competitions.",
                    img: "https://pbs.twimg.com/profile_images/1626188722361466881/-JVeAGRv_400x400.jpg",
                },
                {
                    id: 19,
                    name: "Shri Adille Sumariwalla, Vice President, World Athletics",
                    about: "Shri Adille Sumariwalla is currently the President of the Athletics Federation of India (AFI) and a member of the Council of World Athletics. He is a former Olympian and a key figure in advancing athletics in India.",
                    img: "https://static.toiimg.com/thumb/msid-70393719,width-400,resizemode-4/70393719.jpg",
                },
                {
                    id: 20,
                    name: "Nuria Puig Brandes, Head of University Relations - Olympic Studies Centre",
                    about: "Nuria Puig Brandes is the Head of the International Olympic Committee (IOC). She leads various initiatives within the IOC, focusing on enhancing global collaboration and advancing the values and objectives of the Olympic Movement worldwide.",
                    img: "https://media.licdn.com/dms/image/v2/C5603AQFOEhEve7PE5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517559189317?e=1760572800&v=beta&t=hiLoC4OxDwi3pqFF_YZlwSIIlEnx-ZK0cyf73etLMQ8",
                },
                {
                    id: 21,
                    name: "Praveen Nahar, Former Director NIDA, India",
                    about: "Praveen Nahar was the Director of the National Institute of Design (NID) in Ahmedabad, India. He has over 23 years of experience in design teaching, consultancy, and research",
                    img: "https://nid.edu/public/image/people/xO5xPBl5WK.jpg"
                },
                {
                    id: 22,
                    name: "Mr. Ramkumar Subramian, Director, Collage Design ",
                    about: "Mr. Ramkumar Subramian is the Director of Collage Design, where he oversees the creative direction and strategic design projects. His work emphasizes innovative solutions in design, blending aesthetics with functionality across various industries.",
                    img: "https://collagedesign.com/wp-content/uploads/2023/12/Ram-S-With-Backgound-Final-2048x1365.jpg"
                },
                {
                    id: 23,
                    name: "Prof (Dr.) Mariia Bulatova, President of the Olympic Academy of Ukraine",
                    about: "Prof. (Dr.) Mariia Bulatova is the President of the Olympic Academy of Ukraine. She is dedicated to promoting Olympic education and fostering a deeper understanding of the Olympic values, while advancing research and initiatives that contribute to the development of sports in Ukraine.",
                    img: "https://rhineruhr2025.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn9ofama2kqg3%2F6tG68nCfZvFHtSwazMXe2a%2Ff2f063b451a4dc7ca601821f416abdbf%2FBulatova.jpg%3Ffm%3Dwebp&w=3840&q=75"
                },
                {
                    id: 24,
                    name: "Honorary Professor Ian Jobling, The Queensland Centre for Olympic and Paralympic Studies			",
                    about: "Honorary Professor Ian Jobling is associated with The Queensland Centre for Olympic and Paralympic Studies. He contributes valuable academic expertise, particularly in the areas of sports studies, Olympic, and Paralympic research, enhancing global understanding of these movements.",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz94xDGXP6FffideahbpWDzBNZC9NU8jR6w&s",
                },
                {
                    id: 25,
                    name: "Grzegorz Botwina, CEO, Institute of Sports Governance, Director of Polish Olympic Studies and Research Centre",
                    about: "Grzegorz Botwina is the CEO of the Institute of Sports Governance and the Director of the Polish Olympic Studies and Research Centre. He specializes in good governance and social responsibility in sports, contributing significantly to the field through his leadership and expertise",
                    img: "https://media.licdn.com/dms/image/v2/D4E03AQHf8wJ2fkY4AA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1634903794601?e=2147483647&v=beta&t=WvDZBj-xK3iRd8xnuFUlGnVLGb2EASsjsiNO6wSinto",
                },
                {
                    id: 26,
                    name: "Deepa Malik, Paralympian",
                    about: "Deepa Malik is an inspiring Indian Paralympian who made history by becoming the first Indian woman to win a medal at the Paralympic Games. She won a silver medal in shot put at the 2016 Rio Paralympics",
                    img: "https://sportsmatik.com/uploads/world-events/players/deepa-malik_1569244978.jpg",
                },
                {
                    id: 27,
                    name: "Mr. Nachhatar Singh Johal, CEO, TOPS",
                    about: "Mr. Nachhatar Singh Johal is the CEO of TOPS (Target Olympic Podium Scheme), an initiative aimed at identifying and supporting India's top athletes to excel in international competitions, particularly the Olympic Games.",
                    img: "https://d2a3o6pzho379u.cloudfront.net/111671.jpg",
                },
                {
                    id: 28,
                    name: "Mr. Rishikesh Joshi, Founder, SportsforAll",
                    about: "Mr. Rishikesh Joshi is the Founder of SportsforAll, an organization dedicated to promoting sports participation and development at all levels. His efforts focus on creating accessible opportunities for individuals to engage in sports, fostering a healthier and more active society.",
                    img: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/931b41ebd69907b8c2fc5bbe2140c930",
                },
                {
                    id: 29,
                    name: "Col Anant Gupta, Mission Olympic Wing Indian Army",
                    about: "Col. Anant Kumar is part of the Mission Olympic Wings in the Indian Army, which supports the development and training of elite athletes. His role involves mentoring and providing strategic guidance to athletes, helping them achieve success in international sports competitions, including the Olympics.",
                    img: [speaker1]
                }
            ],
            qrCode: QR1,
            email: 'olyresearchacademy.registration@rru.ac.in',
            brochure: [brochure],
            Schedule: [schedule],
            registrationLink: 'https://forms.eduqfix.com/bcoreregof/add',
            googleform: 'https://docs.google.com/forms/d/e/1FAIpQLScQw4qS9J-GXwCaMcVa0ZAqcYBgWTCDWWda2uzknElP3KxIWg/viewform?vc=0&c=0&w=1&flr=0',
            callForAbstract: {
                text: `BCORE cordially invites abstracts for presentation at its International Olympic Research Conference at Rashtriya Raksha University. Submissions addressing hosting and organizing, Olympic education, sustainable development, and technological innovation are particularly welcomed. Early career researchers are encouraged to participate.`,
                submissionEmail: 'olyresearchacademy.submissions@rru.ac.in',
                deadline: '12th January 2025',
            },
            organizingTeam: [
                {
                    name: 'Program Chair',
                    members: [
                        { name: 'Dr Utsav Chaware', email: 'utsav.chaware@rru.ac.in' },
                    ]
                },
                {
                    name: 'Program co - Chair',
                    members: [
                        { name: 'Mr Bhargav Sarmah ', email: 'bhargav.sarmah@rru.ac.in' },
                        { name: 'Mr Yash Sharma ', email: 'yash.sharma@rru.ac.in' },
                        { name: 'Ms. Phurailatpam Laxmikumari Devi', email: 'phurailatpam.laxmikumari@rru.ac.in' },
                    ]
                },
                {
                    name: 'Advisory Chair',
                    members: [
                        { name: 'Mr. Pruthvi-Gerben Patel', email: '' },
                    ]
                },
            ],
            transportation: {
                busRoutes: [
                    {
                        route: 'Ahmedabad to BCORE',
                        details: 'Take a direct bus from Ahmedabad to Gandhinagar. Buses are available every hour. The journey takes approximately 45 minutes.'
                    },
                    {
                        route: 'Gandhinagar to BCORE',
                        details: 'From Gandhinagar, take a local bus or auto-rickshaw to Rashtriya Raksha University. The venue is located near the Bharat Centre of Olympic Research and Education (BCORE).'
                    },
                ]
            },
            accommodations: [
                {
                    name: 'Good Times, Dahegam',
                    address: 'Good Times by Sangath IPL near Rashtriya Raksha University Lavad Dehgam',
                    contact: 'For Bookings Contact - 8175991401 | Mr. Sandeep',
                    image: 'https://goodtimesbysangathipl.com/wp-content/uploads/2022/04/gtl-2.png',
                    link: 'https://goodtimesbysangathipl.com/'
                },
                {
                    name: 'Malhaar Resort, Dahegam',
                    address: 'Malhaar Resort, Uttam Dairy, Behind Dehgam Power Grid, Dahegam, Ahmedabad Gujarat, India.',
                    contact: 'For Bookings Contact - 7575806021 | Mr. Bahadur Singh',
                    image: 'https://r1imghtlak.mmtcdn.com/d8b02df056b711eeb25f0a58a9feac02.jpg',
                    link: 'https://www.makemytrip.com/hotels/malhaar_resorts-details-dahegam.html'
                },
                {
                    name: 'Hotel Neelkanth, Dahegam',
                    address: '5R64+56H, Ahmedabad - Modasa Rd, Vrundavan Society, Nehru Society, Dahegam, Gujarat 382305',
                    image: 'https://lh3.googleusercontent.com/p/AF1QipP9ZAJ0xs9tV2dMSOqfec29It65ZVHO_8ZJINgs=s1360-w1360-h1020',
                    link: ''
                },
                {
                    name: 'University Accomodation, Gandhinagar (Economical)',
                    address: '4, 5 & 6 Floor, Times Square, Bhaijipura, Chowk, Gandhinagar, Gujarat 382421',
                    contact: 'For Bookings Contact - +91 7600 476 012 | Mr. Luckyraj Singh',
                    image: 'https://lh3.googleusercontent.com/p/AF1QipPVsaQosnVl3KS2F_R80QpFiUiFNHKAMZA-OKKZ=s1360-w1360-h1020',
                    link: 'https://www.facebook.com/people/Home-World-Hostel/100083539351879/'
                },
            ],
            NearBytransportation: [
                {
                    name: 'Sardar Vallabhbhai Patel International Airport',
                    address: 'Hansol, Ahmedabad, Gujarat 380003',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/SVPI_Airport%2C_Ahmedabad.jpg',
                    link: 'https://www.adani.com/svpia-ahmedabad-airport'
                },
                {
                    name: 'Kalupur Railway Station',
                    address: 'Kapasia Bazar, Sakar Bazzar, Kalupur, Ahmedabad, Gujarat 380002',
                    image: 'https://static.gujaratsamachar.com/content_image/content_image_87011ab4-1387-4672-b3d0-c2160e24d0b1.jpeg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'Gandhinagar Capital',
                    address: 'Footover Bridge, Sector 13C, Sector 14, Gandhinagar, Gujarat 382016',
                    image: 'https://akm-img-a-in.tosshub.com/aajtak/images/assets/202107/gandhinagar-railway-station-night-view.jpg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'Geeta Mandir ST Bus Stand',
                    address: 'Gita Mandir, Ahmedabad, Gujarat 380001',
                    image: 'https://content.jdmagicbox.com/comp/ahmedabad/93/079p250393/catalogue/gujarat-state-road-transport-corporation-geeta-mandir-road-ahmedabad-st-bus-depot-2qkhhet.jpg',
                    link: 'https://gsrtc.in/site/'
                },
            ],
            sponsors: [
                {
                logo: collaborator1,
                },                
                {
                logo: 'https://adcbank.coop/wp-content/uploads/2023/05/logo.png',
                },
                {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvCZCgT7YBn7oemQ6DIZ1jbGwwW_-a3kT2g&s',
                },
                {
                logo: logo5,
                },
                {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2JGH-vII_4QfdvFstjfErRy6CrqXIAcM0A&s',
                },
                {
                logo: sponser1,
                },
                {
                logo: sponser2,
                },
                {
                logo: 'https://www.sportscom.in/wp-content/uploads/2021/11/logo-u1-1.png',
                },
            ],
            bookletLink:'https://rru.ac.in/wp-content/uploads/2024/11/RRU-BCORE-Olympic-research-Academy-Brochure.pdf',
            videos: [
            {
                title: 'Day 1 - Inauguration of 1st International Olympic Research Conference at BCORE RRU',
                url: 'https://youtu.be/5ELsHViBiY4?si=z06BIv_ENtGGTruJ',
                link: 'https://www.youtube.com/embed/5ELsHViBiY4?si=zFVWtVLH_gw_z8_h'
            },
            {
                title: 'Day 1 - Session 1 of 1st International Olympic Research Conference at BCORE RRU',
                url: 'https://youtu.be/Rmygyf4Ive0?si=GD8YhLK0yVbAuMnR',
                link: 'https://www.youtube.com/embed/Rmygyf4Ive0?si=0u7GgoilWFgYqrgQ'
            },
            {
                title: 'Day 1 - Session 2 of 1st International Olympic Research Conference at BCORE RRU',
                url: 'https://youtu.be/q1tSqFiw-EE?si=zUdwYttTXj-j3kkQ',
                link: 'https://www.youtube.com/embed/q1tSqFiw-EE?si=cZX-MpnYALZXew8K'
            },
            {
                title: 'Day 1 - Session 3 of 1st International Olympic Research Conference at BCORE RRU',
                url: 'https://youtu.be/f8J-geIPcbw?si=e2gK8autcykb3u0f',
                link: 'https://www.youtube.com/embed/f8J-geIPcbw?si=9fIjwdPul8hiG7xO'
            }

        ]

        },
        {
        id: 2,
        name: 'SPORTS EXCELLENCE SEMINAR',
        date: '23rd June 2025',
        place: 'Rashtriya Raksha University, Gandhinagar, India',
        description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
        subpoints: [
            'Enhancing the sporting profile of security forces through human resource development and high-performance infrastructure',
            'Enhancing training ecosystems and institutionalizing sports excellence across CAPFs and State Police Organizations.',
            'Exploring structured career transition pathways for athletes and security personnel.',
            'Introducing formal sports education initiatives offered by BCORE and RRU.',
            'Providing a platform for progressive policy dialogue tailored to the needs of security organizations.'
        ],
        schedule: [
            {
            day: 'DAY 1',
            date: '23rd JUNE 2025',
            sessions: [
                {
                time: '09:30 AM - 11:00 AM',
                sessionType: 'Opening Ceremony',
                topic: 'Welcome, Keynote, Guest Speeches',
                speakers: 'Chief Guest Dr. Hari Ranjan Rao',
                },
                {
                time: '11:30 AM - 01:00 PM',
                sessionType: 'Expert Session 1',
                topic: 'Developing Sports Human Capital & High-Performance Infrastructure',
                speakers:
                    'Dr. Kinjal Suratwala, Dr. Shyamal Vallabhjee, Gagan Narang, Dr. B.K. Tripathi, Col. Rajyavardhan Rathore',
                },
                {
                time: '02:00 PM - 03:30 PM',
                sessionType: 'Panel Discussion 1',
                topic: 'Institutionalizing Sports Excellence Across CAPFs & SPOs',
                speakers:
                    'Dr. Pankaj Jain, Deepa Malik, Rajesh Puri, Brig. Rajesh Nair, Dr. Vedamurthy',
                },
                {
                time: '04:00 PM - 05:30 PM',
                sessionType: 'Breakout Session',
                topic: 'Best Practices in Sports Development within Forces',
                speakers: 'Nominated officers from CAPFs and SPOs, moderated by BCORE faculty',
                },
            ],
            },
            {
            day: 'DAY 2',
            date: '24th JUNE 2025 (MONDAY)',
            sessions: [
                {
                time: '09:30 AM - 11:00 AM',
                sessionType: 'Expert Session 2',
                topic: 'Career Transition Pathways for Athletes and Personnel',
                speakers:
                    'Anju Bobby George, Col. Vijay Bist, Shiba Prasad, Prof. Ratnakar Shetty, Aparna Popat',
                },
                {
                time: '11:30 AM - 01:00 PM',
                sessionType: 'Expert Session 3',
                topic: 'Formalizing Sports Education for Forces: Role of RRU & BCORE',
                speakers:
                    'Prof. B.P. Sharma, Dr. Suman Sharma, Dr. Parth Goswami, Dr. Aashish Contractor, Abhinav Bindra',
                },
                {
                time: '02:00 PM - 03:30 PM',
                sessionType: 'Panel Discussion 2',
                topic: 'Progressive Sports Policies for India’s Security Forces',
                speakers:
                    'Dr. Shaji Prabhakaran, Brig. J.S. Bhatia, Tushar Arothe, Dr. Manisha Malhotra, Senior CAPF Officer',
                },
                {
                time: '03:30 PM - 04:30 PM',
                sessionType: 'Closing Ceremony',
                topic: 'Summary, Recommendations, Felicitation',
                speakers: 'Secretary - Sports (MYAS), Organizing Chair (BCORE), National Anthem',
                },
            ],
            },
        ],
        email: 'registration.bcore@rru.ac.in ',
        registrationLink: 'https://rise.rru.ac.in/course/533/0 ',
        NearBytransportation: [
            {
                name: 'Sardar Vallabhbhai Patel International Airport',
                address: 'Hansol, Ahmedabad, Gujarat 380003',
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/SVPI_Airport%2C_Ahmedabad.jpg',
                link: 'https://www.adani.com/svpia-ahmedabad-airport'
            },
            {
                name: 'Kalupur Railway Station',
                address: 'Kapasia Bazar, Sakar Bazzar, Kalupur, Ahmedabad, Gujarat 380002',
                image: 'https://static.gujaratsamachar.com/content_image/content_image_87011ab4-1387-4672-b3d0-c2160e24d0b1.jpeg',
                link: 'https://www.irctc.co.in/nget/train-search'
            },
            {
                name: 'Gandhinagar Capital',
                address: 'Footover Bridge, Sector 13C, Sector 14, Gandhinagar, Gujarat 382016',
                image: 'https://akm-img-a-in.tosshub.com/aajtak/images/assets/202107/gandhinagar-railway-station-night-view.jpg',
                link: 'https://www.irctc.co.in/nget/train-search'
            },
            {
                name: 'Geeta Mandir ST Bus Stand',
                address: 'Gita Mandir, Ahmedabad, Gujarat 380001',
                image: 'https://content.jdmagicbox.com/comp/ahmedabad/93/079p250393/catalogue/gujarat-state-road-transport-corporation-geeta-mandir-road-ahmedabad-st-bus-depot-2qkhhet.jpg',
                link: 'https://gsrtc.in/site/'
            },
        ],
        },
        {
            id: 3,
            name: '2nd International Olympic Research Conference',
            date: '27 - 30 January 2026',
            place: 'Rashtriya Raksha University, Gandhinagar, India',
            description:
                "To address critical Olympic challenges in India's Olympic aspirations and develop long-term, sustainable solutions through integrated research, education, and governance",
            bookletLink:
              'https://drive.google.com/file/d/1166eN6ZlTAL8r2vHmNToTwFrqkXvZb_I/view?usp=sharing',
            Schedule: [schedule],
            subpoints: [
                'Ignite research reform and foster innovation in Olympic studies.',
                'Integrate education, research, and governance for a cohesive Olympic development framework.',
                "Create India-centered strategies aligned with the country's vision for sporting excellence.",
                'Gap finding, scoping reviews, qualitative methodologies, and emerging research areas, led by national and international Olympic faculty.',
                'Facilitation of partnerships between researchers, firms, academies, and institutes for case studies.',
                'Direct involvement of universities, schools, and academies in shaping Olympic-aligned policies.',
                'Olympics, Commonwealth Games, and WPFG in the Indian context.',
                'Sponsorships from Indian agencies/firms, with experts and scholars contributing expertise in return.',
            ],
            importantDates: [
                { event: 'Abstract	Submission	Deadline', date: '31 December 2025' },
                { event: 'Notification of Acceptance:', date: 'Within 15 working days of abstract submission' },
                { event: 'Full Paper Submission	Deadline:', date: '15 January 2026' },
                { event: 'Registration Deadline:', date: '15 January 2026' },
            ],
            speakers: [
                {
                    id: 1,
                    name: "Mr. Makis Asimakopoulos, Director International Olympic Academy",
                    about: "Mr. Makis Asimakopoulos is the Director of the International Olympic Academy, guiding its educational mission and global Olympic learning initiatives.",
                    img: "https://cdn.prod.website-files.com/670e864f22f28caa378487f2/670e864f22f28caa37849746_363501343_364681259262932_2813776722327982822_n.jpg"
                },
                {
                    id: 2,
                    name: "Ms. Alexandra Karaiskou, IOA President's Office, NOAs Relations",
                    about: "Ms. Alexandra Karaiskou heads the HOC President’s Office and oversees NOCs/NOAs relations while closely collaborating with the International Olympic Academy.",
                    img: "https://cdn.prod.website-files.com/670e864f22f28caa378487f2/670e864f22f28caa378489dd_Alexandra%20Karaiskou%20.jpg"
                },
                {
                    id: 3,
                    name: "Prof. Dr. Ravi Prakash Ranjan, Assistant Professor, Africa Business School ",
                    about: "Prof. Dr. Ravi Prakash Ranjan is an Assistant Professor of Business Analytics & AI at Africa Business School, specializing in data-driven decision-making and artificial intelligence in business.",
                    img: "https://media.licdn.com/dms/image/v2/D5603AQGEiVXBoQbjTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715592382605?e=2147483647&v=beta&t=rX2ZD-d0ato7DZOdf3FCHnamZ_D4rOShvR4KIcv-iXs"
                },
                {
                    id: 4,
                    name: "Mr. Rushdee Warley, High Performance Consultant",
                    about: "Rushdee Warley is a High Performance Consultant, specializing in optimizing elite performance through strategic training, leadership, and evidence-based performance systems.",
                    img: "https://media.licdn.com/dms/image/v2/D4D03AQE9Z4lIlYqrrA/profile-displayphoto-shrink_200_200/B4DZY9GXqXHIAY-/0/1744781802569?e=1770854400&v=beta&t=VOwfHDaSxkzfw81EoGqdknsfnc5RD0KAMo6neDeKb6w"
                },
                {
                    id: 5,
                    name: "Mr. Pradyut Voleti, Founder and Head Coach of Dribble Academy",
                    about: "Pradyut Voleti, Founder and Head Coach of Dribble Academy, is dedicated to developing skilled, confident footballers through structured training and passion for the game.",
                    img: "https://media.licdn.com/dms/image/v2/C4D03AQHP1v0g2dNsew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1644645267112?e=1770854400&v=beta&t=qRdsDZWnH1JgyR9bVy7jVNTG3VeBM5gua2hxPv3vijE"
                },
                {
                    id: 6,
                    name: "Dr. Usha Sujit Nair, Former Vice Chancellor, National Sports University",
                    about: "Dr. Usha Sujit Nair, Former Vice Chancellor of the National Sports University, is a respected academic leader in sports education and governance.",
                    img: "https://rru.ac.in/wp-content/uploads/2025/12/USNair.jpg"
                },
                {
                    id: 7,
                    name: "Mr. Grzegorz Botwina, Director, Polish Olympic Studies and Research Centre",
                    about: "Mr. Grzegorz Botwina is Director of the Polish Olympic Studies and Research Centre, focusing on research and development in Olympic education and policy.",
                    img: "https://sportacademy.com/wp-content/uploads/2024/09/1634903794601.jpeg"
                },
                {
                    id: 8,
                    name: "Prof. Wolfgang Maennig, Chair of Economic Policy, University of Hamburg",
                    about: "Prof. Wolfgang Maennig is Chair of Economic Policy at the University of Hamburg, specializing in the economics of sport and mega-events such as the Olympic Games.",
                    img: "https://assets.rrz.uni-hamburg.de/instance_assets/fakws/14447474/maennig-640x361-75e48055c7df6d3b79ce8663e6e7ae0301cfcc41.jpg"
                },
                {
                    id: 9,
                    name: "Mr. Tony Cunningham, Manager, Education (Policy and Research) WADA",
                    about: "Mr. Tony Cunningham serves as Senior Manager for Education Policy and Research at WADA, advancing global anti-doping education strategies.",
                    img: "https://media.licdn.com/dms/image/v2/D4E03AQGEt-QJfDcIzA/profile-displayphoto-shrink_400_400/B4EZbLGo6EHYAk-/0/1747164237885?e=1770249600&v=beta&t=pBgT2YBYvBgOZQ8jmgUpRdwK2vOio5D_ulzMPqPcujo"
                },
                {
                    id: 10,
                    name: "Dr Ankush Gupta, Senior Project Officer, National Anti-Doping Agency (NADA)",
                    about: "Dr. Ankush Gupta is a Senior Project Officer at the National Anti-Doping Agency (NADA), contributing to anti-doping initiatives and clean sport programs.",
                    img: "https://www.mjunction.in/wp-content/uploads/2020/09/Dummy.jpg"
                },
                {
                    id: 11,
                    name: "Prof. Yannis Pitsiladis, Distinguished professor at Hong Kong Baptist University",
                    about: "Prof. Yannis Pitsiladis is a distinguished professor at Hong Kong Baptist University, recognized for his research contributions in sports science and Olympic studies.",
                    img: "https://speh.hkbu.edu.hk/cache/img/ed72898b5b891ace11160bde5a5f7d1b.png"
                },
                {
                    id: 12,
                    name: "Dr. Rohit K. Thapa, Assistant Professor at the Symbiosis School of Sports",
                    about: "Dr. Rohit K. Thapa is an Assistant Professor at the Symbiosis School of Sports, specializing in sports education and academic excellence.",
                    img: 'https://rru.ac.in/wp-content/uploads/2021/12/pic-1.jpeg'
                },
                {
                    id: 13,
                    name: "Prof Dr Alka Beotra, Former Director of Anti-Doping Laboratories (Qatar & India)",
                    about: "Former Director of Anti-Doping Laboratories (Qatar & India), ex-Scientific Director of NDTL New Delhi, Professor of Practice/Eminence in Sports Science, and WADA–ISO certified international consultant.L",
                    img: 'https://media.licdn.com/dms/image/v2/D4D03AQHUeEME9KQ98w/profile-displayphoto-scale_200_200/B4DZmLIFUHGwAY-/0/1758975791608?e=1770854400&v=beta&t=7RgVFVzjNemqBqE5gVg7bwfPXa3hqsHpuFXSAYivYPQ'
                },
                {
                    id: 14,
                    name: "Mr. Alexey Slautin",
                    about: "Mr. Alexey Slautin leads the International Relations Department, coordinating global partnerships and Olympic-related international cooperation.",
                    img: "https://media.licdn.com/dms/image/v2/C4E03AQGOCi8fGxPpJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517242563489?e=1770249600&v=beta&t=qW-t4kSTx1RFj22zYjHktQr-cBK6cQDXRuXNk2EMScc"
                },
                {
                    id: 15,
                    name: "Prof. Dr. Stephan Wassong",
                    about: "Prof. Dr. Stephan Wassong leads the Institute of Sport History and directs the Olympic Studies Centre, promoting scholarship on Olympic heritage and education.",
                    img: "https://media.licdn.com/dms/image/v2/D4D22AQHewAVnBH4fyA/feedshare-shrink_800/feedshare-shrink_800/0/1693314425450?e=2147483647&v=beta&t=37RW1kRJrQ5vdyxZBwoqtXRPdMsZQzc2CGV8OxZJxKw"
                },
                {
                    id: 16,
                    name: "Mr. Wang Xinming, Minister-Counselor",
                    about: "Mr. Wang Xinming serves as Minister-Counselor, contributing to diplomatic engagement and international collaboration within the Olympic and sports sectors.",
                    img: "https://en.people.cn/NMediaFile/2019/0403/FOREIGN201904031634000527663791396.jpg"
                },
                {
                    id: 17,
                    name: "Mr. Anders Pettersson, Board Member, Brazilian Olympic Committee",
                    about: "Mr. Anders Pettersson is a Board Member of the Brazilian Olympic Committee and President of the Brazilian Snow Sports Federation, supporting winter sports development in Brazil.",
                    img: "https://media.licdn.com/dms/image/v2/C4D03AQGgLLd8Y_uXTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1543325756629?e=2147483647&v=beta&t=i6uGNhuZw7GgieV8pE2Tjlr47QCf4aifnXDA_np7jEo"
                },
                {
                    id: 18,
                    name: "Cedric Vanden Bogaerde, Executive Director (AISTS)",
                    about: "Cédric Vanden Bogaerde is the Executive Director of the International Academy of Sport Science and Technology (AISTS), leading its global sport management education and strategy efforts after a decade of strategic work with the International Olympic Committee",
                    img: "https://media.licdn.com/dms/image/v2/C4D03AQFOZrieHAx5lQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1594632976397?e=1770854400&v=beta&t=lelsF3CzgLqx5h2H-CD8M16e6WcXFrqhsGmaL0CFci4"
                },
                {
                    id: 19,
                    name: "Shri Adille Sumariwalla, Founder and Managing Director of InterSpace Communications Pvt. Ltd.",
                    about: "Adille J. Sumariwalla is the Founder and Managing Director of InterSpace Communications Pvt. Ltd. and serves as President of TERF, bringing visionary leadership at the intersection of sports, education, and strategic communications.",
                    img: "https://static.toiimg.com/thumb/msid-70393719,width-400,resizemode-4/70393719.jpg",
                },
                {
                    id: 20,
                    name: "Parth Goswami, Legal Head and Member - Disciplinary and Appeals Panel -@World Athletics",
                    about: "Parth Goswami is the Legal Head and Member of the Disciplinary and Appeals Panel at World Athletics, bringing legal expertise to sports governance.",
                    img: "https://media.licdn.com/dms/image/v2/D5603AQFK7v-S_auBTw/profile-displayphoto-scale_200_200/B56ZoqDPMrJkAY-/0/1761642084579?e=1770854400&v=beta&t=rYiSz4pM7a7DNjrApVhkk_j__uCi12KvLwkNMPy-Khc",
                },
                {
                    id: 18,
                    name: "Mr. Joseph Oluka, Assistant Administrator Technical at Uganda Olympic Committee",
                    about: "Mr. Joseph Oluka works as Assistant Administrator Technical at the Uganda Olympic Committee, supporting programs that strengthen Olympic sport development in Uganda.",
                    img: "https://nocuganda.org/wp-content/uploads/2025/11/Joseph.jpg"
                },
                {
                    id: 19,
                    name: "Mr. Arthur Gallois",
                    about: "Mr. Arthur Gallois represents the French Olympic Committee, contributing to its national and international Olympic initiatives.",
                    img: "https://media.licdn.com/dms/image/v2/D4E03AQGDtZPw-a6EGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687432072130?e=1770249600&v=beta&t=AOGsPVrX8AUtBSC3W039XF3jMeHdHEagppVqRwssHWU"
                },
                {
                    id: 20,
                    name: "Mr. Daniel Afrifa",
                    about: "Mr. Daniel Afrifa is affiliated with the Division of Sport Sciences at Stellenbosch University, contributing to research and teaching in sports science and performance.",
                    img:"https://www.exerciselabatsun.co.za/wp-content/uploads/2024/09/Daniel-150x150.jpg"
                },
                {
                    id: 21,
                    name: "Mr. Rodrigo Bravo Baeza, professor and researcher, Olympic Studies Centre at Escuela Nacional del Deporte University",
                    about: "Mr. Rodrigo Bravo Baeza is a professor and researcher representing the Olympic Studies Centre at Escuela Nacional del Deporte University in Cali, Colombia.",
                    img: "https://endeporte.edu.co/info/endeporte/media/galeria/thumbs/thgaleria_400X400_4785.webp"
                },
                {
                    id: 22,
                    name: "Ms. Tanvi Hubli, Researcher at The University of Edinburgh",
                    about: "Ms. Tanvi Hubli is a researcher at The University of Edinburgh, focusing on themes related to sport, society, and the Olympic Movement.",
                    img: "https://media.licdn.com/dms/image/v2/D4E03AQFqMS3x3Vwf3Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704564920961?e=1770249600&v=beta&t=y2wNjnVZvqO08s0k5ogJzOf4I_7RpuIFAceNGpUBAho"
                },
                {
                    id: 23,
                    name: "Mr. Carlos Quiroz, Vice-Principal and researcher at Escuela Nacional del Deporte University",
                    about: "Mr. Carlos Quiroz serves as Vice-Principal and researcher at Escuela Nacional del Deporte University in Cali, Colombia, contributing to academic and Olympic studies initiatives.",
                    img: "https://i1.rgstatic.net/ii/profile.image/394317303697412-1471023979458_Q512/Carlos-Quiroz-Mora.jpg"
                },
                {
                    id: 24,
                    name: "Ms. Elizaveta Zhuk",
                    about: "Ms. Elizaveta Zhuk holds a PhD from Paris-Saclay University and works as a visiting professor engaged in research and teaching related to sport and Olympic education.",
                    img: "https://media.licdn.com/dms/image/v2/C4E03AQG01MDXsAUSPw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1619526693481?e=1770249600&v=beta&t=JxSXLp0xnAg6nXLWdUZpu9oViVtJ0tVWON1uVaJOmnI"
                },
                {
                    id: 24,
                    name: "Mr. Chris Hadley-Hawley, Forming partnerships to deliver the best World Games in Perth, 2027",
                    about: "Chris Hadley-Hawley leads the development of strategic partnerships to support the successful delivery of the World Games, Perth 2027. He focuses on collaboration and long-term value to create a truly world-class global sporting event.",
                    img: "https://media.licdn.com/dms/image/v2/C5603AQHdIlQehHePHA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517345563351?e=1770854400&v=beta&t=DM1KJa7tM2ELQ3K6P2QGOC1afCVpZ7PfEl7eiKSD07Y"
                },
                {
                    id: 24,
                    name: "Ms. Ekaterina Lazareva, Third Secretary Culture, Education & Sports, Embassy of Russia in India",
                    about: "Ms. Ekaterina Lazareva is the Third Secretary for Culture, Education & Sports at the Embassy of Russia in India.",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvU8-LhpfZ5bHLPuI8YJzT9xNZzSYcHtWSag&s"
                },
                {
                    id: 24,
                    name: "Mr. Fred Quek, Technical Lead SEA Games Federation Office",
                    about: "Mr. Fred Quek is the Technical Lead at the SEA Games Federation Office.",
                    img: "https://media.licdn.com/dms/image/v2/D5603AQGKM3FdoTUafQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706100847207?e=1770854400&v=beta&t=lAXYw63FZWBB9kIVWfn4GS1Bus1F_qAJdLJMsRtXJx4"
                }
            ],
            sponsors: [
                {
                logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Ministry_of_Home_Affairs_India.svg',
                name: 'Ministry of Home Affairs India'
                },
                {
                logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Ministry_of_Youth_Affairs_and_Sports.svg',
                name: 'Ministry of Youth Affairs and Sports India'
                },
                {
                logo: 'https://nadaindia.yas.gov.in/wp-content/uploads/GOV-NADA-Logo_Revised-02-1024x433.png',
                name: 'National Anti Doping Agency India'
                },
                {
                logo: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Rashtriya_Raksha_University_logo.png',
                name: 'Rashtriya Raksha University'
                },
                {
                logo: 'https://rru.ac.in/wp-content/uploads/2022/04/4-scaled.jpg',
                name: 'School of Physical Education and Sports'
                },
                {
                logo: [GoBananas],
                name: 'Premium Sponsor'
                },
                {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpT3BEIkI-Pilx5K8VhsC2jow8L3bPL2nKbw&s',
                name: 'Banking Partner'
                },
                {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLjx2uZ6c0o3_gqRQPm4faf5nu6aRZznJVLW5DlO27-zf-NdBHIzyqZNC85ScQNyAmu8&usqp=CAU',
                name: 'Refreshment Partner'
                },
                {
                logo: 'https://companieslogo.com/img/orig/GTPL.NS_BIG-94b70da1.png?t=1720244492',
                name: 'TV Partner'
                },
                {
                logo: 'https://www.bookmyad.com/services/uploads/logos/2019/03/11/85d6b77336ff7b536a3d495791ba6147.jpg',
                name: 'Radio Partner'
                },
                {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzTpY39Fq8eUvCHPhKoYD4ncbOXiTozAj-A&s',
                name: 'Technology Partner'
                },
                {
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugFt2avPuqvkyfRSdiQCq97EycfgkBVs24g&s',
                name: 'Gifting Partner'
                },
                {
                logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/BankOfBarodaLogo.svg',
                name: 'Supporting Sponser'
                },
                {
                logo: 'https://yt3.googleusercontent.com/sAUzcsfr0JwUZurEmC3O1fCcDnS560CZt8_uYddbYlEoTs3Oyk-YNERBo_KnwxrXqYTTxfhR=s900-c-k-c0x00ffffff-no-rj',
                name: 'Supporting Sponser'
                },
            ],
            stats: [
                { label: 'No Of Abstract', value: '120' },
                { label: 'International And National Experts', value: '50' },
            ],
            abstractGuidelines: {
                formatRequirements: [
                    'Abstract should be between 150-250 words.',
                    'Use 12-point Times New Roman font.',
                    'Double-space all text.',
                    'Set 1-inch (2.54 cm) margins on all sides.',
                    'Include page number in the top-right header.',
                    'Center the word "Abstract" as the title (bold).',
                    'Text should be left-aligned and not indented.'
                ],
                contentStructure: [
                    {
                        heading: 'Introduction',
                        description: 'Begin with a brief introduction to the research problem. Clearly state the purpose and objectives of the study.'
                    },
                    {
                        heading: 'Methodology',
                        description: 'Describe the research design. Include information about participants, if applicable. Outline data collection methods and procedures. Mention analytical approaches used.'
                    },
                    {
                        heading: 'Results',
                        description: 'Present key findings concisely. Include statistical significance when relevant. Focus on main outcomes only.'
                    },
                    {
                        heading: 'Conclusions',
                        description: 'State primary conclusions. Address implications of findings. Avoid introducing new information.'
                    },
                    {
                        heading: 'Keywords',
                        description: 'Include 3-5 keywords. Place keywords on a new line below the abstract. Indent the first line of keywords. Begin with "Keywords:" (italicized).'
                    }
                ]
            },
            resources: {
              schedule: "https://drive.google.com/file/d/1_eGqtkwx0gCidaNvjMU_7OFQYeQRtym_/view?usp=sharing",
              brochure: "https://drive.google.com/file/d/1166eN6ZlTAL8r2vHmNToTwFrqkXvZb_I/view?usp=sharing",
              registrationLink: "https://forms.eduqfix.com/secolycn/add",
              googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSfsd7Tl_kZo8x_4oE_ZocDMyaC5T_AQswO1Hrl9WGv_0jXZyg/viewform?usp=header",
              faQ: "https://drive.google.com/file/d/1m1xHmHf20D3La7ZMw3ERuKzQIgdmIKfr/view?usp=sharing",
              guidlines: "https://drive.google.com/file/d/1J6qexrSRz2iMWlkcfEkLO69GZzRiR3Ph/view?usp=sharing",
              paperPresentation: "https://docs.google.com/presentation/d/15_AXdox-V61RCQBT8Ky0xQueT94hklN6/edit?usp=sharing&ouid=114727181775494699337&rtpof=true&sd=true",    
            },
            callForAbstract: {
                text: `BCORE cordially invites abstracts for presentation at its International Olympic Research Conference at Rashtriya Raksha University. Submissions addressing hosting and organizing, Olympic education, sustainable development, and technological innovation are particularly welcomed. Early career researchers are encouraged to participate.`,
                submissionEmail: 'olyresearchacademy.submissions@rru.ac.in',
                deadline: '31st December 2025',
            },
            Steps: [
                { event: 'Step 1', date: ' Submit the abstract' },
                { event: 'Step 2', date: 'Wait For confirmation' },
                { event: 'Step 3', date: 'Register to the Olympics conference' },
                { event: 'Step 4', date: 'Fill Google Form' },
            ],
            workshop: {
                background: IORC2,

                // Header / Partner Text
                partnerLine1: "BCORE partners with",
                partnerOrg: "NADA",
                conferenceName: "2nd International Olympic Research Conference",
                venue: "Rashtriya Raksha University",

                // Logos
                leftLogo: BcoreLogo,
                rightLogo: NadaLogo,

                // Workshop Title (broken for styling control)
                titleLine1: "ANTI-DOPING &",
                titleLine2: "RESEARCH",
                titleLine3: "METHODOLOGY",
                titleLine4: "WORKSHOP",

                // Dates
                dates: "28–29 Jan 2026",
            },
            accommodations: [
                {
                    name: 'Villa Accommodation, Near Rashtriya Raksha University (RRU), Good Times, Dahegam',
                    address: 'Good Times by Sangath IPL near Rashtriya Raksha University Lavad Dehgam',
                    contact: 'For Bookings Contact - +91 8175991401 | Mr. Sandeep Mishra',
                    image: 'https://goodtimesbysangathipl.com/wp-content/uploads/2022/04/gtl-2.png',
                    link: 'https://drive.google.com/file/d/1qDj5LrUmdUCwhBuNFhycqEtuEZki7ID1/view?usp=sharing',
                    info: 'Click on the Card To know more.'
                },
                {
                    name: 'Malhaar Resort, Dahegam',
                    address: 'Malhaar Resort, Uttam Dairy, Behind Dehgam Power Grid, Dahegam, Ahmedabad Gujarat, India.',
                    contact: 'For Bookings Contact - 7575806021 | Mr. Bahadur Singh',
                    image: 'https://r1imghtlak.mmtcdn.com/d8b02df056b711eeb25f0a58a9feac02.jpg',
                    link: 'https://www.makemytrip.com/hotels/malhaar_resorts-details-dahegam.html'
                },
                {
                    name: 'Hotel Neelkanth, Dahegam',
                    address: '5R64+56H, Ahmedabad - Modasa Rd, Vrundavan Society, Nehru Society, Dahegam, Gujarat 382305',
                    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwzehTUVaaMUho29NGWtSjgt7VnlkaQ01AMp8MeS_78pjtGCn0AH-_BEdYIzmOkrfafgOlWm3flqbjuxxkbw5z5Va3Y_cecbnQEbOG6PE8jriVGGXKCXeehAMAmSjF1K-Vjp18=s1360-w1360-h1020-rw',
                    link: ''
                },
                {
                    name: 'University Accomodation',
                    address: 'Rashtriya Raksha University, Lavad, Gandhinagar, Gujarat 382305',
                    image: 'https://rru.ac.in/wp-content/uploads/2022/08/6-scaled.jpg',
                    link: 'https://drive.google.com/file/d/14Y1rL6NImTpKrQ5b_9UpQuIShile6w-r/view?usp=sharing',
                    info: "Accommodation on a sharing basis inside the campus will be available. Please ensure that you book it in advance. Click on the Card To know more."
                },
            ],
            NearBytransportation: [
                {
                    name: 'Sardar Vallabhbhai Patel International Airport',
                    address: 'Hansol, Ahmedabad, Gujarat 380003',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/SVPI_Airport%2C_Ahmedabad.jpg',
                    link: 'https://www.adani.com/svpia-ahmedabad-airport'
                },
                {
                    name: 'Kalupur Railway Station',
                    address: 'Kapasia Bazar, Sakar Bazzar, Kalupur, Ahmedabad, Gujarat 380002',
                    image: 'https://static.gujaratsamachar.com/content_image/content_image_87011ab4-1387-4672-b3d0-c2160e24d0b1.jpeg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'Gandhinagar Capital',
                    address: 'Footover Bridge, Sector 13C, Sector 14, Gandhinagar, Gujarat 382016',
                    image: 'https://akm-img-a-in.tosshub.com/aajtak/images/assets/202107/gandhinagar-railway-station-night-view.jpg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'Geeta Mandir ST Bus Stand',
                    address: 'Gita Mandir, Ahmedabad, Gujarat 380001',
                    image: 'https://content.jdmagicbox.com/comp/ahmedabad/93/079p250393/catalogue/gujarat-state-road-transport-corporation-geeta-mandir-road-ahmedabad-st-bus-depot-2qkhhet.jpg',
                    link: 'https://gsrtc.in/site/'
                },
                {
                    name: 'Nandol Dehegam Railway Station',
                    address: 'Nandol Dehegam Railway Station, GIDC, Dahegam, Gujarat 382305',
                    image: 'https://i.ytimg.com/vi/urM6UASMP0g/maxresdefault.jpg',
                    link: 'https://www.irctc.co.in/nget/train-search'
                },
                {
                    name: 'G.S.R.T.C Bus Stand (Dahegam)',
                    address: 'G.S.R, 5RCC+69H T.C, BUS STAND, near AMBEDKAR STATUE, GIDC, Dahegam, Gujarat 382305',
                    image: 'https://www.mappls.com/place/KTQVC2_1665750425813_0.png',
                    link: 'https://gsrtc.in/site/'
                },
            ],
            videos: [
            {
                title: '2nd International Olympic Research Conference - Day 1',
                link: 'https://www.youtube.com/embed/p4kFi2wzMKI?si=lvCtlfmNl9dE5LKC',
                url: 'https://www.youtube.com/live/p4kFi2wzMKI?si=dUkhozRDPIEiZTs9'
            },
            {
                title: '2nd International Olympic Research Conference - Day 2',
                link: 'https://www.youtube.com/embed/1uZZwy0Kljk?si=U469uoLox7_oaNKK',
                url: 'https://www.youtube.com/live/1uZZwy0Kljk?si=V4EwdkHrv_AFpqsL'
            },
            {
                title: '2nd International Olympic Research Conference - Day 3',
                link: 'https://www.youtube.com/embed/lqWiXAgM4b0?si=Dt0mc_r1paPVO-uN',
                url: 'https://www.youtube.com/live/lqWiXAgM4b0?si=npN7sugNpFqdG_Oc'
            }
            ,
            {
                title: '2nd International Olympic Research Conference - Day 4',
                link: 'https://www.youtube.com/embed/1_KMNSLgn2c?si=0hImdCSv4yJpLzlZ',
                url: 'https://www.youtube.com/live/1_KMNSLgn2c?si=WBqBrTH4GUPU9ZNv'
            }
        ]        
        },
        {
            id: 4,
            type: "External"
        },
                {
            id: 5,
            type: "External"
        }

    ];
      
    

    const event = events.find((e) => e.id === parseInt(id)); // Find event by ID

     
//     const hasOnlyBasicInfo = !(
//     event?.collaboration?.length > 0 ||
//     event?.details?.length > 0 ||
//     event?.subpoints?.length > 0 ||
//     event?.guests?.length > 0 ||
//     event?.importantDates?.length > 0 ||
//     event?.schedule?.length > 0 ||
//     event?.callForAbstract ||
//     event?.abstractGuidelines ||
//     event?.Steps?.length > 0 ||
//     event?.speakers?.length > 0 ||
//     event?.partners?.length > 0 ||
//     event?.sponsors?.length > 0 ||
//     event?.organizingTeam?.length > 0 ||
//     event?.email ||
//     event?.Schedule ||
//     event?.brochure ||
//     event?.registrationLink ||
//     event?.googleform ||
//     event?.accommodations?.length > 0 ||
//     event?.NearBytransportation?.length > 0 ||
//     event?.qrCode
//   );

    // Utility: Check if event is in the future
    const isFutureEvent = (dateString) => {
    if (!dateString) return false;
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
    };


    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div>
        {(event.type === "External" && event.id === 4) && <BCORENightRunDetails />}
        {(event.type === "External" && event.id === 5) && <SafeSportEvent />}   

        {(event.type !== "External") && (<div className="event-details-page">
        <EventHeader  title={event?.name} date={event?.date} location={event?.place}/>

        {event?.collaboration?.length > 0 && (
        <section className="partners-section">
            <h2 className="partners-title">Collaboration</h2>
            <div className="partners-grid">
            {event.collaboration.map((partner, idx) => (
                <div className="partner-card" key={idx}>
                <p>{partner.name}</p>
                <img src={partner.logo} alt={partner.name} />
                </div>
            ))}
            </div>
        </section>
        )}

        {/* Royal Futuristic Stats Section */}
        {event?.stats?.length > 0 && (
        <section className="stats-royal-wrapper">
            <div className="stats-grid">
            {event.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                <div className="card-border-top"></div>
                <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <div className="stat-gold-line"></div>
                    <span className="stat-label">{stat.label}</span>
                </div>
                <div className="gold-corner"></div>
                </div>
            ))}
            </div>
        </section>
        )}

        {event?.subpoints?.length > 0 && <Highlights subpoints={event.subpoints} />}

        {/* Event Details Section */}
        {event?.details?.length > 0 && (
        <div className="detail-container">
            <h3>Event Details</h3>
            <ul>
            {event.details.map((detail, index) => (
                <li key={index}>
                <span>{detail}</span>
                </li>
            ))}
            </ul>
        </div>
        )}


        {event?.guests?.length > 0 && (
            <section className="chief-guests">
            <h2>Meet Our Guests</h2>
            <div className="chief-guests-grid">
                {event.guests.map((guest) => (
                <div className="guest-card" key={guest.id}>
                    <div className="guest-card-inner">
                    <div className="guest-card-front">
                        <img src={guest.img} alt={guest.name} />
                        <h3>{guest.name}</h3>
                    </div>
                    <div className="guest-card-back">
                        <p>{guest.about}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>
        )}

        {event?.importantDates?.length > 0 && (<ImportantDates importantDates={event.importantDates} />)}

        {event?.workshop && <WorkshopSection event={event.workshop} />}

        
        {event?.schedule?.length > 0 && (
            <div className="event-schedule">
                <h3>Schedule</h3>
                {event.schedule.map((daySchedule, dayIndex) => (
                    <div key={dayIndex} className="schedule-day">
                        <h4>{daySchedule.day} - {daySchedule.date}</h4>
                        <table className="schedule-table">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Session Type</th>
                                    <th>Topic/Activity</th>
                                    <th>Speakers/Experts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {daySchedule.sessions.map((session, sessionIndex) => (
                                    <tr key={sessionIndex}>
                                        <td>{session.time}</td>
                                        <td>{session.sessionType}</td>
                                        <td>{session.topic}</td>
                                        <td>{session.speakers}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        )}

        {event?.callForAbstract && (<CallForAbstract callForAbstract={event.callForAbstract} />)}
        
        {event?.Steps?.length > 0 && <StepsToRegister steps={event.Steps} />}


        {event?.abstractGuidelines && <AbstractGuidelines event={event} />}



        {event?.speakers?.length > 0 && (
            <section className="chief-guests">
            <h2>Speakers & Presenters</h2>
            <div className="chief-guests-grid">
                {event.speakers.map((speaker) => (
                <div className="guest-card" key={speaker.id}>
                    <div className="guest-card-inner">
                    <div className="guest-card-front">
                        <img src={speaker.img} alt={speaker.name} />
                        <h3>{speaker.name}</h3>
                    </div>
                    <div className="guest-card-back">
                        <p>{speaker.about}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>
        )}

        {event?.partners?.length > 0 && (
        <section className="partners-section">
            <h2 className="partners-title">Our Partners</h2>
            <div className="partners-grid">
            {event.partners.map((partner, index) => (
                <div className="partner-card" key={index}>
                <img src={partner.logo} alt={partner.name} />
                <p>{partner.name}</p>
                </div>
            ))}
            </div>
        </section>
        )}

        {/* Video Gallery Section */}
        {event?.videos?.length > 0 && (
        <section className="video-section">
            <div className="video-grid">
            {event.videos.map((video, index) => {
                // Handles both standard links and YouTube Shorts links for embedding
                const embedLink = video.link
                .replace("watch?v=", "embed/")
                .replace("shorts/", "embed/");
                
                return (
                <div className="video-card" key={index}>
                    <div className="video-container">
                    <iframe
                        src={embedLink}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                    <div className="video-info">
                    {/* Title matches the "title" key in your data list */}
                    <p className="video-title">{video.title}</p>
                    <a 
                        href={video.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="video-external-link"
                    >
                        Watch on YouTube
                    </a>
                    </div>
                </div>
                );
            })}
            </div>
        </section>
        )}


{event?.sponsors?.length > 0 && (
  <section className="nexus-container">
    <div className="nexus-bg-text">PARTNERS</div>
    
    <div className="nexus-header">
      <div className="glitch-wrapper">
        <h2 className="nexus-title" data-text="THE SYNDICATE">THE SYNDICATE</h2>
      </div>
      <div className="orbit-line"></div>
    </div>

    <div className="nexus-web">
    {event.sponsors.map((sponsor, index) => (
        <div 
        className="nexus-node" 
        key={index} 
        style={{ "--index": index }} /* Changed --i to --index to match your CSS */
        >
        <div className="node-inner">
            <div className="node-hex">
            <div className="hex-content">
                <img src={sponsor.logo} alt={sponsor.name} className="node-logo" />
            </div>
            <div className="hex-border"></div>
            </div>
            
            {/* Text is now inside node-inner so it floats and moves WITH the hex */}
            <div className="node-info">
            <span className="node-tag">{sponsor.category}</span> {/* Add category if available */}
            <p className="node-name">{sponsor.name}</p>
            </div>
        </div>
        <div className="node-flare"></div>
        </div>
    ))}
    </div>
  </section>
)}


        {event?.organizingTeam?.length > 0 && (
        <div className="organizing-team">
            <h3>Organizing Team</h3>
            {event.organizingTeam.map((group, index) => (
            <div key={index} className="team-group">
                <h4>{group.name}</h4>
                <ul>
                {group.members?.map((member, idx) => (
                    <li key={idx}>
                    {member.name} - {member.email}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        )}


                
        {/* Registration Queries Section */}
        {isFutureEvent(event?.date) && (event?.email || event?.schedule?.[event.schedule?.length - 1]?.email) && (
        <div className="additional-info">
            <div className="email-section">
            <h3>Registration Queries</h3>
            <p>
                <a
                href={`mailto:${event?.email || event?.schedule?.[event.schedule.length - 1]?.email}`}
                className="email-link"
                >
                {event?.email || event?.schedule?.[event.schedule.length - 1]?.email}
                </a>
            </p>
            </div>
        </div>
        )}

        {/* Resources Section (inline) */}
        {isFutureEvent(event?.date) && (
        (event?.Schedule || event?.brochure || event?.registrationLink || event?.googleform ||
            event?.schedule?.[event.schedule?.length - 1]?.Schedule ||
            event?.schedule?.[event.schedule?.length - 1]?.brochure ||
            event?.schedule?.[event.schedule?.length - 1]?.registrationLink ||
            event?.schedule?.[event.schedule?.length - 1]?.googleform) && <ResourcesSection resources={event?.resources}  />)}
        
        {/* Resources Section (inline) */}
        {(
        (event?.resources?.schedule ||
            event?.resources?.brochure ||
            event?.resources?.registrationLink ||
            event?.resources?.googleForm ||
            event?.resources?.faQ
            ) && <ResourcesSection resources={event?.resources}  />)}

        {event?.accommodations?.length > 0 && (
  <div className="accommodation-container">
    <h3>Accommodation Options</h3>
    <p><i>Please click on the sections below to view detailed information.</i></p>

    <div className="accommodation-items">
      {event.accommodations.map((accommodation, index) => (
        <a
          key={index}
          href={accommodation.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="accommodation-item"
          style={{ backgroundImage: `url(${accommodation.image})` }}
        >
          <div className="overlay">
            <h4>{accommodation.name}</h4>
            <p><strong>Address:</strong> {accommodation.address}</p>
            {accommodation.contact && (
              <p><strong>Contact:</strong> {accommodation.contact}</p>
            )}
            {accommodation.info && <p>{accommodation.info}</p>}
          </div>
        </a>
      ))}
    </div>
  </div>
)}


            {event?.NearBytransportation?.length > 0 && (
            <NearbyTransportation transportationData={event.NearBytransportation} />
            )}

             {/* Coming Soon Section */}
        {/* {hasOnlyBasicInfo && (
            <div className="coming-soon">
                <h3>✨ Coming Soon ✨</h3>
                <p>More details about this event will be available shortly.</p>
            </div>
            )} */}

       {event.id !== 4 && (
        <div className="map-section">
            <h3>Event Location</h3>
            <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1qBrfyqNsIAM85EshihXYSfOAKeDYrEA&ehbc=2E312F&noprof=1"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Event location"
            ></iframe>

        </div>
)}

        {event?.qrCode && (
            <div className="qr-section">
            <h3>Scan QR Code to Register</h3>
            <img src={event.qrCode} alt="QR Code to reach the event location" className="qr-code" />
            </div>
        )}
            
        </div>
        )}
        </div>
    );
};
