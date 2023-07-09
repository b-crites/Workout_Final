import React from "react";

export default function MuscleCards() {
  const cardsData = [
    { id: 1, title: "", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
  ];
  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
