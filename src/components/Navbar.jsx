import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 className="nav-title">AM</h1>
      </div>
      <div className="navlinks-container">
        <a className="navlink" href="#about-me">
          About
        </a>
        <a className="navlink" href="#experience">
          Experience
        </a>
        <a className="navlink" href="#projects">
          Projects
        </a>
        <a className="navlink" href="#footer">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
