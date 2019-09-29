import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home">
            <h1>Etusivu</h1>
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

                <figure className="figure">
                    <Link className="figure-caption" to={"history"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Historia"/></Link>
                    <figcaption><Link className="figure-caption" to={"history"}>Historia</Link></figcaption>
                </figure>
            </div>
            <div className="about">
                <h1 className="aboutHeader"> About</h1>
                <p classNAme="aboutContent">Tähän tulee tietoja ja mielenkiintoista tekstiä :D</p>
            </div>
        </div>
    )
}

export default Home;