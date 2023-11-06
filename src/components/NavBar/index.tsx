import ubitsLogo from "../../assets/Ubits-logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input type="checkbox" name="" id="checkbox" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sellers">Shop</a>
          </li>
          <li>
            <a href="#news">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="logo">
          <img src={ubitsLogo} alt="" style={{ width: "165px" }} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
