import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';



export default class NavBar extends React.Component {
    render() {
        return (
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <span className="navbar-brand mb-0 h1"><Link to={"/"}>HRP</Link></span>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul className="navbar-nav">
            //             <li className="nav-item">
            //                 <Link className="nav-link" activeClassName="active" to={"artists"}>Artistit</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link className="nav-link" activeClassName="active" to={"events"}>Tapahtumat</Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link className="nav-link" activeClassName="active" to={"contact"}>Yhteystiedot</Link>
            //             </li>
            //             {/* <li className="currentPage">
            //                 <h1 className="currentPageText">{this.props.title}</h1>
            //             </li> */}
            //         </ul>
            //     </div>

            // </nav>
            <Navbar collapseOnSelect={true} expand="md" bg="dark" variant="dark">
            <Navbar.Brand><Link to={"/"}>HRP</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={NavLink} to='/artists'>Artistit</Nav.Link>
                <Nav.Link as={NavLink} to='/events'>Tapahtumat</Nav.Link>
                <Nav.Link as={NavLink} to='/contact'>Yhteystiedot</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
