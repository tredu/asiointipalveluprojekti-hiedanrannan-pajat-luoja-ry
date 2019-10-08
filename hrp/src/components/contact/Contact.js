import React from 'react';
import './Contact.css'
import NavBar from '../nav/NavBar'
import { SocialIcon } from 'react-social-icons';

     
export default class Contact extends React.Component {
        render() {
            const title= "Yhteystiedot";
        return (
<<<<<<< HEAD
            <div className="contact">
                <NavBar title={title}/>
                <div className="vittumitapaskaa"> 
                    <div class="p-2 flex-fill bd-highlight">
                        <h1 className="text-left">Näin saavut Hiedanrantaan</h1>
                        <h2 className="text-left">Kävellen ja pyörällä</h2>
                        <h2 className="text-left">Bussilla</h2>
                        <h2 className="text-left">Autolla</h2>
                    </div>
                    <div class="p-2 flex-fill bd-highlight">
                        <h1 className="text-right">Yhteystiedot</h1>
                    </div>
                </div>
                </div>
                
=======
            <div>
                {/* <NavBar title={title}/>     */}
            </div>
>>>>>>> 400884966834ba152f318ca5f348830210c3b5a5
        )
    }
}
