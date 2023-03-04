import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Preview" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-links">
            <a target="_blank" href={github}>
              - GitHub -
            </a>
            <a target="_blank" href={demo}>
              - Live Demo -
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
