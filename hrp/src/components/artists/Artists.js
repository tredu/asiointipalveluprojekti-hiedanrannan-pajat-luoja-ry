import React, {Component} from 'react';
import './Artists.css'
import { db } from '../../firebase';
import NavBar from '../nav/NavBar';

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
                    <div className="container"></div>
                    <div className="row justify-content-center">  
                        {artists.map(artist => artist.live === "true" ? (
                            <div className="card text-white bg-dark mb-4 col-md-4 mx-auto transparent-card">
                                <img src={require('../../img/placeholder.jpg')} className="card-img-top mt-3" alt="..." />
                                <div className="card-header"><h2>{artist.name}</h2></div>
                                <div className="card-body">
                                    <p className="card-text">
                                    {artist.description}
                                    </p>
                                    <h5 className="card-title">Sähköposti: {artist.email}</h5>
                                    <h5 className="card-title">
                                        Osoite: {artist.address}
                                    </h5>
                                    <h5 className="card-title">
                                        Puhelinnumero: {artist.phone}
                                    </h5>
                                    <h5 className="card-title">
                                        <a href={artist.link}>Minun sivut</a>
                                    </h5>
                                </div>
                            </div>
                        ): null )}
                    </div>
                </div>
        )
    }
}

export default Artists
