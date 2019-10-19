import React from 'react';
import './Contact.css'
import { SocialIcon } from 'react-social-icons';

     
export default class Contact extends React.Component {
        render() {
        return (
            <div className="container-fluid text-white">
                <div className="row">
                <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <h2 className="text-left">Näin saavut hiedanrantaan</h2>
                        <h3 className="text-left">Kävellen ja pyörällä</h3>
                        <p className="text-left">Kävely- ja pyörätie kulkee Paasikiventien alikulkutunnelilta Lielahden kartanolle ja siitä eteenpäin Niemenrantaan. Kävelijät ja pyöräilijät pääsevät edelleen myös Lielahden kauppa-alueen läpi Lielahdenkadulle, josta käännytään Hiedanrantaan ja tehdasalueelle.<br/><br/>Hiedanrannassa on käytössä muutama EasyBike-pyörä Paasikiventien päädyssä, kartanolla sekä Kuivaamolla.</p>
                        <h3 className="text-left">Bussilla</h3>
                        <p className="text-left">Lielahden kartanoa lähin pysäkki on Paasikiventiellä ja se on nimeltään Hiedanranta. Pysäkille pysähtyvät Joukkoliikenteen linjat ovat 3, 14, 21, 28, 37, 71, 80 ja 85. Pysäkiltä on matkaa Kartanolle noin 700 metriä.</p>
                        <h3 className="text-left">Autolla</h3>
                        <p className="text-left">Hiedanrantaan pääsee ajamaan autolla ainoastaan Lielahdenkadun kautta. Hiedanrannan alueella on jonkin verran pysäköintitilaa arkikäyttöön. Suurten yleisötapahtumien aikana pysäköinti Hiedanrannan alueella on haasteellista, joten suosittelemme saapumaan silloin julkisilla, pyörällä tai kävellen.</p>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <h1>Yhteystiedot</h1>
                        <p className="text-center">Hiedanrannan Paja <br/>Tehdaskartanonkatu 28 <br/> hiedanrannanpaja@gmail.com</p>
                        <SocialIcon className="facebook" url="http://facebook.com/hiedanrannan.paja" />
                        <SocialIcon className="instagram" url="https://www.instagram.com/hiedanrannan_paja/" />
                    </div>
                </div>
            </div>
        )
    }
}
