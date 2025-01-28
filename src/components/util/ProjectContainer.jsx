import { Card, CardMedia, menuItemClasses } from "@mui/material";
import "./ProjectContainer.css";
import SectionDivider from "./SectionDivider";

const projects = [
  {
    title: "Sizzler",
    description: `Spearheaded development of a full-stack mobile app offering a Tinder-inspired restaurant selection experience, 
      utilizing React Native, Express, and PostgreSQL with Supabase. Architected database schema, 
      designing scalable relational models to store user preferences and restaurant profiles. 
      Established a CI pipeline utilizing ESLint, Prettier, and Jest for code quality checks and automated unit testing.`,
    media: "./sizzle.png",
  },
  {
    title: "PopVia",
    description: `Published a suite of task management Chrome Extensions that prioritize user experience to 50+ active users. 
      Contributed to a team of 10+ developers, designers, and PMs as an engineer, driving the successful launch of PopVia.`,
    media: "./popvia.png",
  },
  {
    title: "Chick-fil-a POS System",
    description: `Architected a mock Chick-fil-a point of sales GUI with Java Swing and integrated PostgreSQL with JDBC API.
    Migrated the GUI to a modern web application with accessibility enhancements using React, Express, and Figma. 
    Embraced Agile/Scrum practices with a team of 5, adopting iterative development cycles and user feedback loops. 
    Utilized various APIs such as Google Oauth, Google Translate, Google Maps, and a Weather API.`,
    media: "./chickPOS5.png",
  },
];

const ProjectCard = (props) => {
  const { title, description, media } = props;
  return (
    <div className="project-tile">
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-desc">{description}</p>
      </div>
      <Card className="project-card">
        <CardMedia
          component="img"
          height="400"
          image={media}
          alt="ProjectImage"
        />
      </Card>
    </div>
  );
};

export const ProjectContainer = () => {
  return (
    <div>
      <SectionDivider title="Projects"></SectionDivider>
      <div className="projects-content">
        <div className="project-card-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              media={project.media}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};
