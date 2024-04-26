import "./information.css";
import "./informationResponsive.css";
import galleryRightImg1 from "../../assets/galleryRightImg1.png";
import galleryRightImg2 from "../../assets/galleryRightImg2.png";
import galleryRightImg3 from "../../assets/galleryRightImg3.png";
import galleryRightImg4 from "../../assets/galleryRightImg4.png";
import informationImg2 from "../../assets/informationImg2.png";
import Slider from "react-slick";
import React, { useState } from 'react';
import {AlarmClock, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";

const images =[galleryRightImg1, galleryRightImg2, galleryRightImg3, galleryRightImg4]

function Information() {

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
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="information">
      <div className="informationMain">
        <div className="informationPrimary container">
          <div className="informationPrimaryDesc">
            <h1>О ресторане</h1>
            <div className="informationParagraph">
              <p>
                Добро пожаловать в ресторан Хинкали Djan — место, где вы сможете
                насладиться настоящей кавказской и грузинской кухней. У нас вы
                найдете лучшие хинкали с сочным бульоном и правильным тестом,
                которые точно не оставят вас равнодушными. Мы также предлагаем
                шашлык собственного производства, который готовится на
                традиционном каменном мангале на живом огне — это настоящее шоу
                для гурманов! А если вы хотите попробовать что-то еще, то мы
                предлагаем вам ознакомиться с нашими национальными блюдами
                кавказской и грузинской кухни. Мы готовы порадовать вас свежими
                и качественными продуктами, а наши профессиональные повара
                подарят вам незабываемые вкусовые впечатления. Ждем вас в
                ресторане Хинкали Djan!
              </p>
              <p>
                В ресторане «Хинкали Djan» вы можете провести время за общением
                в компании или просто по-настоящему расслабиться после
                утомительного рабочего дня, в чём вам с удовольствием помогут
                наши отменные бармены и наше меню. Вам посоветуют напитки по
                вкусу и кошельку! Вам нужно лишь рассказать, что предпочитаете:
                крепость и вкус (сладкий или горьковатый). Чтобы ваш бокал не
                пустовал, мы предлагаем богатый выбор столовых и десертных вин
                из различных сортов винограда
              </p>
            </div>
          </div>
          <div className="informationImg2">
            <img src={informationImg2} alt="" />
          </div>
        </div>
      </div>
      <div className="informationCards container">
        <div className="informationCard">
          <h4>Уважение к традициям</h4>
          <p>
            Мы глубоко уважаем и ценим древние традиции кавказской кухни,
            передаваемые из поколения в поколение. Мы следуем классическим
            рецептам и техникам приготовления блюд, сохраняя их подлинный вкус и
            аутентичность
          </p>
          <div className="informationCardNum">01</div>
        </div>
        <div className="informationCard">
          <h4>Гостеприимная атмосфера</h4>
          <p>
            Наш ресторан — это не только место для трапезы, но и для создания
            особенной атмосферы. Мы стремимся предоставить нашим гостям теплое и
            гостеприимное пространство, наполненное аутентичностью и уютом.
          </p>
          <div className="informationCardNum">02</div>
        </div>
        <div className="informationCard">
          <h4>Поддержка культурного наследия</h4>
          <p>
            Мы гордимся тем, что представляем не только блюда, но и историю,
            традиции и культуру Кавказа. Мы стремимся поддерживать и
            популяризировать это богатое культурное наследие через наши
            кулинарные шедевры и атмосферу ресторана.
          </p>
          <div className="informationCardNum">03</div>
        </div>
        <div className="informationCard">
          <h4>Качество продуктов</h4>
          <p>
            Мы стремимся использовать только самые качественные ингредиенты,
            подобранные с заботой и вниманием. Наша цель — предоставить гостям
            блюда высочайшего качества, отражающие изысканность кавказской
            кулинарии.
          </p>
          <div className="informationCardNum">04</div>
        </div>
      </div>
      <div className="slides container">
        <h1 className="slidesTitle">Наши фото</h1>
        <Slider {...settings} className="slider1">
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img className="im" src={img} alt={img} />
            </div>
          ))}
        </Slider>
        <Slider {...settings2} className="slider2">
          <div className="sliderDiv">
            <img src={galleryRightImg1} alt="" />
          </div>
          <div className="sliderDiv">
            <img src={galleryRightImg2} alt="" />
          </div>
          <div className="sliderDiv">
            <img src={galleryRightImg3} alt="" />
          </div>
          <div className="sliderDiv">
            <img src={galleryRightImg4} alt="" />
          </div>
        </Slider>
      </div>
      <div className="informationContact">
        <div className="informationContactCard container">
          <div className="informationContactDesc">
              <h1>Забронируйте стол</h1>
              <span className='descSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat est a elit tristique efficitur</span>
              <div className="informationContactInfo">
                  <Phone className='informationContactIcon'/>
                  <div className="informationInfo">
                      <span>+7 (863) 283-27-37</span>
                      <span>+7 (960) 470-88-82</span>
                  </div>
              </div>
              <div className="informationContactInfo">
                  <MapPin className='informationContactIcon'/>
                  <div className="informationInfo">
                      <span>г. Ростов-на-Дону, ул. 8-я Линия, 1/37</span>
                      <span>г. Ростов-на-Дону, пр. Коммунистический, 30</span>
                  </div>
              </div>
              <div className="informationContactInfo">
                  <AlarmClock className='informationContactIcon'/>
                  <div className="informationInfo">
                      <span>Ежедневно | 12:00 — 00:00</span>
                  </div>
              </div>
          </div>
          <div className="informationContactInputs">
              <form>
                  <input className='informationInput' type="text" required placeholder='Имя'/>
                  <input className='informationInput' type="text" required placeholder='Номер телефона'/>
                  <input className='inputBtn' type="submit" value="ЗАБРОНИРОВАТЬ " />
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
