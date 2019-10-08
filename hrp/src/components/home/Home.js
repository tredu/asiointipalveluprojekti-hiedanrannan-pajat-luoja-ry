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
                    <h1>Hiedanrannan Pajat</h1>
                </div>
                <div className="aboutContent">
                    <p className="text-left">
                     Hiedanranta on historiallinen kartano- ja tehdasmiljöö täynnä värikästä kaupunkikulttuuria. Lielahden vanha teollisuusalue on ollut avoinna ihmisille, tapahtumille ja aktiiviselle toiminnalle vuodesta 2016 ja alueella vierailee vuosittain kymmeniä tuhansia ihmisiä. Hiedanrannassa voi nauttia monien yritysten ja toimijoiden tarjoamista palveluista tai tulla tekemään ja luomaan uutta itse. Hiedanrannan Paja on yksi alueen toimijoista.<br/><br/>
                     Hiedanrannan Paja on tamperelaisten käsityöläisten ja taiteilijoiden yhteisö. Pajan toiminnan ideana on edistää avointa käsityöläiskulttuuria ja tarjota kokemuksia sekä palveluita niin lähiseudun asukkaille kuin matkailijoille. Pajalta löydät muun muassa lasinpuhaltajan, sepän, muusikoita, kuvataiteilijoita, suutareita ja verhoilijoita. Pajan yhteisö on syntynyt hiljalleen eri alojen kädentaitajien muutettua toimintansa Hiedanrantaan.<br/><br/>
                     Pajan käsityöläiset avaavat ovensa yleisölle, pitävät työnäytöksiä ja pop-up -kahvilaa, kursseja, taidegalleriaa sekä järjestävät vaihtuvaa ohjelmaa pajalla ja sen ympäristössä. Tapahtumissa on mahdollista nähdä esimerkiksi lasinpuhaltaja, taidemaalari, verhoilija tai seppä työssään. Käsitöitä ja taidetta on tietysti mahdollista ostaa myös kotiinviemisiksi.<br/><br/>
                     Pajan ovet ovat aina avoinna yleisölle, vaikka kaikilla talon toimijoilla ei vakituisia aukioloaikoja olekaan.<br/><br/>
                     Tervetuloa tutustumaan Pajalaisten toimintaan - joko etukäteen sovitusti tai astumalla rohkeasti sisään!
                    </p>
                </div>
            </div>
        </div>
    )
}
}