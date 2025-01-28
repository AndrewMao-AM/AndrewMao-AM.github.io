import SectionDivider from "./util/SectionDivider";
import MenuSelection from "./util/MenuSelection";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <SectionDivider title="Experience"></SectionDivider>
      <div className="section-content">
        <MenuSelection></MenuSelection>
      </div>
    </div>
  );
};

export default Experience;
