import "./SectionDivider.css";

const SectionDivider = (props) => {
  const { title } = props;
  return (
    <div className="divider-container">
      {title && <h1 className="section-title">{title}</h1>}
      <hr className="line-divider"></hr>
    </div>
  );
};

export default SectionDivider;
