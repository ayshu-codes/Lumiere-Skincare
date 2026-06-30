import "./Home.css";
import homeimg from "../assets/home-img.png";
import Navbar from "./Navbar";
import Products from "./Products";


function Home() {
  return (
    
    <section className="hero-section" id="home"
    style={{backgroundImage: `url(${homeimg})`,}}>

      <Navbar />

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
          Thoughtfully crafted skincare that nourishes, hydrates, and reveals
          your natural radiance.
        </p>

        <button className="hero-btn">SHOP NOW</button>
      </div>

    </section>
  );
}

export default Home;