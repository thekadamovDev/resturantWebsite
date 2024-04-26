
import Data from './MainData';
import './main.css'
function MainMenuLinks({menuItems, filterItems, setItem}) {
    
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

export default MainMenuLinks;
