import SectionDivider from "./util/SectionDivider";
import "./About.css";

const About = () => {
  return (
    <div id="about-me">
      <SectionDivider title="About"></SectionDivider>
      <div className="section-content">
        <img
          src="./profHeadshot.jpeg"
          alt="profile-picture"
          className="image"
        />
        <div className="section-description">
          <p className="p-text">
            Hi! My name is Andrew. I am a graduating senior at Texas A&M
            University pursuing a major in Computer Science and a minor in
            Statistics. Over the past four years, I've had the privilege of
            honing my skills through impactful internships and projects at
            companies like Comcast and Publicis Sapient, where I worked on
            diverse technologies, including React, Spring Boot, gRPC, and
            PostgreSQL.
          </p>
          <p className="p-text">
            In addition to my work as a developer, I'm passionate about
            fostering learning and collaboration in my community. Serving as a
            Teaching Assistant for Texas A&M Computer Science Department, I
            foster a supportive learning environment for over 900+ students. My
            passion for teaching extends to my role as a Workshops Officer for
            the Aggie Coding Club, where I organize engaging technical workshops
            and connect students with industry leaders.
          </p>
          <p className="p-text">
            Outside of computer science, I enjoy playing in the Texas A&M
            Trombone Choir, composing music, and staying active through tennis
            and pickleball.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
