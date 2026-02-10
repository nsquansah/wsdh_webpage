import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../styles/InitiativeCards.css";
import { FaShareAlt } from "react-icons/fa";

const cardsData = [
  {
    title: "Girls in Tech Program",
    desc: "Training young girls in digital skills, coding and online safety.",
    img: "/images/project-momentum.jpg" // Replace with actual path
  },
  {
    title: "Women Agribusiness",
    desc: "Seedlings, tools and market access for rural women farmers. ",
    img: "/images/chess-slums.jpg"
  },
  {
    title: "Literacy for All",
    desc: "Community reading clubs and after-school lessons .",
    img: "/images/click4change.jpg"
  },

  {
    title: "Reproductive Health Awareness",
    desc: "Reproductive health education for adolescent girls.",
    img: "/images/click4change.jpg"

  },

  {
    title: "Entrepreneurship Hub",
    desc: "Business and product formulation training",
    img: "/images/click4change.jpg"

  }
];

const InitiativeCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -350, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="carousel-section">
      <div className="carousel-intro">
        <h2 className="main-title">Our Initiatives</h2>
        <p className="intro-right">
At Well Skills Development Hub, we break down the technological and literacy challenges that hinder marginalized youth from achieving their full potential. We give a new generation the tools they need to take control of their lives and rewrite stories through training and exposure to the real world.        </p>
      </div>

      <div className="marquee-container">
        {/* Left Navigation Arrow */}
        <button className="nav-btn left" onClick={() => scroll('left')}>
          <FaArrowLeft />
        </button>
        
        <div className="marquee-track" ref={scrollRef}>
          {cardsData.map((card, index) => (
            <div className="initiative-card" key={index}>
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-image" />
                {/* Overlay arrow as seen in the image */}
                <div className="image-action-btn">
            
                  <FaShareAlt className="share-icon" />
                </div>
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p className="desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button className="nav-btn right" onClick={() => scroll('right')}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default InitiativeCarousel;