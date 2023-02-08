import React, { useCallback, useContext } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import jsonfil from '../assets/particles.json'
import ThemeContext from './Context/ThemeContext' 

const Home = () => {
  const customInit = useCallback(async (engine) => { await loadFull(engine);  },[]);
  const getTheme = useContext(ThemeContext);
  const themeMode = getTheme.theme
  
  return (
    <section id="Home" className={`homeSection vh-100 flex-column d-flex align-items-center justify-content-center ${themeMode}`}>      
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="10" xl="7">
            <h1>
              Hi, I am <span className="text-primary">Rahul Patel</span>
            </h1>
            <p className="mt-2">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <span>
              <Stack direction="horizontal" gap={4} className="justify-content-center h2">
                <a href="https://n">
                  <i className="lni lni-facebook-oval"></i>
                </a>
                <a href="https://n">
                  <i className="lni lni-twitter-original"></i>
                </a>
                <a href="https://n">
                  <i className="lni lni-youtube"></i>
                </a>
              </Stack>
            </span>
          </Col>
        </Row>
      </Container>
      <Particles options={jsonfil} init={customInit} />
    </section>
  );
};

export default Home;
