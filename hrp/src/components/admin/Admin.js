import React, { Component } from 'react'
import { db, auth } from '../../firebase'
import AddArtist from './addArtist'
import AddEvent from './addEvent'
import EditEvent from './editEvent'
import EditArtist from './editArtist'
import AddCourse from './addCourse'
import EditCourse from './editCourse'
import { Route, Link, NavLink } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import './admin.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            secretWord: 'visiopro',
            events: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
                <div className="admin-panel">
                {this.state.value !== this.state.secretWord && 
                <div>
                    <h1>Kirjaudu</h1>
                    <input onChange={this.handleChange}></input>
                </div>
                }
                {this.state.value === this.state.secretWord &&
                <div className="admin-navbar">
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="transBar">
                        <Navbar.Brand>Hallinta</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavDropdown title="Artistit" id="basic-nav-dropdown">
                                <NavDropdown.Item className="transBar">
                                    <Nav.Link as={NavLink} to='/admin/addartist'>Lisää artisti</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link as={NavLink} to='/admin/editartist'>Muokkaa artistia</Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Tapahtumat" id="basic-nav-dropdown">
                                <NavDropdown.Item className="transBar">
                                    <Nav.Link as={NavLink} to='/admin/addevent'>Lisää tapahtuma</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link as={NavLink} to='/admin/editevent'>Muokkaa tapahtumaa</Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kurssit" id="basic-nav-dropdown">
                                <NavDropdown.Item className="transBar">
                                    <Nav.Link as={NavLink} to='/admin/addcourse'>Lisää kurssi</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Nav.Link as={NavLink} to='/admin/editcourse'>Muokkaa kurssia</Nav.Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div> }
                {this.state.value === this.state.secretWord &&
                <div className="adminPanel">
                    <Route path="/admin/addartist" component={AddArtist} />
                    <Route path="/admin/editartist" component={EditArtist} />

                    <Route path="/admin/addevent" component={AddEvent} />
                    <Route path="/admin/editevent" component={EditEvent} />

                    <Route path="/admin/addcourse" component={AddCourse} />
                    <Route path="/admin/editcourse" component={EditCourse} />
     
                </div>
                }
            </div>
        )
    }
}

export default Admin
