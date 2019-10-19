import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { db } from '../../firebase'

import './CourseMenu.css'

 
const MenuItem = ({start, title, selected, organizer}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    // style={{background: 'url('+img+')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
    >
      {/* <p>{text}</p> */}
      <span className="menu-item-date">
      {(() => {
        const date = new Date(start.toDate());
        
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        
        return ` ${day}.${month}.${year}`
      }) ()}
      </span>
      <p className="menu-item-title">
        {title}
      </p>
      <span className="menu-item-organizer">
        {organizer}
      </span>



    </div>;
};
 
export const Menu = (list, selected) =>
  list.map(el => {

    return <MenuItem title={el.title} start={el.start} key={el.title} organizer={el.organizer} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';

class CourseMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
          selected,
          courses: []
        };
        // this.menuItems = Menu(this.state.courses, this.state.selected);
    }

    componentDidMount() {
        db.collection("courses")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                // const id = querySnapshot.docs.map(doc => doc.id);
                
                // const addId = (data, id) => {
                //     data.forEach(r => r.docName = id[data.indexOf(r)]);
                //     return data;
                // }
                // addId(data, id);
                
                console.log(data);
                
                this.setState({ courses: data }, () => this.menuItems = Menu(this.state.courses, this.state.selected));
            });
    }

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;

        const menu = this.menuItems;

        return (
            <div className="courses">
                <ScrollMenu
                    data={menu}
                    // arrowLeft={ArrowLeft}
                    // arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        )
    }
}

export default CourseMenu


