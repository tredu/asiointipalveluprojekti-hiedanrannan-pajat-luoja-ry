import React, { Component } from 'react'
import { db } from '../../firebase';
import AddArtist from './addArtist';

export default class editArtist extends Component {
    constructor(props){
        super(props);
        this.state = {
            artistsID: [],
            selected: '',
            artist: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.editSelected = this.editSelected.bind(this);
    }

    componentDidMount() {
        db.collection("artists")
            .get()
            .then(querySnapshot => {
                // const data = querySnapshot.docs.map(doc => doc.data());
                const id = querySnapshot.docs.map(doc => doc.id);
                
                // const addId = (data, id) => {
                //     data.forEach(r => r.docName = id[data.indexOf(r)]);
                //     return data;
                // }
                // addId(data, id);
                
                console.log(id);
                
                this.setState({ artistsID: id });
            });
    }

    handleChange(e) {
        this.setState({selected: e.target.value},() => {
            this.editSelected();
        });
    }

    editSelected = () => {
        db.collection("artists").doc(this.state.selected.toString())
        .get()
        .then(doc => {
            const data = doc.data();
            console.log(data);

            this.setState({
                artist: data
            });
        });
    }

    render() {
        const { artistsID } = this.state;
        const { artist } = this.state;
        return (
            <div className="editArtist">
                <div className="editArtist-header">
                    <h1>Muokkaa artistia</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center">  
                        <form>
                            <label for="selectArtist">Valitse artisti</label>
                            <select name="selectArtist" id="artist-select" className="form-control" onChange={this.handleChange}>
                                <option disabled selected>Valitse artisti</option>
                                {artistsID.map(artist => (
                                    <option>{artist}</option>
                                ))}                
                            </select>
                        </form>
                    </div>
                    <div className="row">
                        {this.state.artist &&
                            <AddArtist cArtist={artist} selected={this.state.selected} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}