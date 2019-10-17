import React, { Component } from 'react'
import { db } from '../../firebase'
import AddArtist from './addArtist'
import AddEvent from './addEvent'
import EditEvent from './editEvent'
import EditArtist from './editArtist'
import ImageUp from './ImageUp'
import { Route, Link, NavLink } from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import './admin.css'

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            secretWord: 'visiopro',
            events: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     db.collection("events")
    //         .get()
    //         .then(querySnapshot => {
    //             const data = querySnapshot.docs.map(doc => doc.data());
    //             const id = querySnapshot.docs.map(doc => doc.id);
                
    //             const addId = (data, id) => {
    //                 data.forEach(r => r.docName = id[data.indexOf(r)]);
    //                 return data;
    //             }
    //             addId(data, id);
                
    //             console.log(data);
                
    //             this.setState({ events: data });
    //         });
    // }

    handleChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div className="admin-panel">
                <div className="admin-navbar">
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="transBar">
                        <Navbar.Brand>Hallintapaneeli</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
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
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="adminPanel">
                    <Route path="/admin/addartist" component={AddArtist} />
                    <Route path="/admin/editartist" component={EditArtist} />
                    <Route path="/admin/addevent" component={AddEvent} />
                    <Route path="/admin/editevent" component={EditEvent} />


                    {/* <Link className="nav-link" activeClassName="active" to={"/admin/addartist"}>Lisää Artisti</Link>
                    <Link className="nav-link" activeClassName="active" to={"/admin/editartist"}>Muokkaa Artistia</Link>
                    <Link className="nav-link" activeClassName="active" to={"/admin/addevent"}>Lisää Tapahtuma</Link>
                    <Link className="nav-link" activeClassName="active" to={"/admin/editevent"}>Muokkaa Tapahtumia</Link>
                    <Route path="/admin/addartist" component={AddArtist} />
                    <Route path="/admin/editartist" component={EditArtist} />
                    <Route path="/admin/addevent" component={AddEvent} />
                    <Route path="/admin/editevent" component={EditEvent} /> */}
                </div>
            </div>
        )
    }
}
