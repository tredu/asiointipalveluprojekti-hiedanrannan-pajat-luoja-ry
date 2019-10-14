import React, {Component} from 'react';
import { db } from '../../firebase';
import './Events.css';
import { Card, CardColumns, CardDeck, Button, Modal, Image } from 'react-bootstrap'

//icons

import { MdEvent, MdAccessTime, MdLocationOn, MdMail, MdGroup, MdPeople } from 'react-icons/md' 

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            showPopup: false,
            which: ''
        };
        this.handleImgError = this.handleImgError.bind(this);
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

    togglePopup = which => {
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

    handleImgError = (e) => {
        this.setState({imageURL: '../../img/placeholder.jpg'})
    }

    render() {
        const { events } = this.state;
        return (
            <div className="eventRoot justify-content-center">
                <div className="container">
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
                    {/* <div className="row justify-content-center align-items-center">   */}
                    <CardColumns>
                        {events.map((event, idx) => event.live === "true" ? (
                            <Card style={{minWidth: '33%'}} border="dark" className="transparent-card text-white mx-auto my-2">
                                {event.imageURL ?
                                    <Card.Img variant="top" src={event.imageURL} onError={(e) => { e.target.onerror = null; e.target.src=require('../../img/placeholder.jpg');}} /> :
                                    <Card.Img variant="top" src={require('../../img/placeholder.jpg')} />
                                }
                                <Card.Title>
                                    {event.title} <br/>
                                    <small className="text-primary"><MdLocationOn />{' ' + event.location}</small><br/>
                                    <span className="text-info">
                                        <small><MdEvent />
                                            {(() => {
                                                const data = new Date(event.start.toDate());
                                                const date = new Date(event.date ? event.date.toDate() : event.start.toDate());
                                                const day = date.getDate();
                                                const month = date.getMonth();
                                                const year = date.getFullYear()
                                                const hours = data.getHours();
                                                const mins = data.getMinutes();
                                                
                                                // return day + "." + month + "." + year + " klo: " + hours + ":" + ((mins === 0) ? "00" : mins); 
                                                return ` ${day}.${month}.${year} ` //klo: ${hours}:${((mins === 0) ? "00" : mins)}
                                                // return `klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                                            }) ()}
                                        </small>
    
                                        <small><MdAccessTime />
                                            {(() => {
                                                const start = new Date(event.start.toDate());
                                                const end = new Date(event.end.toDate());
                                                const startH = start.getHours();
                                                const startM = start.getMinutes();
                                                const endH = end.getHours();
                                                const endM = end.getMinutes();
                                                
                                                return ` ${startH}:${((startM === 0) ? "00" : startM)} - ${endH}:${((endM === 0) ? "00" : endM)}`
                                                
                                            }) ()}
                                        </small>
                                    </span>
                                </Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {(event.description.length > 180) ? (event.description.substr(0,179) + "...") : event.description} 
                                    </Card.Text>
                                    <Card.Text>
                                        <Button variant="primary" onClick={this.togglePopup.bind(this, idx)}>Lue Lisää</Button>

                                        <Modal
                                            show={this.state.which === idx}
                                            onHide={this.closePopup.bind(this)}
                                            size="lg"
                                            dialogClassName="modal-90w"
                                            aria-labelledby="vcenter"
                                            scrollable
                                            centered
                                        >
                                            <Modal.Header className="bg-dark text-white text-center" closeButton>
                                                <Modal.Title className="w-100" id="vcenter">
                                                    {event.imageURL ?
                                                        <Image src={event.imageURL} onError={(e) => { e.target.onerror = null; e.target.src=require('../../img/placeholder.jpg');}} fluid rounded/> :
                                                        <Image src={require('../../img/placeholder.jpg')} fluid rounded />
                                                    }<br/>

                                                    {event.title}<br/> 
                                                    <small className="text-primary"><MdLocationOn />{' ' + event.location}</small><br/>
                                                    <span className="text-info"><small><MdEvent />

                                                        {(() => {
                                                            const data = new Date(event.start.toDate());
                                                            const date = new Date(event.date ? event.date.toDate() : event.start.toDate());
                                                            const day = date.getDate();
                                                            const month = date.getMonth();
                                                            const year = date.getFullYear()
                                                            const hours = data.getHours();
                                                            const mins = data.getMinutes();
                                                            
                                                            // return day + "." + month + "." + year + " klo: " + hours + ":" + ((mins === 0) ? "00" : mins); 
                                                            return ` ${day}.${month}.${year} ` //klo: ${hours}:${((mins === 0) ? "00" : mins)}
                                                            // return `klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                                                        }) ()}
                                                        </small>
                                                        <small><MdAccessTime />
                                                            {(() => {
                                                                const start = new Date(event.start.toDate());
                                                                const end = new Date(event.end.toDate());
                                                                const startH = start.getHours();
                                                                const startM = start.getMinutes();
                                                                const endH = end.getHours();
                                                                const endM = end.getMinutes();
                                                                
                                                                return ` ${startH}:${((startM === 0) ? "00" : startM)} - ${endH}:${((endM === 0) ? "00" : endM)}`
                                                                
                                                            }) ()}
                                                        </small>
                                                    </span>
                                                </Modal.Title>        
                                                
                                            </Modal.Header>    
                                            <Modal.Body className="bg-dark text-white">
                                                <p>
                                                    {event.description}
                                                </p>

                                                <div className="event-modal-organizer text-center">
                                                    <MdPeople/>{' ' + event.organizer} 
                                                </div>

                                                <div className="event-modal-contact text-center">
                                                    <MdMail/>&nbsp;<a href={"mailto:" + event.contact}>{event.contact}</a>
                                                </div>
                                            </Modal.Body>
                                            </Modal>
                                    </Card.Text>
                                </Card.Body>
                            </Card>








                            // <div className="card text-white bg-dark mb-4 col-md-5 col-xl-3 mx-2 transparent-card">
                            //     <img src={require('../../img/placeholder.jpg')} className="card-img-top mt-3" alt="..." />
                            //     <div className="card-header"><h2>{event.title}</h2></div>
                            //     <div className="card-body">
                            //         <p className="card-text">
                            //         {event.description}
                            //         </p>
                            //         <h5 className="card-title">Järjestäjä: {event.organizer}</h5>
                            //         <h5 className="card-title">
                            //             Paikka: {event.location}
                            //         </h5>
                            //         <h5 className="card-title">Alkaa:</h5>
                            //             <p className="card-text">
                            //                 {(() => {
                            //                     const data = new Date(event.start.toDate());
                            //                     const date = new Date(event.date ? event.date.toDate() : event.start.toDate());
                            //                     const day = date.getDate();
                            //                     const month = date.getMonth();
                            //                     const year = date.getFullYear()
                            //                     const hours = data.getHours();
                            //                     const mins = data.getMinutes();
    
                            //                     // return day + "." + month + "." + year + " klo: " + hours + ":" + ((mins === 0) ? "00" : mins); 
                            //                     return `${day}.${month}.${year} klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                            //                     // return `klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                            //                 }) ()}
                            //             </p>
                            //         <h5 className="card-title">Loppuu:</h5>
                            //             <p className="card-text">
                            //                 {(() => {
                            //                     const data = new Date(event.end.toDate());
                            //                     const date = new Date(event.date ? event.date.toDate() : event.end.toDate());
                            //                     const day = date.getDate();
                            //                     const month = date.getMonth();
                            //                     const year = date.getFullYear()
                            //                     const hours = data.getHours();
                            //                     const mins = data.getMinutes();
    
                            //                     // return day + "." + month + "." + year + " klo: " + hours + ":" + ((mins === 0) ? "00" : mins); 
                            //                     return `${day}.${month}.${year} klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                            //                     // return `klo: ${hours}:${((mins === 0) ? "00" : mins)}`
                            //                 }) ()}
                            //             </p>
                            //         <h5 className="card-title">
                            //             Osallistujia: {event.participant ? event.participant : 0}
                            //         </h5>
                            //         <h6 className="card-title">
                            //             Yhteystiedot: {event.contact}
                            //         </h6>
                            //     </div>
                            // </div>
                        ): null )}
                    </CardColumns>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Events
