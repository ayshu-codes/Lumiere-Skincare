import homeimg from "../assets/homeimg.png";

function Home() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{
        backgroundImage: `url(${homeimg})`,
      }}
    >
      <div className="hero-content">
        <span className="hero-tagline">
          PURE INGREDIENTS. VISIBLE RESULTS.
        </span>

        <h2 className="hero-title">
          Glow naturally,
          <br />
          every day.
        </h2>

        <p className="hero-description">
          Thoughtfully crafted skincare that nourishes,
          hydrates, and reveals your natural radiance.
        </p>

        <a href="#products">
          <button className="hero-btn">
          SHOP NOW
        </button>
        </a>
        
      </div>
    </section>
  );
}

export default Home;