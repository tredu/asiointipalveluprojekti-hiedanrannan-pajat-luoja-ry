import React, { Component } from 'react'
import { db } from '../../firebase';
import AddCourse from './addCourse'

export default class editCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            courseID: [],
            selected: '',
            course: '',
            id: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.editSelected = this.editSelected.bind(this);
    }

    componentDidMount() {
        db.collection("courses")
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
                
                this.setState({ courseID: id });
            });
    }

    handleChange(e) {
        this.setState({selected: e.target.value},() => {
            this.editSelected();
        });
    }

    editSelected = () => {
        db.collection("courses").doc(this.state.selected.toString())
        .get()
        .then(doc => {
            const data = doc.data();
            console.log(data);

            this.setState({
                course: data,
                id: Math.random()
            });
        });
    }

    render() {
        const { courseID } = this.state;
        const { course } = this.state;
        return (
            <div className="editEvent">
                <div className="editEvent-header">
                </div>
                <div className="container">
                    <div className="row justify-content-center">  
                        <form>
                            <label for="selectEvent">Valitse Kurssi</label>
                            <select name="selectEvent" id="event-select" className="form-control" onChange={this.handleChange}>
                                <option disabled selected>Valitse Kurssi</option>
                                {courseID.map(course => (
                                    <option>{course}</option>
                                ))}                
                            </select>
                        </form>
                    </div>
                    <div className="row">
                        {this.state.course &&
                            <AddCourse cCourse={course} selected={this.state.selected} key={this.state.id} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
