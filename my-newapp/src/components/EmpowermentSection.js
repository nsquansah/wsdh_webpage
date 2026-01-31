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
    emoji: "📚💻",
    title: "Literacy & Digital Skills",
    description:
      "Promote reading, writing, and IT skills to expand knowledge and future opportunities.",
  },
  {
    emoji: "🌾🛠️",
    title: "Agriculture & Entrepreneurship",
    description:
      "Develop practical farming, value-addition, and entrepreneurial skills to drive economic independence.",
  },
  {
    emoji: "🌿❤️",
    title: "Well-being & Awareness",
    description:
      "Foster health, well-being, and awareness of sustainable practices in communities.",
  },
];

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        {/* Left Column */}
        <div className="left-column">
          <h2 className="vision-title">
            Ensuring women and girls have the opportunity to thrive.
          </h2>
          {/* Donate Button */}
          <button className="donate-button">Donate</button>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {cardsData.map((card, index) => (
            <div className="impact-card" key={index}>
              <div className="card-emoji">{card.emoji}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
