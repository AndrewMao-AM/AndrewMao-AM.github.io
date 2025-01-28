import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import "./MenuSelection.css";

const experiences = [
  {
    title: "Undergraduate Teaching Assistant",
    location: "Texas A&M University",
    date: "August 2024 - Present",
    description: `Teaches ”CSCE 120 - Intro Program Design & Concepts” curriculum: C++ fundamentals, OOP, 
      and dynamic memory. Works with a team of 30+ TAs and 8 professors to foster an effective 
      learning environment for 900+ students. Conducts and reviews weekly programming assignments 
      for clarity and alignment with learning outcomes.
      `,
  },
  {
    title: "Software Engineer Intern",
    date: "May 2024 - August 2024",
    location: "Comcast",
    description: `Collaborated with a team of 12 engineers and with various engineers 
      in Beijing to enhance an advertisement revenue management web platform. 
      Worked closely with Product Managers and designers to align technical solutions 
      with business objectives. Programmed key frontend features and backend APIs using React, 
      Go, and gRPC. Improved frontend unit and e2e test coverage by 5% using Vitest, 
      React Testing Library, and Playwright. Automated mock data generation processes, 
      enabling frontend development to proceed independently of backend services. 
      Worked within an Agile software development environment that utilizes Docker, 
      Github, a peer reviewing process, and Jenkins for building and deploying microservices 
      and micro-frontends. 
      `,
  },
  {
    title: "Software Engineer Intern",
    date: "June 2023 - August 2023",
    location: "Publicis Sapient",
    description: `Developed a web application with React and Spring Boot that streamlined advertisement management workflows. 
      Built out Rest API backend endpoints to connect with MongoDB, Google Cloud Storage, and ChatGPT. 
      Integrated 500,000+ web scraped product entries into ChatGPT using LangChain for data-aware ad recommendations. 
      Collaborated with a cross-functional team of 9 developers in an Agile/Scrum environment across 6 one-week sprints. 
      Deployed with Docker and Google Cloud Run.
      `,
  },
  {
    title: "Project Manager Intern",
    date: "July 2022 - August 2022",
    location: "MathWorks",
    description: `Researched and developed an application of machine learning for motor control within the mining industry. 
      Led a team of 5, organized weekly meetings and goals, and collaborated with an industry mentor from Mathworks to help guide our project. 
      Engineered a machine learning model for predictive maintenance within the mining industry using Simulink/Matlab.
      `,
  },
];

const TabContent = ({ title, description, time, location }) => {
  return (
    <div className="tab-content">
      <h2 className="tab-content-title">{title}</h2>
      <div className="tab-time-location">
        <p>{location}</p>
        <hr className="divider"></hr>
        <p>{time}</p>
      </div>
      <p className="tab-content-desc">{description}</p>
    </div>
  );
};

export default function MenuSelection() {
  return (
    <Tabs defaultValue={0} className="tabs-container">
      <TabsList className="tabs-list">
        <Tab value={0}>Texas A&M University</Tab>
        <Tab value={1}>Comcast</Tab>
        <Tab value={2}>Publicis Sapient</Tab>
        <Tab value={3}>MathWorks</Tab>
      </TabsList>
      {experiences.map((experience, index) => {
        return (
          <TabPanel value={index} className="tab-content">
            <TabContent
              title={experience.title}
              description={experience.description}
              time={experience.date}
              location={experience.location}
            />
          </TabPanel>
        );
      })}
    </Tabs>
  );
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)(
  ({ theme }) => `
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 100;
  height: 64px;
  background-color: #151517;
  width: 100%;
  padding: 10px 20px;
  border: none;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${grey[900]} !important; /* Ensures the hover effect only applies to this tab */
  }

  &.${tabClasses.selected} {
    background-color: ${grey[900]};
    color: #fff;};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
);

const TabPanel = styled(BaseTabPanel)(
  () => `
  width: inherit;
  padding: 16px;
  color: #FFFFFF;
  border-radius: 12px;
  opacity: 1;
  background: #151517;
  border: 2px solid ${grey[900]};
  transition: opacity 0.5s ease-in-out;
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 300px;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 2px solid ${grey[900]};
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: space-between center;
  & > :first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & > :last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  `
);
