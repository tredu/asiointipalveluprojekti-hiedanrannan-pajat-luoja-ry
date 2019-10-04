import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

export default class addEvent extends Component {
    constructor(props) {
        super(props);
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
            startDate: new Date()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDateChange = date => {
        
        this.setState({
            startDate: date
        });
        Promise.resolve().then(console.log(this.state.startDate));
    }

    render() {
        return (
            <div className="event-add">
                <div className="event-header">
                    <h1>Lisää tapahtuma</h1>
                </div>

                <div className="event-form container">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="title">Tapahtuman nimi</label>
                            <input type="text" class="form-control bg-dark text-white border-0" id="title" placeholder="Nimi" />
                            </div>
                            <div class="form-group col-md-6">
                            <label for="organizer">Järjestäjä</label>
                            <input type="text" class="form-control bg-dark text-white border-0" id="organizer" placeholder="Järjestäjä" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="location">Tapahtuma Paikka</label>
                            <input type="text" class="form-control bg-dark text-white border-0" id="location" placeholder="Hiedanrannan Paja ..." />
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

                            <div className="datepicker-container">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleDateChange}
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description">Tapahtuman Kuvaus</label>
                            <textarea type="text" class="form-control bg-dark text-white border-0" id="description" placeholder="Kuvaus" />
                        </div>
                        <div class="form-row justify-content-center">
                            <div class="form-group col-md-4">
                            <label for="email">Email</label>
                            <input type="email" class="form-control bg-dark text-white border-0" id="email" required />
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputState">Julkaistaanko tapahtuma</label>
                            <select id="inputState" class="form-control bg-dark text-white border-0" required>
                                <option selected disabled>Valitse...</option>
                                <option>Kyllä</option>
                                <option>Ei</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Lähetä</button>
                        </form>
                </div>

                
            </div>
        )
    }
}
