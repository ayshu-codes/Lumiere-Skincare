import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Quiz from "./components/Quiz";
import Ingredients from "./components/Ingredients";
import Footer from "./components/Footer";
import SkinQuiz from "./components/SkinQuiz";
import Form from "./components/Form";

function HomePage() {
  return (
    <main
      style={{
        background: "#faf8f5",
        minHeight: "100vh",
      }}
    >
      <Home />
      <Products />
      <Quiz />
      <Ingredients />
      <Form/>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "65px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<SkinQuiz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;