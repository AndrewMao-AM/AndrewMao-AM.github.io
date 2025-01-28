import "./header.css";
import SocialLinks from "./util/SocialLinks";

const Header = () => {
  return (
    <div className="header-content">
      {/* <img src="https://placehold.co/200x200" alt="" className="header-image" /> */}
      <div className="header-intro">
        <h1 className="header-title">Howdy! I'm Andrew</h1>
        <p>
          A full-stack developer designing practical and beautiful tools to
          simplify daily life.
        </p>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default Header;
