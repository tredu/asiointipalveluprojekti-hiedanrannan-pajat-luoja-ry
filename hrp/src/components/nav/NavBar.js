import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Logo from './pajat-logo.png';
import classnames from 'classnames';



export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
    render() {
        return (

            <div id="navbar" className={classnames("header-navbar", { "d-none": !this.state.visible})}>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" className="transBar">
            <div id="floatinglogo"><Navbar.Brand><Link to={"/"}><img src={Logo} className="img-responsive" id="paja-logo"/></Link></Navbar.Brand></div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link as={NavLink} to='/events'>Tapahtumat</Nav.Link>
            <Nav.Link as={NavLink} to='/artists'>Artistit</Nav.Link>
            <Nav.Link as={NavLink} to='/contact'>Yhteystiedot</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
  
        )
    }
}

