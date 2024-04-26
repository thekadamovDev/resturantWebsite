import { ArrowRight, ChevronRight } from 'lucide-react';
import Data from '../Main/MainData';
import './menu.css'
function MenuLinkResponsive({menuItems, filterItems, setItem}) {
  return (
    <>
      {menuItems.map(val => (
        
        <button onClick={() => filterItems(val)} className='mainButton2'>
            
            {val}
            <ArrowRight className='arrowRightIcon'/>
        </button>
      ))
        
      }
      <button className='mainButton2'  onClick={() => setItem(Data)}>
        All
      </button>
    </>
  );
}

export default MenuLinkResponsive;
