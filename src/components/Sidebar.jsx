import React, { useState, useContext } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import brandimg from "../assets/brand-image.png";
import ThemeContext from "./Context/ThemeContext";

const Sidebar = () => {
  const [navshow, setnavShow] = useState(false);
  const handleClose = () => setnavShow(false);
  const handleShow = () => setnavShow(true);
  
  
//console.log(theme)
  return (
    <div>
    <div className="mobileMenuIcon" onClick={handleShow}><i className="lni lni-list"></i></div>    
    <Offcanvas show={navshow} onHide={handleClose} className="sidebar d-flex flex-column justify-content-between text-center" scroll={true}>
    <Offcanvas.Header className="text-center" closeButton><Offcanvas.Title><strong>Hi, I am <span className="text-primary">Rahul Patel</span></strong></Offcanvas.Title></Offcanvas.Header>
      <Offcanvas.Body className="p-0"><SidebarContent handleClose={handleClose} /></Offcanvas.Body>
    </Offcanvas>
    <section className="sidebar sidebar-desktop fixed-top h-100 d-flex flex-column justify-content-between text-center"><SidebarContent /></section>    
    </div>
  );
};
const SidebarContent = ({handleClose}) => {
  const getTheme = useContext(ThemeContext);
  const themeMode = getTheme.theme
  return (
    <div className={`d-flex flex-column justify-content-between h-100 h-100 ${themeMode}`}>
      <header>
        <Link to="/about" className="brandImg">
          <img src={brandimg} alt="main" />
        </Link>
      </header>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} onClick={handleClose} to="/"><span>Home</span></Nav.Link>
        <Nav.Link as={NavLink} onClick={handleClose} to="/about"><span>About</span></Nav.Link>
        <Nav.Link as={NavLink} onClick={handleClose} to="/portfolio"><span>Portfolio</span></Nav.Link>
        <Nav.Link as={NavLink} onClick={handleClose} to="/blog"><span>Blog</span></Nav.Link>
        <Nav.Link as={NavLink} onClick={handleClose} to="/contact"><span>Contact</span></Nav.Link>
      </Nav>      
      <footer className="p-3"><small>© 2022 RahulPractice</small></footer>
      </div>
  )
}


export default Sidebar;