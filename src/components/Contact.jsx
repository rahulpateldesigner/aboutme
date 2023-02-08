import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  
  return (
    <section id="About" className="contactSection panel panelPadding">
      <Container>
        <div className="panelTitle">
          <h2>Contact Us</h2>
          <span>Contact Us</span>
        </div>
        <Row className="justify-content-between g-xl-0">
          <Col xl="5" lg="6" className="mb-5">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Label>*Name</Form.Label>
                <Form.Control
                  size="lg"
                  required
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>*Email address</Form.Label>
                <Form.Control
                  size="lg"
                  required
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicSubject">
                <Form.Label>*Subject Line</Form.Label>
                <Form.Control
                  size="lg"
                  required
                  type="text"
                  placeholder="Enter Mail Subject Line"
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>*Message</Form.Label>
                <Form.Control as="textarea" required rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Mail
              </Button>
            </Form>
          </Col>
          <Col xl="5" lg="6" className="pt-xl-4 pt-lg-4">
            <Card className="mb-3">
              <Card.Body>
                <Row className="g-4">
                  <Col sm="auto">
                    <i className="lni lni-phone-set h3"></i>
                  </Col>
                  <Col>
                    <strong>Phone:</strong>
                    <p>+91 9662942796</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Row className="g-4">
                  <Col sm="auto">
                    <i className="lni lni-inbox h3"></i>
                  </Col>
                  <Col>
                    <strong>Email:</strong>
                    <p>
                      <a href="mailto:rahul1121991@gmail.com">
                        rahul1121991@gmail.com
                      </a>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <Row className="g-4">
                  <Col sm="auto">
                    <i className="lni lni-money-location h3"></i>
                  </Col>
                  <Col>
                    <strong>Address:</strong>
                    <p>
                      B-102, Sweta Avenue, Opp ICB Park, New SG Road, Gota,
                      Ahmedabad, Gujarat, India. 382481
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
