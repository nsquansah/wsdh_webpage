import React from "react";
import { FaShareAlt } from "react-icons/fa";
import "../styles/InitiativeCards.css";

const cards = [
  { title: "Girls in Tech Program", desc: "Training young girls in digital skills, coding and online safety." },
  { title: "Women Agribusiness", desc: "Seedlings, tools and market access for rural women farmers." },
  { title: "Literacy for All", desc: "Community reading clubs and after-school lessons." },
  { title: "Health Awareness", desc: "Reproductive health education for adolescent girls." },
  { title: "Entrepreneurship Hub", desc: "Business and product formulation training." },
];

const InitiativeCarousel = () => {
  const infiniteCards = [...cards, ...cards];

  const handleShare = (card) => {
    const shareUrl = window.location.href;
    const shareText = `Check out this initiative: ${card.title}`;

    // Priority 1: Native Share (Works on Mobile/Safari)
    if (navigator.share) {
      navigator.share({
        title: card.title,
        text: shareText,
        url: shareUrl,
      }).catch(console.error);
    } else {
      // Priority 2: Fallback (Open WhatsApp as an example)
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="carousel-section">
      <div className="carousel-intro">
        <div className="intro-left">
          <span className="eyebrow"></span>
          <h2 className="main-title">OUR INITIATIVES</h2>
        </div>
        <p className="intro-right">
          Impactful programs reaching across women and girls in communities.
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {infiniteCards.map((card, i) => (
            <div 
              className={`initiative-card ${i % 2 !== 0 ? "offset-down" : ""}`} 
              key={i}
            >
              <div className="fake-image">IMAGE</div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p className="desc">{card.desc}</p>
                <div className="card-footer">
                  <button className="share-btn" onClick={() => handleShare(card)}>
                    <FaShareAlt className="share-icon" /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativeCarousel;