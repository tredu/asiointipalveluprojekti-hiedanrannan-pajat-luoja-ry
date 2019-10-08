import React, { Component, useState } from 'react'
import { db } from '../../firebase';
import fi from 'date-fns/locale/fi'


export default class addArtist extends Component {
    constructor(props) {
        super(props);
        if(this.props.cArtist) {
            this.state = {
                ...this.props.cArtist,
                selected: this.props.selected
            }
        } else {        
        this.state = {
            name: '',
            description: '',
            email: '',
            address: '',
            link: '',
            phone: '',
            live: '',
        }
        }


        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        },() => console.log(this.state.title));
    }

    handleDateChange = date => {
        this.setState({
            date: date,
            editDate: false
        }, () => console.log(this.state.date));
    }

    handleStartChange = start => {
        
        this.setState({
            start: start,
            editStart: false
        }, () => console.log(this.state.start));
    }

    handleEndChange = end => {
        
        this.setState({
            end: end,
            editEnd: false
        }, () => console.log(this.state.end));
    }

    handleSubmit = event => {
        event.preventDefault();
        db.collection("artists").doc(this.props.cArtist ? this.state.selected : this.state.name).set({
            name: this.state.name,
            description: this.state.description,
            email: this.state.email,
            address: this.state.address,
            link: this.state.link,
            phone: this.state.phone,
            live: this.state.live,
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    render() {
        return (
            <div className="event-add">
                <div className="event-header">
                    <h1>Lisää Artisti</h1>
                </div>

                <div className="event-form container">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="name">Nimi</label>
                            <input type="text" name="name" class="form-control bg-dark text-white border-0" id="name" placeholder="Nimi"
                            onChange={this.handleChange} value={this.state.nimi} />
                            </div>
                            <div class="form-group col-md-6">
                            <label for="address">Osoite</label>
                            <input type="text" name="address" class="form-control bg-dark text-white border-0" id="address" placeholder="Osoite" required 
                            onChange={this.handleChange} value={this.state.address}/>
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div class="form-group col-md-6">
                                <label for="location">Email</label>
                                <input type="text" name="email" class="form-control bg-dark text-white border-0" id="email" placeholder="Sähköposti" 
                                onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">Puhelin</label>
                                <input type="text" name="phone" className="form-control bg-dark text-white border-0" id="phone" placeholder="+358501231234"
                                onChange={this.handleChange} value={this.state.phone} />
                            </div>
                        </div>
                            <div class="form-group">
                            <label for="description">Kuvaus</label>
                            <textarea type="text" name="description" class="form-control bg-dark text-white border-0" id="description" placeholder="Kuvaus" 
                            onChange={this.handleChange} value={this.state.description} />
                        </div>
                        <div class="form-row justify-content-center">
                            <div class="form-group col-md-4">
                            <label for="link">Linkki</label>
                            <input type="text" name="link" class="form-control bg-dark text-white border-0" id="link" required 
                            onChange={this.handleChange} value={this.state.link} />
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputState">Julkaistaanko Artisti</label>
                            <select id="inputState" name="live" class="form-control bg-dark text-white border-0" required
                            onChange={this.handleChange} value={this.state.live ? this.state.live : null}>
                                <option selected disabled>Valitse...</option>
                                <option value="true">Kyllä</option>
                                <option value="false">Ei</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>{this.props.cArtist ? "Muokkaa" : "Lisää"}</button>
                        </form>
                </div>

                
            </div>
        )
    }
}
