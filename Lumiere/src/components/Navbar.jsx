import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LUMIÈRE</div>

      <ul className="nav-links">
        <li><a to="/#home">Home</a></li>
        <li><a href="/#products">Products</a></li>
        <li><a href="/#quiz">Quiz</a></li>
        <li><a href="/#ingredients">Ingredients</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;