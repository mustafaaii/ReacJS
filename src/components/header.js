import React from 'react'
import { BrowserRouter as Router,  Route, Link } from "react-router-dom";
import { Navbar, Nav,Container } from 'react-bootstrap'
import anasayfa from '../pages/anasayfa'
import hakkimizda from '../pages/hakkimizda'
import iletisim from '../pages/iletisim'
import '../assets/css/style.css'

export default function header() {
    return (
        <>
        <Router>
            <Navbar bg="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className="HeaderLink" to="/">Anasayfa</Link></Nav.Link>
                    <Nav.Link><Link className="HeaderLink" to="/hakkimizda">Hakkımızda</Link></Nav.Link>
                    <Nav.Link><Link className="HeaderLink" to="/iletisim">İletişim</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <Route exact path="/" component={anasayfa} />
            <Route path="/hakkimizda" component={hakkimizda} />
            <Route path="/iletisim" component={iletisim} />
        </Router>

        </>
    )
}
