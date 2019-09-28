import React, {Component} from 'react';
import { db } from '../../firebase';
import './Events.css';

class Events extends Component {
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
            console.log(data);
            this.setState({ events: data });
        });
    }

    render() {
        const { events } = this.state;
        return (
            <div className="eventRoot">
                <h1>Tapahtumat</h1> 
                <div className="eventList">
                    {events.map(event => (
                        <div className="eventWrapper">
                            <div className="eventTitle"><h2>{event.title}</h2></div>
                            <div className="eventDesc"><p>{event.description}</p></div>
                            <div className="eventOrganizer">Järjestäjä: {event.organizer}</div>
                            <div className="eventLocation">Paikka: {event.location}</div>
                            <div className="eventStartTime">Alkaa: {event.start.toDate() + " Loppuu: " + event.end.toDate()}</div>
                            <div className="eventParticipant">Osallistujia: {event.participant}</div>
                            <div className="eventContact">Yhteystiedot: {event.contact}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Events
