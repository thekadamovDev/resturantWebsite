import { useState } from 'react'
import './menu.css'
import './menuResponsive.css'
import Data from '../Main/MainData'
import MenuLinks from './MenuLinks'
import MenuCards from './MenuCards'
import MenuLinkResponsive from './MenuLinkResponsive'

function Menu(){
    const [item, setItem] = useState(Data)
    const menuItems = [...new Set(Data.map((val) => val.category))]
    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.category === cat)
        setItem(newItems)
    }
    return(
        <div className="menu container">
            <h1 className='menuTitle'> Наше меню </h1>
                <div className="menuLinks">
                    <div className="menuLink">
                        <MenuLinks 
                            menuItems={menuItems}
                            filterItems={filterItems}
                            setItem={setItem}
                        />
                    </div>
                    <div className="menuLinkResponsive">
                        <MenuLinkResponsive
                            menuItems={menuItems}
                            filterItems={filterItems}
                            setItem={setItem}
                        />
                    </div>
                </div>
                <div className="menuCards">
                    <MenuCards item={item}/>
                </div>
        </div>
    )
}

export default Menu