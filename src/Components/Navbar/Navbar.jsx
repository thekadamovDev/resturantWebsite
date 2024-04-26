import { MapPin, Menu, Phone, ShoppingCart, XIcon } from 'lucide-react'
import './navbar.css'
import './navbarResponsive.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Navbar({size}){
    const [menu, openMenu] = useState(false)
    return(
        <div className="navbar">
            <div className="navbarMain container">
                <div className="navbarInformations">
                    <img src={logo} alt="" />
                    <div className="navbarContcats">
                        <Phone className='phoneIcon'/>
                        <span>000-000-000</span>
                    </div>
                </div>
                <div className="navbarLinks">
                    <ul className='ul'>
                        <li><Link className="navLink" to="/">Главная</Link></li>
                        <li><Link className="navLink" to="/menu">Меню</Link></li>
                        <li><Link className="navLink" to="/information">О ресторане</Link></li>
                        <li><Link className="navLink" to="/gallery">Галерея</Link></li>
                        <li><Link className="navLink" to="/contact">Контакты</Link></li>
                    </ul>
                </div>
                <Link to='/basket' className="navbarChoppingCart">
                    <button className='navbarChoppingCartBtn'><ShoppingCart className='shoppingCartIcon'/></button>
                    <span className='navbarChoppingCartNum'>{size}</span>
                </Link>
                <button onClick={openMenu} className="burgerMenu">
                    <Menu className='menuIcon'/>
                </button>
                <div className={ "openMenu " + (menu ? 'open' : 'close') }>
                    <button onClick={() => openMenu()} className="closeMenu">
                        <XIcon className='c'/>
                    </button>
                    <div className="burgerMenuLinks2">
                        <ul className='ul2'>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/menu">Меню</Link></li>
                            <li><Link to="/information">О ресторане</Link></li>
                            <li><Link to="/gallery">Галерея</Link></li>
                            <li><Link to="/contact">Контакты</Link></li>
                        </ul>
                    </div>
                    <Link to='/basket' className="navbarChoppingCart2">
                        <button className='navbarChoppingCartBtn2'><ShoppingCart className='shoppingCartIcon'/></button>
                        <span className='navbarChoppingCartNum'>{size}</span>
                    </Link>
                    <div className="navbarContcats2">
                        <Phone className='phoneIcon'/>
                        <span>000-000-000</span>
                    </div>
                    <div className="navbarContcats2">
                        <MapPin className='mapIcon'/>
                        <span>Новосибирск, улица</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar