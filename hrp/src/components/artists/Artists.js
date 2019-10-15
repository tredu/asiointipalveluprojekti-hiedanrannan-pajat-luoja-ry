import React, {Component} from 'react';
import './Artists.css'
import { db } from '../../firebase';
import { SocialIcon } from 'react-social-icons';
import Card from 'react-bootstrap/Card'
import { CardColumns, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

// icons
import { MdHome, MdPhone} from 'react-icons/md'

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            showPopup: false,
            which: ''
        };

    }

    componentDidMount() {
        db.collection("artists")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                const id = querySnapshot.docs.map(doc => doc.id);
                
                const addId = (data, id) => {
                    data.forEach(r => r.docName = id[data.indexOf(r)]);
                    return data;
                }
                addId(data, id);
                
                console.log(data);
                
                this.setState({ artists: data });
            });
    }

    togglePopup = (which) => {
        this.setState({
            showPopup: !this.state.showPopup,
            which: which
        });
    }

    closePopup = () => {
        this.setState({
            which: ''
        })
    }

        render() {
            const { artists } = this.state;

            return (
            <div className="artistRoot">
                <div className="container align-items-center">
                        <CardColumns>
                            {artists.map((artist,idx) => artist.live === "true" ? (
                                <Card border="dark" className="transparent-card text-white">
                                    {artist.imageURL ?
                                        <Card.Img variant="top" src={artist.imageURL} onError={(e) => { e.target.onerror = null; e.target.src=require('../../img/placeholder.jpg');}} /> :
                                        <Card.Img variant="top" src={require('../../img/placeholder.jpg')} />
                                    }
                                    <Card.Title>{artist.name}</Card.Title>
                                    <Card.Body>
                                        {/* <Card.Text>{(artist.description.length > 180) ? (artist.description.substr(0,179) + "...") : artist.description}</Card.Text> */}
                                        <Card.Text>
                                            {(artist.description.length > 180) ?  (artist.description.substr(0,179) + "...") : artist.description}
                                        </Card.Text>

                                        <Card.Text>
                                            <Button variant="primary" onClick={this.togglePopup.bind(this, idx)}>Lue Lisää</Button>

                                            <Modal
                                                show={this.state.which === idx}
                                                onHide={this.closePopup.bind(this)}
                                                // size="lg"
                                                dialogClassName="modal-90w"
                                                aria-labelledby="vcenter"
                                                // scrollable
                                                centered
                                            >
                                                <Modal.Header className="bg-dark text-white text-center" closeButton>
                                                    <Modal.Title className="w-100" id="vcenter">
                                                        {artist.imageURL ?
                                                            <Image src={artist.imageURL} fluid rounded onError={(e) => { e.target.onerror = null; e.target.src=require('../../img/placeholder.jpg');}} /> :
                                                            <Image src={require('../../img/placeholder.jpg')} fluid rounded />
                                                        }<br/>
                                                        {artist.name} 
                                                    </Modal.Title>        
                                                </Modal.Header>    
                                                <Modal.Body className="bg-dark text-white">
                                                    <p>
                                                        {artist.description}
                                                    </p>

                                                    <div className="artist-modal-contact text-center">
                                                        <MdHome className="contact-icon" /> {artist.address ? artist.address : null}<br/>
                                                        <MdPhone className="contact-icon" /> {artist.phone ? artist.phone : null}
                                                    </div>

                                                    <div className="artist-modal-social text-center">
                                                        {artist.link ? (<SocialIcon className="weblink" url={artist.link} bgColor="#ff5a01" network="meetup" />) : null}
                                                        {artist.email ? (<SocialIcon className="email" url={"mailto:" + artist.email} network="email" />) : null}
                                                        {artist.facebook ? (<SocialIcon className="facebook" url={artist.facebook} network="facebook" />) : null}
                                                        {artist.instagram ? (<SocialIcon className="instagram" url={artist.instagram} network="instagram" />) : null}
                                                    </div>
                                                </Modal.Body>
                                                </Modal>
                                            
                                        </Card.Text>
                                    </Card.Body>
                                        <Card.Footer>
                                            {artist.facebook ? (<SocialIcon className="facebook" url={artist.facebook} network="facebook" />) : null}
                                            {artist.instagram ? (<SocialIcon className="instagram" url={artist.instagram} network="instagram" />) : null}
                                        </Card.Footer>
                                </Card>
                            ) : null)}
                        </CardColumns>
                    {/* <div className="row justify-content-center">  
                        {artists.map((artist, idx) => artist.live === "true" ? (
                            <div className="card text-white bg-dark mb-4 col-md-5 col-xl-3 mx-2 transparent-card">
                                <img src={require('../../img/placeholder.jpg')} className="card-img-top mt-3" alt="..." />
                                <div className="card-header"><h2>{artist.name}</h2></div>
                                <div className="card-body">
                                    <p className="card-text scroll smooth-scroll">
                                    {artist.description}
                                    </p>
                                    
                                    {artist.email ? 
                                    (<h5 className="card-title">
                                        Sähköposti: {artist.email}
                                        </h5>) : null }

                                    {artist.address ?
                                        (<h5 className="card-title">
                                            Osoite: {artist.address}
                                        </h5>) : null}

                                    {artist.phone ? 
                                        (<h5 className="card-title">
                                            Puhelinnumero: {artist.phone}
                                        </h5>) : null}

                                    {artist.link ?
                                        (<h5 className="card-title">
                                        <a href={artist.link}>Linkki sivuilleni</a> 
                                        </h5> ) : null}

                                    <div className="text-right">
                                        {artist.facebook ? (<SocialIcon className="facebook" url={artist.facebook} />) : null}
                                        {artist.instagram ? (<SocialIcon className="instagram" url={artist.instagram} />) : null}
                                    </div>
                                </div>
                            </div>
                        ): null )}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Artists
