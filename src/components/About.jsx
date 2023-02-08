import React, { useContext } from "react";
import { Button, Card, Col, Container, Figure, Row } from "react-bootstrap";
import aboutImg from "../assets/about-image.png";
import Slider from "react-slick";
import ThemeContext from "./Context/ThemeContext";

const About = () => {
  const getTheme = useContext(ThemeContext);
  const themeMode = getTheme.theme

  const sliderControl = {
    dots: true,
    arrows:false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1}},
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1}},
        { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1}},
      ]
  };

  return (<>
    <section id="About" className={`aboutSection panel panelPadding ${themeMode}`}>
      <Container fluid="md">
        <div className="panelTitle">
          <h2>ABOUT ME</h2><span>ABOUT ME</span>
        </div>
        <Row className="align-items-center justify-content-center">
          <Col lg="6" md="12">
          <Figure className="hover-zoom">
            <Figure.Image src={aboutImg} alt="about" />
            </Figure>
          </Col>
          <Col lg="6" md="12">
            <h3 className="fw-bold">
              I am <span className="text-primary">Rahul Patel</span>
            </h3>
            <p>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <ul className="unstyled">
              <li>
                <strong>Full Name</strong>Rahul Daljibhai Patel
              </li>
              <li>
                <strong>Age</strong>32
              </li>
              <li>
                <strong>Nationality</strong>Indian
              </li>
              <li>
                <strong>Languages</strong>English, Hindi, Gujarati
              </li>
              <li>
                <strong>Address</strong>B-102, Sweta Avenue, Opp ICB Park, New
                SG Road, Gota, Ahmedabad, Gujarat, India. 382481
              </li>
              <li>
                <strong>Freelance</strong>Available
              </li>
            </ul>
            <Button variant="dark" size="lg">
              {" "}
              <i className="lni lni-download"></i> Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="Service" className="serviceSection panel panelPadding">
      <Container  fluid="md">
        <div className="panelTitle">
          <h2>Service</h2><span>Service</span>
        </div>
        <Row className="justify-content-center g-3">
          <Col lg="4" md="12">
            <Card className="shadow-sm">
              <Card.Body className="p-4">
              <i className="lni lni-brush h3"></i>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card className="shadow-sm">
            <Card.Body className="p-4">
            <i className="lni lni-code h3"></i>
              <Card.Title className="fw-bold">Web Development</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" md="12">
            <Card className="shadow-sm">
            <Card.Body className="p-4">
            <i className="lni lni-bug h3"></i>
              <Card.Title className="fw-bold">Bug Fixing</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="Review" className="reviewSection panel panelPadding">
      <Container  fluid="md">
        <div className="panelTitle">
          <h2>Review</h2><span>Review</span>
        </div>
        <Slider {...sliderControl}>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>
          </div>
          <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>
          </div>
          <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>
          </div>
          <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>
          </div>
          <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>
          </div>
          <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>
          </div>
        </Slider>
      </Container>
    </section>
    </>
  );
};

export default About;
