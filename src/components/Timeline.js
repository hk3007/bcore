import React, { useRef, useEffect, useState } from "react";
import "./Timeline.css";

const timelineData = [
  {
    date: "776 BC",
    title: "First Ancient Olympics",
    description:
      "The first recorded Olympic Games are held in Olympia, Greece, as part of a religious festival honoring Zeus.",
    detail:
      "These games included running, wrestling, and chariot racing, and became central to Greek culture and politics.",
  },
  {
    date: "AD 393",
    title: "End of Ancient Olympics",
    description:
      "Roman Emperor Theodosius I bans pagan festivals, ending the Olympic Games.",
    detail:
      "This ban reflected Christianity’s rise as the dominant religion in the Roman Empire.",
  },
  {
    date: "1850",
    title: "Wenlock Olympian Games",
    description:
      "Dr. William Penny Brookes founds the Wenlock Olympian Games in England.",
    detail:
      "These games became a key inspiration for the revival of the modern Olympics.",
  },
  {
    date: "1896",
    title: "First Modern Olympics",
    description:
      "Athens hosts the first modern Olympic Games, with 241 male athletes from 14 nations.",
    detail:
      "Events included athletics, cycling, fencing, gymnastics, shooting, swimming, tennis, weightlifting, and wrestling.",
  },
  {
    date: "1924",
    title: "First Winter Olympics",
    description:
      "Chamonix, France hosts the first official Winter Olympic Games.",
    detail:
      "It featured skiing, skating, bobsleigh, and ice hockey, marking the expansion beyond summer sports.",
  },
  {
    date: "1960",
    title: "First Televised Olympics",
    description:
      "The Rome Games are the first Olympics fully broadcast on television.",
    detail:
      "It transformed the Olympics into a truly global spectacle with millions of viewers.",
  },
  {
    date: "1980",
    title: "Moscow Olympics Boycott",
    description:
      "The United States and allies boycott the Moscow Olympics in protest of the Soviet invasion of Afghanistan.",
    detail:
      "Despite the boycott, 80 nations still participated in the Games.",
  },
  {
    date: "2000",
    title: "Sydney Olympics",
    description:
      "Sydney hosts one of the most successful Olympics ever.",
    detail:
      "10,651 athletes from 199 nations participated, remembered for its excellent organization and global unity.",
  },
  {
    date: "2021",
    title: "Tokyo 2020 (Held in 2021)",
    description:
      "The Tokyo Olympics are postponed due to COVID-19 and held without spectators.",
    detail:
      "New sports like skateboarding, sport climbing, surfing, and karate debuted.",
  },
  {
    date: "2022",
    title: "Beijing 2022 Winter Olympics",
    description:
      "Beijing becomes the first city to host both Summer and Winter Olympics.",
    detail:
      "The Olympic flame was placed inside a snowflake-shaped cauldron, symbolizing unity.",
  },
  {
    date: "2024",
    title: "Paris 2024 Summer Olympics",
    description:
      "Paris hosts the Summer Olympics, 100 years after last hosting in 1924.",
    detail:
      "Debuts included Breaking (breakdancing), Formula Kite, and Kayak Cross; gender equality reached a record high.",
  },
  {
    date: "2026",
    title: "Milano-Cortina 2026 Winter Olympics",
    description:
      "The Winter Games will be held across Milan and Cortina, Italy.",
    detail:
      "Ski mountaineering will debut as a new Olympic sport, emphasizing gender balance.",
  },
  {
    date: "2028",
    title: "Los Angeles 2028 Summer Olympics",
    description:
      "Los Angeles will host the Summer Olympics for the third time (1932, 1984, 2028).",
    detail:
      "The Games will reuse existing venues and focus on sustainability and community legacy.",
  },
  {
    date: "2032",
    title: "Brisbane 2032 Summer Olympics",
    description:
      "Brisbane, Australia will host the Summer Olympics.",
    detail:
      "This will be the third time Australia hosts, after Melbourne 1956 and Sydney 2000.",
  },
];


const Timeline = () => {
  const timelineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile: auto-change index
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % timelineData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Desktop: auto-scroll per card
  useEffect(() => {
    if (!isMobile && timelineRef.current) {
      const timeline = timelineRef.current;
      let index = 0;

      const interval = setInterval(() => {
        index = (index + 1) % timelineData.length;
        const cardWidth = timeline.firstChild.offsetWidth + 20; // width + margin
        timeline.scrollTo({
          left: cardWidth * index,
          behavior: "smooth",
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="timeline-section py-5">
      <h1 className="title text-center mb-5">OLYMPIC TIMELINE</h1>
        {isMobile ? (
        <div className="timeline-mobile">
            <div className="timeline-item active">
            <div className="timeline-date">{timelineData[currentIndex].date}</div>
            <div className="timeline-content">
                <h3>{timelineData[currentIndex].title}</h3>
                <p>{timelineData[currentIndex].description}</p>
            </div>
            <div className="timeline-detail">{timelineData[currentIndex].detail}</div>
            </div>
        </div>
        ) : (
        <div className="timeline" ref={timelineRef}>
            {timelineData.map((event, index) => (
            <div key={index} className="timeline-item">
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                </div>
                <div className="timeline-detail">{event.detail}</div>
            </div>
            ))}
        </div>
        )}
    </div>
  );
};

export default Timeline;
