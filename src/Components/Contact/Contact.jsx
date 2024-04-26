import './contact.css'
import './contactResponsive.css'
import { AlarmClock, MapPin, Phone } from 'lucide-react'
import contactImg from '../../assets/galleryRightImg2.png' 
function Contact(){
    return(
        <div className="contact container">
            <div className="contactMain">
                <div className="contactDesc">
                    <h1>ДОРОГИЕ ГОСТИ!</h1>
                    <p>Ждем вас!Приходите и вы будете приятно удивлены!</p>
                    <div className="contactInfo">
                        <Phone className='contactIcons'/>
                        <div className="contactInfoTitle">
                            <span>+7 (863) 283-27-37</span>
                            <span>+7 (960) 470-88-82</span>
                        </div>
                    </div>
                    <div className="contactInfo">
                        <MapPin className='contactIcons'/>
                        <div className="contactInfoTitle">
                            <span>г. Ростов-на-Дону, ул. 8-я Линия, 1/37</span>
                            <span>г. Ростов-на-Дону, пр. Коммунистический, 30</span>
                        </div>
                    </div>
                    <div className="contactInfo">
                        <AlarmClock className='contactIcons'/>
                        <div className="contactInfoTitle">
                            <span>Ежедневно | 12:00 — 00:00</span>
                        </div>
                    </div>
                </div>
                <div className="contactImg">
                    <img src={contactImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact