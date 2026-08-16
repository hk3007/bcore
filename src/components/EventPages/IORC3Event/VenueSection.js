import React from "react";
import NearbyTransportation from "../../eventsdetails/NearbyTransportation";

const transportationData = [
  {
    name: "Sardar Vallabhbhai Patel International Airport",
    address: "Hansol, Ahmedabad, Gujarat 380003",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/SVPI_Airport%2C_Ahmedabad.jpg",
    link: "https://www.adani.com/svpia-ahmedabad-airport",
  },
  {
    name: "Kalupur Railway Station",
    address: "Kapasia Bazar, Kalupur, Ahmedabad, Gujarat 380002",
    image:
      "https://static.gujaratsamachar.com/content_image/content_image_87011ab4-1387-4672-b3d0-c2160e24d0b1.jpeg",
    link: "https://www.irctc.co.in/nget/train-search",
  },
  {
    name: "Gandhinagar Capital Railway Station",
    address: "Sector 14, Gandhinagar, Gujarat 382016",
    image:
      "https://akm-img-a-in.tosshub.com/aajtak/images/assets/202107/gandhinagar-railway-station-night-view.jpg",
    link: "https://www.irctc.co.in/nget/train-search",
  },
  {
    name: "Geeta Mandir ST Bus Stand",
    address: "Gita Mandir, Ahmedabad, Gujarat 380001",
    image:
      "https://content.jdmagicbox.com/comp/ahmedabad/93/079p250393/catalogue/gujarat-state-road-transport-corporation-geeta-mandir-road-ahmedabad-st-bus-depot-2qkhhet.jpg",
    link: "https://gsrtc.in/site/",
  },
];

export default function VenueSection() {
  return (
    <section className="irc-section" id="venue">
      <span className="irc-section__eyebrow">Venue</span>
      <h2 className="irc-section__title">Rashtriya Raksha University</h2>
      <div className="irc-section__body">
        <p>
          Rashtriya Raksha University, an Institution of National Importance under the
          Ministry of Home Affairs, Government of India, Gandhinagar, Gujarat. The
          campus sits within easy reach of Ahmedabad — a UNESCO World Heritage City and
          India's bid city for the 2036 Olympic Games and host of the 2029 World Police
          and Fire Games — giving international and out-of-state delegates convenient
          access to accommodation, travel and the city's growing sports infrastructure,
          including the Narendra Modi Cricket Stadium and the Sardar Patel Sports
          Enclave.
        </p>
        <p>
          Sponsored accommodation and local support are extended to OSRC, NOC and NOA
          delegates and foreign speakers, with nominal-cost lodging available for
          Indian participants.
        </p>
      </div>

      <div className="irc-map-wrap">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1qBrfyqNsIAM85EshihXYSfOAKeDYrEA&ehbc=2E312F&noprof=1"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Rashtriya Raksha University location"
        ></iframe>
      </div>

      <NearbyTransportation transportationData={transportationData} />
    </section>
  );
}
