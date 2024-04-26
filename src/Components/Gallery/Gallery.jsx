import './gallery.css'
import './galleryResponsive.css'
import galleryLeftImg1 from '../../assets/galleryImgLeft1.png'
import galleryLeftImg2 from '../../assets/galleryImgLeft2.png'
import galleryLeftImg3 from '../../assets/galleryImgLeft3.png'
import galleryLeftImg4 from '../../assets/galleryImgLeft4.png'
import galleryMainImg1 from '../../assets/galleryMainImg1.png'
import galleryMainImg2 from '../../assets/galleryMainImg2.png'
import galleryMainImg3 from '../../assets/galleryMainImg3.png'
import galleryMainImg4 from '../../assets/galleryMainImg4.png'
import galleryRightImg1 from '../../assets/galleryRightImg1.png'
import galleryRightImg2 from '../../assets/galleryRightImg2.png'
import galleryRightImg3 from '../../assets/galleryRightImg3.png'
import galleryRightImg4 from '../../assets/galleryRightImg4.png'
import { AlarmClock, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
function Gallery(){
    const[leadMoreImg, setLeadMoreImg] = useState(4)
    const showMoreItem = () =>{
        setLeadMoreImg((prevValue) => prevValue + 8)
    }
    const [galleryData, setGalleryData] = useState([
        {
            id:1,
            img: galleryLeftImg1
        },
        {
            id:2,
            img: galleryLeftImg2
        },
        {
            id:3,
            img: galleryLeftImg3
        },
        {
            id:4,
            img: galleryLeftImg4
        },
        {
            id:5,
            img: galleryMainImg1
        },
        {
            id:6,
            img: galleryLeftImg2
        },
        {
            id:7,
            img: galleryLeftImg3
        },
        {
            id:8,
            img: galleryLeftImg4
        },
        {
            id:9,
            img: galleryRightImg1
        },
        {
            id:10,
            img: galleryLeftImg2
        },
        {
            id:11,
            img: galleryLeftImg3
        },
        {
            id:12,
            img: galleryLeftImg4
        }
    ])
    return(
        <div className="gallery container">
            <div className="galleryMain galleryMainRes">
                <div className="galleryMain2">
                    <div className="galleryLeftImages">
                        <div className="galleryImg">
                            <img src={galleryLeftImg1} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryLeftImg2} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryLeftImg3} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryLeftImg4} alt="" />
                        </div>
                    </div>
                    <div className="galleryMainImages">
                        <h1>Галерея</h1>
                        <div className="galleryImg">
                            <img src={galleryMainImg1} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryMainImg2} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryMainImg3} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryMainImg4} alt="" />
                        </div>
                    </div>
                    <div className="galleryRightImages">
                        <div className="galleryImg">
                            <img src={galleryRightImg1} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryRightImg2} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryRightImg3} alt="" />
                        </div>
                        <div className="galleryImg">
                            <img src={galleryRightImg4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="leadMoreResponsiveImages">
                    <h1 className='leadMoreResTitle'>Галерея</h1>
                    <div className="leadMoreResImg">
                        {
                            galleryData.slice(0, leadMoreImg).map((galleryImgs) => (
                                <div key={galleryImgs.id} className="galleryImg2">
                                    <img src={galleryImgs.img} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="galleryShowMoreBtn">
                    <button onClick={showMoreItem}>Показать еще</button>
                </div>
            </div>
            <div className="galleryContact">
                <div className="galleryContactCard container">
                    <div className="galleryContactDesc">
                        <h1>Забронируйте стол</h1>
                        <span className='descSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat est a elit tristique efficitur</span>
                        <div className="galleryContactInfo">
                            <Phone className='galleryContactIcon'/>
                            <div className="galleryInfo">
                                <span>+7 (863) 283-27-37</span>
                                <span>+7 (960) 470-88-82</span>
                            </div>
                        </div>
                        <div className="galleryContactInfo">
                            <MapPin className='galleryContactIcon'/>
                            <div className="galleryInfo">
                                <span>г. Ростов-на-Дону, ул. 8-я Линия, 1/37</span>
                                <span>г. Ростов-на-Дону, пр. Коммунистический, 30</span>
                            </div>
                        </div>
                        <div className="galleryContactInfo">
                            <AlarmClock className='galleryContactIcon'/>
                            <div className="galleryInfo">
                                <span>Ежедневно | 12:00 — 00:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="galleryContactInputs">
                        <form>
                            <input className='galleryInput' type="text" required placeholder='Имя'/>
                            <input className='galleryInput' type="text" required placeholder='Номер телефона'/>
                            <input className='inputBtn' type="submit" value="ЗАБРОНИРОВАТЬ " />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery
