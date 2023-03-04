import { Container, Row, Col, Tab } from "react-bootstrap";
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
      github: "https://github.com/AnarbekovAlt/law-firm-react-ts",
      demo: "https://react-ts-law-firm.web.app/",
    },
    {
      title: "Search Github Users",
      description: "Vanilla JS",
      imgUrl: projImg2,
      github: "https://github.com/AnarbekovAlt/search-github-users",
      demo: "https://delicate-kitsune-a1eae5.netlify.app/",
    },
    {
      title: "Task Scheduler",
      description: "React, Tailwind",
      imgUrl: projImg3,
      github: "https://github.com/AnarbekovAlt/React-task-scheduler",
      demo: "https://react-task-scheduler-demo.netlify.app/",
    },
    {
      title: "Car Detection",
      description: "Python, YOLOV3",
      imgUrl: projImg4,
      github: "https://github.com/AnarbekovAlt/Traffic-analysis",
      demo: "#",
    },
    {
      title: "English School",
      description: "HTML, CSS, Bootstrap",
      imgUrl: projImg5,
      github: "https://github.com/AnarbekovAlt/law-firm-react-ts",
      demo: "https://astonishing-cheesecake-429d7e.netlify.app/",
    },
    {
      title: "Cash Register Landing",
      description: "HTML, CSS, Bootstrap",
      imgUrl: projImg6,
      github: "https://github.com/AnarbekovAlt/online-cash-register",
      demo: "#",
    },
  ];

  return (
    <section className="project" id="projects">
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      ></img>
    </section>
  );
};
