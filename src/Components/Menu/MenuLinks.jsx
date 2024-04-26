import { ChevronDown } from 'lucide-react';
import Data from '../Main/MainData';
import './menu.css'
function MenuLinks({menuItems, filterItems, setItem}) {
  return (
    <>
      {menuItems.map(val => (
        
        <button onClick={() => filterItems(val)} className='mainButton'>
            
            {val}
        </button>
      ))
        
      }
      <button className='mainButton'  onClick={() => setItem(Data)}>
        All
      </button>
    </>
  );
}

export default MenuLinks;
