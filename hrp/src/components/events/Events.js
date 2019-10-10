import React, {Component} from 'react';
import { db } from '../../firebase';
import './Events.css';
import NavBar from '../nav/NavBar';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        db.collection("events")
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
                
                this.setState({ events: data });
            });
    }

    render() {
        const { events } = this.state;
        return (
            <div className="eventRoot">
                <div className="container-fluid">
                    {/* {events.map(event => (
                        <div className="eventWrapper">
                            <div className="eventTitle"><h2>{event.title}</h2></div>
                            <div className="eventDesc"><p>{event.description}</p></div>
                            <div className="eventOrganizer">Järjestäjä: {event.organizer}</div>
                            <div className="eventLocation">Paikka: {event.location}</div>
                            <div className="eventStartTime">Alkaa: {event.start.toDate() + " Loppuu: " + event.end.toDate()}</div>
                            <div className="eventParticipant">Osallistujia: {event.participant}</div>
                            <div className="eventContact">Yhteystiedot: {event.contact}</div>
                        </div>
                    ))} */}
                    <div className="row justify-content-center">  
                        {events.map(event => event.live === "true" ? (
                            <div className="card text-white bg-dark mb-4 col-md-5 col-xl-3 mx-2 transparent-card">
                                <img src={require('../../img/placeholder.jpg')} className="card-img-top mt-3" alt="..." />
                                <div className="card-header"><h2>{event.title}</h2></div>
                                <div className="card-body">
                                    <p className="card-text">
                                    {event.description}
                                    </p>
                                    <h5 className="card-title">Järjestäjä: {event.organizer}</h5>
                                    <h5 className="card-title">
                                        Paikka: {event.location}
                                    </h5>
                                    <h5 className="card-title">Alkaa:</h5>
                                        <p className="card-text">
                                            {(() => {
                                                const data = new Date(event.start.toDate());
                                                const date = new Date(event.date ? event.date.toDate() : event.start.toDate());
                                                const day = date.getDate();
                                                const month = date.getMonth();
                                                const year = date.getFullYear()
                                                const hours = data.getHours();
                                                const mins = data.getMinutes();
    
                                                // return day + "." + month + "." + year + " klo: " + hours + ":" + ((mins === 0) ? "00" : mins); 
                                                return `${day}.${month}.${year} klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                                                // return `klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                                            }) ()}
                                        </p>
                                    <h5 className="card-title">Loppuu:</h5>
                                        <p className="card-text">
                                            {(() => {
                                                const data = new Date(event.end.toDate());
                                                const date = new Date(event.date ? event.date.toDate() : event.end.toDate());
                                                const day = date.getDate();
                                                const month = date.getMonth();
                                                const year = date.getFullYear()
                                                const hours = data.getHours();
                                                const mins = data.getMinutes();
    
                                                // return day + "." + month + "." + year + " klo: " + hours + ":" + ((mins === 0) ? "00" : mins); 
                                                return `${day}.${month}.${year} klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                                                // return `klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                                            }) ()}
                                        </p>
                                    <h5 className="card-title">
                                        Osallistujia: {event.participant ? event.participant : 0}
                                    </h5>
                                    <h6 className="card-title">
                                        Yhteystiedot: {event.contact}
                                    </h6>
                                </div>
                            </div>
                        ): null )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Events
