import SectionDivider from "./util/SectionDivider";
import SocialLinks from "./util/SocialLinks";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-content">
      <SocialLinks></SocialLinks>
      <p className="email-contact">Email me at andrewmao@tamu.edu</p>
    </div>
  );
};

export default Footer;
