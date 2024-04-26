import './main.css'
import './mainResponsive.css'
import { Link } from 'react-router-dom'
import mainImg from '../../assets/dish.png'
import mainImg2 from '../../assets/imgMev.png'
import mainImg3 from '../../assets/bgImg.png'
import responsiveImg2 from '../../assets/responsiveImg2.png'
import star from '../../assets/star.png'
import informationImg from '../../assets/informationImg.png'
import MainMenuCard from './MainMenuCard'
import { useContext, useState } from 'react'
import { AlarmClock, ChevronDown, ChevronLeft, ChevronRight,  MapPin, Phone } from 'lucide-react'
import Data from './MainData'
import MainMenuLinks from './MainMenuLinks'
import { AppContext } from '../../AppContext'
import Slider from "react-slick";
import galleryMainImg1 from '../../assets/galleryMainImg1.png'
import galleryMainImg2 from '../../assets/galleryMainImg2.png'
import galleryRightImg1 from '../../assets/galleryRightImg1.png'
import galleryRightImg2 from '../../assets/galleryRightImg2.png'
function Main(){

    const images =[galleryMainImg1, galleryMainImg2, galleryRightImg1, galleryRightImg2]

    const {setVisible} = useContext(AppContext)

    const [item, setItem] = useState(Data)
    const menuItems = [...new Set(Data.map((val) => val.category))]
    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.category === cat)
        setItem(newItems)
    }

    const showMoreItems = () =>{
        setVisible((prevValue) => prevValue + 8)
    }
    
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <ChevronRight className="coruselIcon" />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <ChevronLeft className="coruselIcon" />
          </div>
        );
      };
    
      const [imageIndex, setImageIndex] = useState(0);
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
    return(
        <div className="main">
            <div className="mainTop ">
                <div className="mainOne container">
                    <div className="mainTitle">
                        <div className="mainTitleName">
                            <h1>Ресторан</h1>
                            <h4>Кавказской кухни</h4>
                        </div>
                        <p className='mainDesc'>Добро пожаловать в "Хинкали DJAN" - место, где каждое блюдо рассказывает свою историю. Откройте для себя ароматы и вкусы кавказской кухни, уникальные и вдохновляющие.</p>
                        <div className="mainResponsiveImg">
                            <img src={responsiveImg2} alt="" />
                        </div>
                        <div className="mainBtn">
                            <button>ЗАБРОНИРОВАТЬ СТОЛ</button>
                        </div>
                    </div>
                </div>
                <div className="mainImg">
                    <img src={mainImg} alt="" />
                </div>
                <div className="mainIm2">
                    <img src={mainImg2} alt="" />
                </div>
                <div className="mainIm3">
                    <img src={mainImg3} alt="" />
                </div>
                
            </div>
            <div className="mainInformations container">
                <div className="mainInformation">
                    <h1 className='mainInformationTitle'>О нас</h1>
                    <div className="informationDesc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat est a elit tristique efficitur. Phasellus sodales lectus ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec pretium posuere enim, id tincidunt elit scelerisque vel. Etiam consectetur fermentum odio euismod ullamcorper.</p>
                        <p>Pellentesque at urna dui. Donec vestibulum maximus tempus. Donec vehicula, augue quis maximus vestibulum, arcu eros facilisis nunc, blandit fringilla enim elit vel odio. Nam ut turpis pretium, placerat lectus nec, placerat arcu. Nunc vehicula arcu vel mollis scelerisque. Nulla tincidunt at turpis vitae malesuada. Quisque in velit orci. Pellentesque sed consequat sapien.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat est a elit tristique efficitur. Phasellus sodales lectus ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec pretium posuere enim, id tincidunt elit scelerisque vel. Etiam consectetur fermentum odio euismod ullamcorper.</p>
                    </div>
                    <div className="degree">
                        <div className="degrees">
                            <div className="degreeCard">
                                <img src={star} alt="" />
                                <span>Lorem ipsum dolor sit amet, consectetur </span>
                            </div>
                            <div className="degreeCard">
                                <img src={star} alt="" />
                                <span>Lorem ipsum dolor sit amet, consectetur </span>
                            </div>
                            
                        </div>
                        <div className="degrees">
                            <div className="degreeCard">
                                <img src={star} alt="" />
                                <span>Lorem ipsum dolor sit amet, consectetur </span>
                            </div>
                            <div className="degreeCard">
                                <img src={star} alt="" />
                                <span>Lorem ipsum dolor sit amet, consectetur </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainInformationImg">
                    <img src={informationImg} alt="" />
                </div>
                <div className="slider">
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                             <img className="im" src={img} alt={img} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="mainMenu container">
                <h1 className='mainMenuTitle'> Наше меню </h1>
                <div className="mainMenuLinks">
                    <div className="mainMenuLink">
                        <MainMenuLinks 
                            menuItems={menuItems}
                            filterItems={filterItems}
                            setItem={setItem}
                        />
                    </div>
                </div>
                <div className="mainMenuCards">
                    <MainMenuCard item={item}/>         
                </div>
                <div className="loedMore">
                    <button onClick={showMoreItems}  className='mainMenuNewPage'>
                        <span>Показать еще</span>
                        <span className='mainPageIcon'><ChevronDown className='chevronIcon'/></span>
                    </button>
                </div>
                <div className="linkToMenu">
                    <Link className='linkToMenus' to="/menu">Смотреть меню полностью</Link>
                </div>
            </div>
            <div className="mainContact">
                <div className="mainContactCard container">
                    <div className="mainContactDesc">
                        <h1>Забронируйте стол</h1>
                        <span className='descSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat est a elit tristique efficitur</span>
                        <div className="mainContactInfo">
                            <Phone className='mainContactIcon'/>
                            <div className="mainInfo">
                                <span className='mainInfoSpan'>+7 (863) 283-27-37</span>
                                <span className='mainInfoSpan'>+7 (960) 470-88-82</span>
                            </div>
                        </div>
                        <div className="mainContactInfo">
                            <MapPin className='mainContactIcon'/>
                            <div className="mainInfo">
                                <span className='mainInfoSpan'>г. Ростов-на-Дону, ул. 8-я Линия, 1/37</span>
                                <span className='mainInfoSpan'>г. Ростов-на-Дону, пр. Коммунистический, 30</span>
                            </div>
                        </div>
                        <div className="mainContactInfo">
                            <AlarmClock className='mainContactIcon'/>
                            <div className="mainInfo">
                                <span className='mainInfoSpan'>Ежедневно | 12:00 — 00:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mainContactInputs">
                        <form>
                            <input className='mainInput' type="text" required placeholder='Имя'/>
                            <input className='mainInput' type="text" required placeholder='Номер телефона'/>
                            <input className='inputBtn' type="submit" value="ЗАБРОНИРОВАТЬ " />
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main