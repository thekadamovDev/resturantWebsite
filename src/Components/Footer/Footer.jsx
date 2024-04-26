import "./footer.css";
import "./footerResponsive.css";
import logo from '../../assets/logo.png'
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footerMain container">
        <div className="footerLogo">
          <img src={logo} alt="" />
        </div>
        <div className="footerLinks">
          <ul className="ul">
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/menu">Меню</Link>
            </li>
            <li>
              <Link to="/information">О ресторане</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
            <li>
              <a href="/contact">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="FooterInformations">
          <div className="footerInfoCont">
            <Phone className="phoneIcon" />
            <span>000-000-000</span>
          </div>
          <div className="footerInfoCont">
            <MapPin className="phoneIcon" />
            <span>Новосибирск, улица</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
