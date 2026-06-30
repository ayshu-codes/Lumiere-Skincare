import "./Navbar.css";

function Navbar(){
    return(
         <header className="navbar">
            <div className="logo">
                LUMIÈRE
            </div>

            <nav className="nav-links">
                <a href="#home">Home</a> 
                <a href="#products">Products</a>
                <a href="#quiz">Quiz</a>
                <a href="#ingredients">Ingredients</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
export default Navbar; 