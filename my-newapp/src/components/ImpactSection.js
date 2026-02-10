import React from "react";
import "../styles/ImpactSection.css";

const cardsData = [
  {
    emoji: "💪",
    title: "Empowerment",
    description:
      "Nurture self-confidence, independence, and the ability to make informed life choices.",
  },
  {
    emoji: "💻",
    title: "Literacy & Digital Skills",
    description:
      "Promote reading, writing, and IT skills to expand knowledge and future opportunities.",
  },
  {
    emoji: "🌾",
    title: "Agri-Entrepreneurship",
    description:
      "Sustainable farming, value-addition, and entrepreneurship for economic independence.",
  },
  {
    emoji: "🌿",
    title: "Well-being & Awareness",
    description:
      "Foster health, well-being, and awareness of sustainable practices in communities.",
  },
];

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        {/* Left Column: Heading & CTA */}
        <div className="left-column">
          <h2 className="vision-title">
            Ensuring women and girls have the opportunity to thrive.
          </h2>
          <button className="donate-button">Join Us</button>
        </div>

        {/* Right Column: 2x2 Grid */}
        <div className="right-column">
          {cardsData.map((card, index) => (
            <div className="impact-item" key={index}>
              <div className="impact-emoji-wrapper">
                <span className="impact-emoji">{card.emoji}</span>
              </div>
              <div className="impact-text">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;