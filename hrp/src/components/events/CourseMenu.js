import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { db } from '../../firebase'
import { Button, Modal } from 'react-bootstrap'

import './CourseMenu.css'

import { MdEvent, MdAccessTime, MdMail, MdPhone } from 'react-icons/md' 

 
const MenuItem = ({date, start, end, title, selected, organizer, desc, phone, email}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    // style={{background: 'url('+img+')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
    >
      {/* <p>{text}</p> */}
      <span className="menu-item-date">
      {(() => {
        const date2 = new Date(date.toDate());
        
        const day = date2.getDate();
        const month = date2.getMonth() + 1;
        const year = date2.getFullYear();
        
        return ` ${day}.${month}.${year}`
      }) ()}
      </span>
      <p className="menu-item-title">
        {title}
      </p>
      <span className="menu-item-organizer">
        {organizer}
      </span>

      <div className={`show-selected ${selected ? 'd-inline' : 'd-none' }`}>
        <Modal
          show={selected}
          dialogClassName="modal-90w"
          aria-labelledby="vcenter"
          // onHide={onSelect()}
          // centered
         >
           <Modal.Header className="bg-dark text-white text-center" closeButton>
             <Modal.Title className="w-100" id="vcenter">
               {title}<br/>
                <span className="text-info"><small><MdEvent />

                    {(() => {
                        const date1 = new Date(date.toDate());
                        const day = date1.getDate();
                        const month = date1.getMonth() + 1;
                        const year = date1.getFullYear()
                        
                        return ` ${day}.${month}.${year} ` //klo: ${hours}:${((mins === 0) ? "00" : mins)}
                    }) ()}
                    </small>
                    <small><MdAccessTime />
                        {(() => {
                            const startDate = new Date(start.toDate());
                            const endDate = new Date(end.toDate());
                            const startH = startDate.getHours();
                            const startM = startDate.getMinutes();
                            const endH = endDate.getHours();
                            const endM = endDate.getMinutes();
                            
                            return ` ${startH}:${((startM === 0) ? "00" : startM)} - ${endH}:${((endM === 0) ? "00" : endM)}`
                            
                        }) ()}
                    </small>
                </span>
             </Modal.Title>
           </Modal.Header>
           <Modal.Body className="bg-dark text-white">
            <p>{desc}</p>
            <div className="artist-modal-contact text-center">
              <div><MdPhone className="contact-icon" /> {phone}</div>
              <div><MdMail className="contact-icon"/> {email}</div>
            </div>
           </Modal.Body>

         </Modal>
      </div>

    </div>;
};
 
export const Menu = (list, selected) =>
  list.map(el => {

    return <MenuItem title={el.title}
      date={el.date}
      start={el.start}
      end={el.end}
      key={el.title}
      organizer={el.organizer}
      desc={el.description}
      email={el.email}
      phone={el.phone}
      selected={selected}/>;
  });
 
 
// const Arrow = ({ text, className }) => {
//   return (
//     <div
//       className={className}
//     >{text}</div>
//   );
// };
 
 
// const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
// const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = '';

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
      if(key === this.state.selected)
      {
        this.setState({selected: ''});
      } else {
        this.setState({ selected: key });
      }
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


