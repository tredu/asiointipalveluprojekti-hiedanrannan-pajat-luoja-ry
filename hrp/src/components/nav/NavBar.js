import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
                </ul>
            </div>
        </nav>
    )
}

export default NavBar