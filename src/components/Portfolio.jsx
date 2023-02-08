import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import portfolioImg from '../assets/portfolio-image-1.jpg'

const Portfolio = () => {
  
  return (
    <section id="Portfolio" className="portfolioSection panel panelPadding">
      <Container fluid="md">
        <div className="panelTitle">
          <h2>Portfolio</h2><span>Portfolio</span>
        </div>
        <Row xs={1} sm={2} md={2} lg={2} xl={3} className="g-4">
        <Col>
            <Card className="shadow-sm">
              <div className='position-relative'>
                <Card.Img variant="top" src={portfolioImg} />
                <div className='cardHover'>
                  <a href='/'><i className="lni lni-zoom-in"></i></a>
                  <a href='/'><i className="lni lni-link"></i></a>
                </div>
              </div>
              <Card.Body>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <div className='position-relative'>
                <Card.Img variant="top" src={portfolioImg} />
                <div className='cardHover'>
                  <a href='/'><i className="lni lni-zoom-in"></i></a>
                  <a href='/'><i className="lni lni-link"></i></a>
                </div>
              </div>
              <Card.Body>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <div className='position-relative'>
                <Card.Img variant="top" src={portfolioImg} />
                <div className='cardHover'>
                  <a href='/'><i className="lni lni-zoom-in"></i></a>
                  <a href='/'><i className="lni lni-link"></i></a>
                </div>
              </div>
              <Card.Body>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <div className='position-relative'>
                <Card.Img variant="top" src={portfolioImg} />
                <div className='cardHover'>
                  <a href='/'><i className="lni lni-zoom-in"></i></a>
                  <a href='/'><i className="lni lni-link"></i></a>
                </div>
              </div>
              <Card.Body>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <div className='position-relative'>
                <Card.Img variant="top" src={portfolioImg} />
                <div className='cardHover'>
                  <a href='/'><i className="lni lni-zoom-in"></i></a>
                  <a href='/'><i className="lni lni-link"></i></a>
                </div>
              </div>
              <Card.Body>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <div className='position-relative'>
                <Card.Img variant="top" src={portfolioImg} />
                <div className='cardHover'>
                  <a href='/'><i className="lni lni-zoom-in"></i></a>
                  <a href='/'><i className="lni lni-link"></i></a>
                </div>
              </div>
              <Card.Body>
              <Card.Title className="fw-bold">Web Design</Card.Title>
              <Card.Text>Lorem ipsum dolor sit</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Portfolio
