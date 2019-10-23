import React, { Component, useState } from 'react'
import { db } from '../../firebase';
import DatePicker from 'react-datepicker'
import fi from 'date-fns/locale/fi'
import ImageUp from './ImageUp'

import "react-datepicker/dist/react-datepicker.css"

export default class addEvent extends Component {
    constructor(props) {
        super(props);
        if(this.props.cEvent) {
            this.state = {
                ...this.props.cEvent,
                editEnd: true,
                editStart: true,
                editDate: true,
                selected: this.props.selected,
                completed: false,
                deleted: false

            }
        } else {        
        this.state = {
            organizer: '',
            contact: '',
            title: '',
            location: '',
            description: '',
            date: '',
            start: '',
            end: '',
            live: '',
            imageURL: '',
            completed: false
        }
        }



        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
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
        db.collection("events").doc(this.props.cEvent ? this.state.selected : this.state.title).set({
            organizer: this.state.organizer,
            contact: this.state.contact,
            title: this.state.title,
            description: this.state.description,
            location: this.state.location,
            date: this.state.date,
            start: this.state.start,
            end: this.state.end,
            live: this.state.live,
            imageURL: this.state.imageURL
        })
        .then(function() {
            console.log("Document successfully written!");
        }).then(() => {this.setCompleted()})
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    setCompleted = () => {
        this.setState({completed: true});
    }

    setDeleted = () => {
        this.setState({deleted: true});
    }

    render() {
        return (
            <div className="event-add">
                {this.state.completed &&
                    <div className="completed-overlay">
                        <h1>Tapahtuma {this.state.deleted ? "poistettu" : this.props.cEvent ? "muokattu" : "lisätty"} onnistuneesti</h1>
                    </div>
                }
                {!this.state.completed &&
                    <div className="event-header">
                        <h2>{this.props.cEvent ? (<div><span className="text-white">Muokkaa tapahtumaa </span ><span className="text-info">{this.props.cEvent.title}</span></div>)  : "Lisää tapahtuma"}</h2>
                    </div>
                }
                {!this.state.completed &&
                <div className="event-form container">
                    <ImageUp setState={s => {this.setState(s)}} setImgLoc={"eventImages"} currentImg={this.state.imageURL}/>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="title">Tapahtuman nimi</label>
                            <input type="text" name="title" class="form-control bg-dark text-white border-0" id="title" placeholder="Nimi"
                            onChange={this.handleChange} value={this.state.title} />
                            </div>
                            <div class="form-group col-md-6">
                            <label for="organizer">Järjestäjä</label>
                            <input type="text" name="organizer" class="form-control bg-dark text-white border-0" id="organizer" placeholder="Järjestäjä" required 
                            onChange={this.handleChange} value={this.state.organizer}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="location">Tapahtuma Paikka</label>
                            <input type="text" name="location" class="form-control bg-dark text-white border-0" id="location" placeholder="Hiedanrannan Paja ..." 
                            onChange={this.handleChange} value={this.state.location} />
                        </div>
                        <div className="form-row justify-content-center">
                            {/* <div class="form-group col-md-2">
                            <label for="event-date">Päivämäärä</label>
                            <input type="date" class="form-control bg-dark text-white border-0" id="event-date" />
                            </div>
                            <div class="form-group col-md-2">
                            <label for="start-time">Aloitus aika</label>
                            <input type="time" class="form-control bg-dark text-white border-0" id="start-time" />
                            </div>
                            <div class="form-group col-md-2">
                            <label for="end-time">Lopetus aika</label>
                            <input type="time" class="form-control bg-dark text-white border-0" id="end-time" />
                        </div> */}

                            <div className="form-group col-md-2">
                                <label for="datepicker">Päivämäärä</label>
                                <DatePicker className="eventDatePicker form-control bg-dark text-white border-0" id="datepicker"
                                    selected={!this.state.date ? null : this.state.editDate ? this.state.date.toDate() : this.state.date}
                                    onChange={this.handleDateChange}
                                    placeholderText="Valitse pvm"
                                    autoComplete="off"
                                    locale={fi}
                                    />
                            </div>
                                <div className="form-group col-md-2">
                                    <label for="startpicker">Alkaa</label>
                                    <DatePicker className="eventStartTime form-control bg-dark text-white border-0" id="startpicker"
                                        selected={!this.state.start ? null : this.state.editStart ? this.state.start.toDate() : this.state.start}
                                        onChange={this.handleStartChange}
                                        placeholderText="Valitse aika"
                                        autoComplete="off"
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeCaption="Alkaa"
                                        dateFormat="HH:mm"
                                        timeFormat="HH:mm"
                                        />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="startpicker">Loppuu</label>
                                    <DatePicker className="eventStartTime form-control bg-dark text-white border-0" id="startpicker"
                                        name="start"
                                        placeholderText="Valitse aika"
                                        selected={!this.state.end ? null : this.state.editEnd ? this.state.end.toDate() : this.state.end}
                                        onChange={this.handleEndChange}
                                        autoComplete="off"
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeCaption="Loppuu"
                                        dateFormat="HH:mm"
                                        timeFormat="HH:mm"
                                    />
                                </div>
                        </div>
                        <div class="form-group">
                            <label for="description">Tapahtuman Kuvaus</label>
                            <textarea type="text" name="description" class="form-control bg-dark text-white border-0" id="description" placeholder="Kuvaus" 
                            onChange={this.handleChange} value={this.state.description} />
                        </div>
                        <div class="form-row justify-content-center">
                            <div class="form-group col-md-4">
                            <label for="email">Email</label>
                            <input type="email" name="contact" class="form-control bg-dark text-white border-0" id="email" required 
                            onChange={this.handleChange} value={this.state.contact} />
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputState">Julkaistaanko tapahtuma</label>
                            <select id="inputState" name="live" class="form-control bg-dark text-white border-0" required
                            onChange={this.handleChange} value={this.state.live ? this.state.live : null}>
                                <option selected disabled>Valitse...</option>
                                <option value="true">Kyllä</option>
                                <option value="false">Ei</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>{this.props.cEvent ? "Muokkaa" : "Lisää"}</button>
                        {this.props.cEvent &&
                        <button class="btn btn-danger ml-2" onClick={(e) => {
                                db.collection('events').doc(this.state.selected).delete();
                                this.setDeleted();
                                this.setCompleted();
                            }}>Poista</button>}
                        </form>
                </div>
                }

                
            </div>
        )
    }
}
