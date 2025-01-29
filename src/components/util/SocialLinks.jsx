import { SocialIcon } from "react-social-icons";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <SocialIcon
        className="s-icon"
        network="github"
        url="https://github.com/AndrewMao-AM"
        bgColor="#1C2025"
      />
      <SocialIcon
        className="s-icon"
        network="linkedin"
        url="https://www.linkedin.com/in/andrewmao25/"
        bgColor="#1C2025"
      />
      <SocialIcon
        className="s-icon"
        network="email"
        bgColor="#1C2025"
        url="mailto:andrewmao@tamu.edu"
      />
    </div>
  );
};

export default SocialLinks;
