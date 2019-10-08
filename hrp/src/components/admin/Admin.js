import React, { Component } from 'react'
import { db } from '../../firebase'
import AddArtist from './addArtist'
import AddEvent from './addEvent'
import EditEvent from './editEvent'
import { Route, Link } from 'react-router-dom'
import './admin.css'

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            secretWord: 'visiopro',
            events: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     db.collection("events")
    //         .get()
    //         .then(querySnapshot => {
    //             const data = querySnapshot.docs.map(doc => doc.data());
    //             const id = querySnapshot.docs.map(doc => doc.id);
                
    //             const addId = (data, id) => {
    //                 data.forEach(r => r.docName = id[data.indexOf(r)]);
    //                 return data;
    //             }
    //             addId(data, id);
                
    //             console.log(data);
                
    //             this.setState({ events: data });
    //         });
    // }

    handleChange(e) {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div className="admin-panel">
                <h1>Admin panel</h1>
                <input value={this.state.value} onChange={this.handleChange} />
                {this.state.value !== this.state.secretWord &&
                    <div className="adminPanel">
                        <h1>Welcome admin</h1>
                        <Link className="nav-link" activeClassName="active" to={"/admin/artist"}>Artistit</Link>
                        <Link className="nav-link" activeClassName="active" to={"/admin/addevent"}>Lisää Tapahtumat</Link>
                        <Link className="nav-link" activeClassName="active" to={"/admin/editevent"}>Muokkaa Tapahtumat</Link>
                        <Route path="/admin/artist" component={AddArtist} />
                        <Route path="/admin/addevent" component={AddEvent} />
                        <Route path="/admin/editevent" component={EditEvent} />
                    </div>
                }
            </div>
        )
    }
}
