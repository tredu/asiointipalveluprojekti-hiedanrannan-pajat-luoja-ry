import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import Logo from "./hiedanranta-logo.png";
const Footer  = () => {
    return (    

        <div className="container p-3 mb-2 text-white" id="footerContent">
            <div class="row">
                <div class="col-sm">
                <img className="img-responsive" src={Logo} alt="hiedanranta-logo"/>
                </div>
                <div class="col-sm" id="info">
                <p className="text-center"><span className="font-weight-bold">Hiedanrannan pajat</span> Tehdaskartanonkatu 28 33400 Tampere</p>
                <p className="text-center">hiedanrannanpaja@gmail.com</p>
                    <div className="socials">
                        <SocialIcon className="facebook" url="http://facebook.com/hiedanrannan.paja" />
                        <SocialIcon className="instagram" url="https://www.instagram.com/hiedanrannan_paja/" />
                    </div>
                </div>
                <div class="col-sm">
                </div>
            </div>
        </div>
    )
}

export default Footer 