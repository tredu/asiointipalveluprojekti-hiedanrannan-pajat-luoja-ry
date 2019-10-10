import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
const Footer  = () => {
    return (    
        <div className="container p-3 mb-2 text-white">
            <div className="row">
                <div className="col-sm" id="footerContent">
                <p className="text-center"><span className="font-weight-bold">Hiedanrannan pajat</span> Tehdaskartanonkatu 28 33400 Tampere</p>
                <p className="text-center">hiedanrannanpaja@gmail.com</p>
                    <div className="socials">
                        <SocialIcon className="facebook" url="http://facebook.com/hiedanrannan.paja" />
                        <SocialIcon className="instagram" url="https://www.instagram.com/hiedanrannan_paja/" />
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Footer 