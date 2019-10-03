import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1"><Link to={"/"}>HRP</Link></span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={"artists"}>Artistit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"events"}>Tapahtumat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"contact"}>Yhteystiedot</Link>
                        </li>
                        <li className="currentPage">
                            <h1 className="currentPageText">{this.props.title}</h1>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}
