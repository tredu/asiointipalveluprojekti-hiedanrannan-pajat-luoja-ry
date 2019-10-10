import React, {Component, useState} from 'react';
import './Artists.css'
import { db } from '../../firebase';
import { SocialIcon } from 'react-social-icons';
import Card from 'react-bootstrap/Card'
import { CardColumns } from 'react-bootstrap';

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
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

        render() {
            const { artists } = this.state;

            return (
            <div className="artistRoot">
                <div className="container-fluid">
                        <CardColumns>
                            {artists.map((artist,idx) => artist.live === "true" ? (
                                <Card className="transparent-card text-white h-100">
                                    <Card.Img variant="top" src={require('../../img/placeholder.jpg')} />
                                    <Card.Title>{artist.name}</Card.Title>
                                    <Card.Body>
                                        <Card.Text>{(artist.description.length > 180) ? (artist.description.substr(0,179) + "...") : artist.description}</Card.Text>
                                        <Card.Text>
                                            <button className="read-more">Lue Lisää</button>
                                        </Card.Text>
                                        <Card.Text>
                                            {artist.facebook ? (<SocialIcon className="facebook" url={artist.facebook} />) : null}
                                            {artist.instagram ? (<SocialIcon className="instagram" url={artist.instagram} />) : null}
                                        </Card.Text>
                                    </Card.Body>
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
