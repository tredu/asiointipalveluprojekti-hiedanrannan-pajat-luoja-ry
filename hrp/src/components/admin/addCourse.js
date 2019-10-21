import React, { Component, useState } from 'react'
import { db } from '../../firebase';
import DatePicker from 'react-datepicker'
import fi from 'date-fns/locale/fi'

import "react-datepicker/dist/react-datepicker.css"

export default class addCourse extends Component {
    constructor(props) {
        super(props);
        if(this.props.cCourse) {
            this.state = {
                ...this.props.cCourse,
                editEnd: true,
                editStart: true,
                editDate: true,
                selected: this.props.selected,
                completed: false,
                deleted: false
            }
        } else {        
        this.state = {
            date: '',
            description: '',
            email: '',
            end: '',
            organizer: '',
            phone: '',
            title: '',
            start: '',
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
        db.collection("courses").doc(this.props.cCourse ? this.state.selected : this.state.title).set({
            date: this.state.date,
            description: this.state.description,
            email: this.state.email,
            end: this.state.end,
            organizer: this.state.organizer,
            phone: this.state.phone,
            start: this.state.start,
            title: this.state.title
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
                        <h1>Kurssi {this.state.deleted ? "poistettu" : this.props.cCourse ? "muokattu" : "lisätty"} onnistuneesti</h1>
                    </div>
                }

                {!this.state.completed &&
                <div className="event-header">
                    <h2>{this.props.cCourse ? (<div><span className="text-white">Muokkaa kurssia </span ><span className="text-info">{this.props.cCourse.title}</span></div>)  : "Lisää kurssi"}</h2>
                </div>
                }

                {!this.state.completed &&
                <div className="event-form container">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="title">Kurssin nimi</label>
                            <input type="text" name="title" class="form-control bg-dark text-white border-0" id="title" placeholder="Nimi"
                            onChange={this.handleChange} value={this.state.title} />
                            </div>
                            <div class="form-group col-md-6">
                            <label for="organizer">Kurssin Järjestäjä</label>
                            <input type="text" name="organizer" class="form-control bg-dark text-white border-0" id="organizer" placeholder="Järjestäjä" required 
                            onChange={this.handleChange} value={this.state.organizer}/>
                            </div>
                        </div>
                        <div className="form-row justify-content-center">
                            <div className="form-group col-md-2">
                                <label for="datepicker">Päivämäärä</label>
                                <DatePicker className="eventDatePicker form-control bg-dark text-white border-0" id="datepicker"
                                    selected={this.state.editDate ? this.state.date.toDate() : this.state.date}
                                    onChange={this.handleDateChange}
                                    placeholderText="Valitse pvm"
                                    autoComplete="off"
                                    locale={fi}
                                />
                            </div>
                                <div className="form-group col-md-2">
                                    <label for="startpicker">Alkaa</label>
                                    <DatePicker className="eventStartTime form-control bg-dark text-white border-0" id="startpicker"
                                        selected={this.state.editStart ? this.state.start.toDate() : this.state.start}
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
                                        selected={this.state.editEnd ? this.state.end.toDate() : this.state.end}
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
                            <label for="description">Kurssin Kuvaus</label>
                            <textarea type="text" name="description" class="form-control bg-dark text-white border-0" id="description" placeholder="Kuvaus" 
                            onChange={this.handleChange} value={this.state.description} />
                        </div>
                        <div class="form-row justify-content-center">
                            <div class="form-group col-md-4">
                            <label for="email">Email</label>
                            <input type="email" name="email" class="form-control bg-dark text-white border-0" id="email"  
                            onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="phone">Puhelin</label>
                                <input type="text" name="phone" className="form-control bg-dark text-white border-0" id="phone" placeholder="+358501231234"
                                onChange={this.handleChange} value={this.state.phone} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>{this.props.cCourse ? "Muokkaa" : "Lisää"}</button>
                        {this.props.cCourse &&
                        <button class="btn btn-danger ml-2" onClick={(e) => {
                                e.preventDefault();
                                db.collection('courses').doc(this.state.selected).delete();
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
