import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import './assets/css/responsive.scss';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useState } from 'react';
import {ThemeState} from "./components/Context/ThemeContext";
import ChangeThemeSwitch from './components/ChangeThemeSwitch';


function App() {  
  const [progress, setProgress] = useState(0); 

  
  //const wemodeChange = (e)=>{ if(!e.target.checked){ setThemeMode('dark')}else{ setThemeMode('light')}}
  
  
  const setProgressBar = (num)=>  { setProgress(num) }
  useEffect(()=>{
    setProgressBar()
  },[])
  
  return (
  <>      
    <ThemeState>    
    <LoadingBar height={5} color="transparent" className='bg-danger' progress={progress}  />
    <div className="mainLayout">
    
      <Container fluid className='g-0'>
          <ChangeThemeSwitch />
        <Row className='g-0'>
        <Col md="auto" className='animate-transition sidebarPanel'><Sidebar/></Col>
        <Col className='contentWrap'>
          <Routes>
              <Route key="/" path='/' element={<Home />} />
              <Route key="/about" path='/about' element={<About />} />
              <Route key="/portfolio" path='/portfolio' element={<Portfolio />} />
              <Route key="/blog" path='/blog' element={<Blog setProgressBar={setProgressBar} />} />
              <Route key="/contact" path='/contact' element={<Contact />} />
           </Routes>            
        </Col>
        </Row>
      </Container>
      
    
    </div>
      </ThemeState>
    </>
  );
}

export default App;
