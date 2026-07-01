import { useState } from "react";

import cleanser from "../assets/cleanser.jpeg";
import serum from "../assets/serum.jpeg";
import moisturizer from "../assets/moisturizer.jpeg";
import sunscreen from "../assets/sunscreen.jpeg";
import lotion from "../assets/lotion.jpeg";
import lipbalm from "../assets/lipbalm.jpeg";
import aloevera from "../assets/aloevera.jpeg";
import bodysunscreen from "../assets/bodysunscreen.jpeg";
import bodywash from "../assets/bodywash.jpeg";
import toner from "../assets/toner.jpeg";
import facemask from "../assets/facemask.jpeg";
import facepack from "../assets/facepack.jpeg";

const products = [
  {
    id: 1,
    image: cleanser,
    title: "Hydrating Cleanser",
    description: "Gentle & refreshing daily cleanse",
    price: "$24.00",
  },
  {
    id: 2,
    image: serum,
    title: "Vitamin C Serum",
    description: "Brightens & evens skin tone",
    price: "$36.00",
  },
  {
    id: 3,
    image: moisturizer,
    title: "Daily Moisturizer",
    description: "Hydrates & strengthens barrier",
    price: "$28.00",
  },
  {
    id: 4,
    image: sunscreen,
    title: "Mineral Sunscreen",
    description: "Broad spectrum SPF 50",
    price: "$26.00",
  },
  {
    id: 5,
    image: lotion,
    title: "Nourishing Body Lotion",
    description: "Deep nourishment for soft skin",
    price: "$26.00",
  },
  {
    id: 6,
    image: lipbalm,
    title: "Hydrating Lip Balm",
    description: "Repairs and protects dry lips",
    price: "$26.00",
  },
  {
    id: 7,
    image: aloevera,
    title: "Aloe Vera Gel",
    description: "Soothes and hydrates irritated skin",
    price: "$26.00",
  },
  {
    id: 8,
    image: bodysunscreen,
    title: "Body Sunscreen",
    description: "Broad spectrum SPF 50+ protection",
    price: "$26.00",
  },
  {
    id: 9,
    image: bodywash,
    title: "Refreshing Body Wash",
    description: "Gently cleanses and refreshes skin",
    price: "$26.00",
  },
  {
    id: 10,
    image: toner,
    title: "Radiance Toner",
    description: "Balances and tightens pores",
    price: "$26.00",
  },
  {
    id: 11,
    image: facepack,
    title: "Purifying Face Pack",
    description: "Detoxifies and brightens the skin",
    price: "$26.00",
  },
  {
    id: 12,
    image: facemask,
    title: "Illuminating FaceMak",
    description: "Instant moisture and glow",
    price: "$26.00",
  },
];

function Products() {
  const [showMore, setShowMore] = useState(false);

  const visibleProducts = showMore ? products : products.slice(0, 4);
  return (
    <section className="products-section" id="products">
      <p className="sub-heading">FEATURED PRODUCTS</p>

      <h2 className="main-heading">Our Top Picks</h2>

      <div className="products-grid">
        {visibleProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="product-info">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="product-bottom">
                <span>{item.price}</span>

                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
  <div className="more-container">
    <button
      className="more-btn"
      onClick={() => setShowMore(true)}
    >
      More
    </button>
  </div>
)}

    </section>
  );
}

export default Products;