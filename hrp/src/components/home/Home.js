import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FacebookProvider, Feed } from 'react-facebook'


export default class Home extends React.Component {
    render() {
    return (
        <div className="home">
            <div className="thumbnails">

                <div className="container">
                    <div className="row justify-content-center">
                        <div class="mb-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect">
                                {/* <img class="img-responsive" src={require('../../img/placeholder.jpg')} alt=""/> */}
                                <img class="img-responsive" src='https://firebasestorage.googleapis.com/v0/b/hrp-sivut.appspot.com/o/eventImages%2Ff894361b-5b97-4eb2-abbc-ac7c9a6065cc.jpg?alt=media&token=e9516a26-1798-4569-993b-afddd53c013e' alt=""/>
                                <div class="overlay">
                                <h2>Tapahtumat</h2>
                                <Link className="info" to={"events"}>Selaa Tapahtumia
                                </Link>
                                {/* <a class="info" href="#"></a> */}
        
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect">
                                {/* <img class="img-responsive" src={require('../../img/placeholder.jpg')} alt=""/> */}
                                <img class="img-responsive" src='https://firebasestorage.googleapis.com/v0/b/hrp-sivut.appspot.com/o/artistImages%2F7c3d8954-0b34-443c-91fa-033cdc5a3145.jpg?alt=media&token=9095ef98-bc7a-41fc-abc7-6cdecaa00a35' alt=""/>
                                <div class="overlay">
                                <h2>Artistit</h2>
                                <Link className="info" to={"artists"}>Selaa Artisteja
                                </Link>
                                {/* <a class="info" href="#"></a> */}
        
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect">
                                {/* <img class="img-responsive" src={require('../../img/placeholder.jpg')} alt=""/> */}
                                <img class="img-responsive" src="https://firebasestorage.googleapis.com/v0/b/hrp-sivut.appspot.com/o/eventImages%2F3fe66a16-5cf9-4b21-8dca-b350c7de21a2.JPG?alt=media&token=a29b171a-a02f-4943-8d25-02609f30ffe7" alt=""/>
                                <div class="overlay">
                                <h2>Yhteystiedot</h2>
                                <Link className="info" to={"contact"}>Hiedanrannan Pajan<br/> Yhteystiedot
                                </Link>
                                {/* <a class="info" href="#"></a> */}
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <figure className="figure">
                    <Link className="figure-caption" to={"events"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Tapahtumat"/></Link>
                    <figcaption><Link className="figure-caption text-white " to={"events"}>Tapahtumat</Link></figcaption>
                </figure>

                <figure className="figure">
                    <Link className="figure-caption" to={"artists"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Artistit"/></Link>
                    <figcaption><Link className="figure-caption text-white" to={"artists"}>Artistit</Link></figcaption>
                </figure>

                <figure className="figure">
                    <Link className="figure-caption" to={"contact"}><img id="thumbnail" src={require('../../img/placeholder.jpg')} className="figure-img img-fluid rounded" alt="Historia"/></Link>
                    <figcaption><Link className="figure-caption text-white" to={"contact"}>Yhteystiedot</Link></figcaption>
                </figure>  */}
            </div>
            <div className="container px-3 mb-2 text-white" id="about">
                <div className="row">
                    <div className="col-sm">
                        <h1>Hiedanrannan pajat</h1>
                        <p className="text-left">
                            Hiedanranta on historiallinen kartano- ja tehdasmiljöö täynnä värikästä kaupunkikulttuuria. Lielahden vanha teollisuusalue on ollut avoinna ihmisille, tapahtumille ja aktiiviselle toiminnalle vuodesta 2016 ja alueella vierailee vuosittain kymmeniä tuhansia ihmisiä. Hiedanrannassa voi nauttia monien yritysten ja toimijoiden tarjoamista palveluista tai tulla tekemään ja luomaan uutta itse. Hiedanrannan Paja on yksi alueen toimijoista.<br/><br/>
                            Hiedanrannan Paja on tamperelaisten käsityöläisten ja taiteilijoiden yhteisö. Pajan toiminnan ideana on edistää avointa käsityöläiskulttuuria ja tarjota kokemuksia sekä palveluita niin lähiseudun asukkaille kuin matkailijoille. Pajalta löydät muun muassa lasinpuhaltajan, sepän, muusikoita, kuvataiteilijoita, suutareita ja verhoilijoita. Pajan yhteisö on syntynyt hiljalleen eri alojen kädentaitajien muutettua toimintansa Hiedanrantaan.<br/><br/>
                            Pajan käsityöläiset avaavat ovensa yleisölle, pitävät työnäytöksiä ja pop-up -kahvilaa, kursseja, taidegalleriaa sekä järjestävät vaihtuvaa ohjelmaa pajalla ja sen ympäristössä. Tapahtumissa on mahdollista nähdä esimerkiksi lasinpuhaltaja, taidemaalari, verhoilija tai seppä työssään. Käsitöitä ja taidetta on tietysti mahdollista ostaa myös kotiinviemisiksi.<br/><br/>
                            Pajan ovet ovat aina avoinna yleisölle, vaikka kaikilla talon toimijoilla ei vakituisia aukioloaikoja olekaan.<br/><br/>
                            Tervetuloa tutustumaan Pajalaisten toimintaan - joko etukäteen sovitusti tai astumalla rohkeasti sisään!
                        </p>
                    </div>
                    <div className="fb-feed mr-2 mt-1">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiedanrannan.paja&tabs=timeline&width=320&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="320" height="500" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> 
                    </div>
                </div>
            </div>
        </div>
    )
}
}