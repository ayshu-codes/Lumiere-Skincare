import "./Quiz.css";
import quizbanner from "../assets/quizbanner.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="quiz-hero" id="quiz" style={{backgroundImage: `url(${quizbanner})`,}} >
        
      <div className="quiz-content">
        {/* Left Content */}
        <div className="left">
          <p className="subtitle">NOT SURE WHAT YOUR SKIN NEEDS?</p>

          <h1>
            Find your perfect
            <br />
            skincare match
          </h1>

          <p className="description">
            Take our quick skin type quiz and discover
            <br />
            products that are right for you.
          </p>

          <button
            className="quiz-btn"
            onClick={() => navigate("/quiz")}
          >
            TAKE THE QUIZ
          </button>

      </div>

        {/* Middle Card */}
        <div className="feature-card">
          <div className="feature">
            <span className="icon">🕒</span>
            <span>Quick & Easy</span>
          </div>

          <div className="feature">
            <span className="icon">💧</span>
            <span>Personalized Results</span>
          </div>

          <div className="feature">
            <span className="icon">⭐</span>
            <span>Expert Recommended</span>
          </div>
        </div>

      </div>
    </section>
  );
}