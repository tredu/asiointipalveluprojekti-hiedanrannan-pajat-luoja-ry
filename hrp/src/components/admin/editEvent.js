import React, { Component } from 'react'
import { db } from '../../firebase';
import AddEvent from './addEvent'

export default class editEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventsID: [],
            selected: '',
            event: '',
            id: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.editSelected = this.editSelected.bind(this);
    }

    componentDidMount() {
        db.collection("events")
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
                
                this.setState({ eventsID: id });
            });
    }

    handleChange(e) {
        this.setState({selected: e.target.value},() => {
            this.editSelected();
        });
    }

    editSelected = () => {
        db.collection("events").doc(this.state.selected.toString())
        .get()
        .then(doc => {
            const data = doc.data();
            console.log(data);

            this.setState({
                event: data,
                id: Math.random()
            });
        });
    }

    render() {
        const { eventsID } = this.state;
        const { event } = this.state;
        return (
            <div className="editEvent">
                <div className="editEvent-header">
                </div>
                <div className="container">
                    <div className="row justify-content-center">  
                        <form>
                            <label for="selectEvent">Valitse tapahtuma</label>
                            <select name="selectEvent" id="event-select" className="form-control" onChange={this.handleChange}>
                                <option disabled selected>Valitse tapahtuma</option>
                                {eventsID.map(event => (
                                    <option>{event}</option>
                                ))}                
                            </select>
                        </form>
                    </div>
                    <div className="row">
                        {this.state.event &&
                            <AddEvent cEvent={event} selected={this.state.selected} key={this.state.id} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
