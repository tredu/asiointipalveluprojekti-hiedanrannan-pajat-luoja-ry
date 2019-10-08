import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../nav/NavBar';


export default class Home extends React.Component {
    render() {
        const title ="Etusivu";
    return (
        <div className="home">
            {/* <NavBar title={title}/> */}
            <h1 className="homeHeader">Header</h1>
            <div className="thumbnails">
                <figure className="figure">
                    <Link className="figure-caption" to={"events"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Tapahtumat"/></Link>
                    <figcaption><Link className="figure-caption" to={"events"}>Tapahtumat</Link></figcaption>
                </figure>

                <figure className="figure">
                    <Link className="figure-caption" to={"artists"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Artistit"/></Link>
                    <figcaption><Link className="figure-caption" to={"artists"}>Artistit</Link></figcaption>
                </figure>

                {/* <figure className="figure">
                    <Link className="figure-caption" to={"history"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Historia"/></Link>
                    <figcaption><Link className="figure-caption" to={"history"}>Historia</Link></figcaption>
                </figure> */}
            </div>
            <div className="about">
                <div className="aboutHeader">
                    <h1> About</h1>
                </div>
                <div classNAme="aboutContent">
                    <p classNAme="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}
}