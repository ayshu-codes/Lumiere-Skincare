import { useState } from "react";
import "./Ingredients.css";

import hyaluronic from "../assets/hyaluronic.jpeg";
import niacinamide from "../assets/niacinamide.jpeg";
import ceramides from "../assets/ceramides.jpeg";
import glycolic from "../assets/glycolic.jpeg";
import kojic from "../assets/kojic.jpeg";
import vitaminc from "../assets/vitaminc.jpeg";
import alpha from "../assets/alpha.jpeg";
import salicylic from "../assets/salicylic.jpeg";

export default function Ingredients() {
  const [showMore, setShowMore] = useState(false);

  const ingredients = [
    {
      title: "Hyaluronic Acid",
      desc: "Deeply hydrates and plumps the skin.",
      image: hyaluronic,
    },
    {
      title: "Niacinamide",
      desc: "Brightens, balances and refines pores.",
      image: niacinamide,
    },
    {
      title: "Ceramides",
      desc: "Strengthen the skin barrier and lock in moisture.",
      image: ceramides,
    },
    {
      title: "Glycolic Acid",
      desc: "Exfoliates dead skin cells for smoother skin.",
      image: glycolic,
    },
    {
      title: "Kojic Acid",
      desc: "Helps reduce pigmentation and dark spots.",
      image: kojic,
    },
    {
      title: "Vitamin C",
      desc: "Boosts radiance and protects against free radicals.",
      image: vitaminc,
    },
    {
      title: "Alpha Arbutin",
      desc: "Fades acne marks and evens skin tone.",
      image: alpha,
    },
    {
      title: "Salicylic Acid",
      desc: "Unclogs pores and fights acne effectively.",
      image: salicylic,
    },
  ];

  const visibleItems = showMore ? ingredients : ingredients.slice(0, 3);

  return (
    <section className="ingredients" id="ingredients">
      <p className="subtitle">INGREDIENT SPOTLIGHT</p>

      <h2>Powered by Nature</h2>

      <div className="ingredient-grid">
        {visibleItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {!showMore && (
        <button
          className="more-btn"
          onClick={() => setShowMore(true)}
        >
          More
        </button>
      )}
    </section>
  );
}