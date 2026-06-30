import { useState } from "react";
import "./SkinQuiz.css";

const questions = [
  {
    question: "1. How does your skin feel after washing your face?",
    options: [
      { text: "Tight and dry", type: "Dry" },
      { text: "Fresh and comfortable", type: "Normal" },
      { text: "Oily within an hour", type: "Oily" },
      { text: "Dry in some places, oily in others", type: "Combination" },
      { text: "Red or irritated", type: "Sensitive" },
    ],
  },
  {
    question: "2. How often does your face become shiny?",
    options: [
      { text: "Rarely", type: "Dry" },
      { text: "Sometimes", type: "Normal" },
      { text: "Very often", type: "Oily" },
      { text: "Only T-zone", type: "Combination" },
      { text: "Never, but easily irritated", type: "Sensitive" },
    ],
  },
  {
    question: "3. How large are your pores?",
    options: [
      { text: "Almost invisible", type: "Dry" },
      { text: "Small", type: "Normal" },
      { text: "Large", type: "Oily" },
      { text: "Large on nose only", type: "Combination" },
      { text: "Normal but skin is sensitive", type: "Sensitive" },
    ],
  },
  {
    question: "4. How often do you get breakouts?",
    options: [
      { text: "Rarely", type: "Dry" },
      { text: "Occasionally", type: "Normal" },
      { text: "Frequently", type: "Oily" },
      { text: "Mostly on forehead & nose", type: "Combination" },
      { text: "Only after using products", type: "Sensitive" },
    ],
  },
  {
    question: "5. How does your skin react to new skincare products?",
    options: [
      { text: "Feels dry", type: "Dry" },
      { text: "No reaction", type: "Normal" },
      { text: "Feels greasy", type: "Oily" },
      { text: "Depends on the area", type: "Combination" },
      { text: "Burns or becomes red", type: "Sensitive" },
    ],
  },
];

const recommendations = {
  Dry: [
    "Hydrating Cleanser",
    "Hyaluronic Acid Serum",
    "Ceramide Moisturizer",
    "Cream Sunscreen",
  ],
  Oily: [
    "Gel Cleanser",
    "Niacinamide Serum",
    "Oil-Free Moisturizer",
    "Matte Sunscreen",
  ],
  Combination: [
    "Gentle Cleanser",
    "Vitamin C Serum",
    "Lightweight Moisturizer",
    "SPF 50 Sunscreen",
  ],
  Sensitive: [
    "Fragrance-Free Cleanser",
    "Aloe Vera Gel",
    "Ceramide Cream",
    "Mineral Sunscreen",
  ],
  Normal: [
    "Gentle Cleanser",
    "Vitamin C Serum",
    "Daily Moisturizer",
    "Broad Spectrum Sunscreen",
  ],
};

export default function SkinQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (index, value) => {
    setAnswers({
      ...answers,
      [index]: value,
    });
  };

  const calculateResult = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions.");
      return;
    }

    const count = {};

    Object.values(answers).forEach((type) => {
      count[type] = (count[type] || 0) + 1;
    });

    const skinType = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    setResult(skinType);
  };

  return (
    <section className="quiz-container">

  <div className="quiz-header">
    <p className="quiz-subtitle">PERSONALIZED SKIN ANALYSIS</p>

    <h1>Discover Your Skin Type</h1>
    <br />

    <p className="quiz-description">
      Answer five quick questions to identify your skin type and receive
      personalized skincare recommendations tailored to your unique skin
      needs. It only takes a minute!
    </p>
  </div>

      {questions.map((q, index) => (
        <div className="question-card" key={index}>

          <h3>{q.question}</h3>

          {q.options.map((option, i) => (
            <label key={i}>

              <input
                type="radio"
                name={`q${index}`}
                value={option.type}
                onChange={() => handleChange(index, option.type)}
              />

              {option.text}

            </label>
          ))}

        </div>
      ))}

      <button onClick={calculateResult}>
        Find My Skin Type
      </button>

      {result && (
        <div className="result">

          <h2>Your Skin Type: {result}</h2>

          <h3>Recommended Products</h3>

          <ul>
            {recommendations[result].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

        </div>
      )}

    </section>
  );
}