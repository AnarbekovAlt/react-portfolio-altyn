import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  const toRotate = ["Frontend Developer", "Web Developer"];
  const period = 2000; //How much time before each word

  const [loopNum, setLoopNum] = useState(0); //Which word is currently displayed
  const [isDeleting, setIsDeleting] = useState(false); //Word is being typed or being deleted
  const [text, setText] = useState(""); //Portion of the word being displayed
  const [delta, setDelta] = useState(300 - Math.random() * 100); //How fast one letter is typed after the other

  const tick = () => {
    let i = loopNum % toRotate.length; // i would be the index as to like from the array we're currently picking, and the reason is that loopNum is constantly increasing, but we don't have 4th element in toRotate, so we would like to go the first element again
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1); //This is future text to be updated
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && fullText === updatedText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={12} xl={8}>
            <div className="banner-text">
              <Col className="me-auto" xs={12} md={12} xl={12}>
                <div className="tagline">Welcome to my Portfolio!</div>
              </Col>
              <h1>
                Hi! I'm Altyn <br />
                <span className="wrap">{text}</span>
              </h1>
              <p>
                I'm passionate about cutting-edge, beautiful interfaces and
                intuitively implemented UX.
              </p>
              <button onClick={() => {}}>
                <a href="#connect">
                  <span>
                    Let's Connect! <ArrowRightCircle size={25} />
                  </span>
                </a>
              </button>
            </div>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
