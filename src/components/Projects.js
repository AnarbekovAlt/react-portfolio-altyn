import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/law-firm-react-edited.JPG";
import projImg2 from "../assets/img/github-search-js.jpg";
import projImg3 from "../assets/img/task-scheduler-react.jpg";
import projImg4 from "../assets/img/car-detection.jpg";
import projImg5 from "../assets/img/english-classes.jpg";
import projImg6 from "../assets/img/cash-register2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Law Firm Landing",
      description: "Tyepscript & React, Tailiwind",
      imgUrl: projImg1,
      link: "https://github.com/AnarbekovAlt/law-firm-react-ts",
    },
    {
      title: "Search Github Users",
      description: "Vanilla JS",
      imgUrl: projImg2,
      link: "https://github.com/AnarbekovAlt/search-github-users",
    },
    {
      title: "Task Scheduler",
      description: "React, Tailwind",
      imgUrl: projImg3,
      link: "https://github.com/AnarbekovAlt/React-task-scheduler",
    },
    {
      title: "Car Detection",
      description: "Python, YOLOV3",
      imgUrl: projImg4,
      link: "https://github.com/AnarbekovAlt/Traffic-analysis",
    },
    {
      title: "English School",
      description: "HTML, CSS, Bootstrap",
      imgUrl: projImg5,
      link: "https://github.com/AnarbekovAlt/law-firm-react-ts",
    },
    {
      title: "Cash Register Landing",
      description: "HTML, CSS, Bootstrap",
      imgUrl: projImg6,
      link: "https://github.com/AnarbekovAlt/online-cash-register",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
