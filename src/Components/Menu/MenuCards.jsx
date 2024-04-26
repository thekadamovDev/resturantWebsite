import { useContext, useEffect } from "react";
import "./menu.css";
import { AppContext } from "../../AppContext";
function MenuCards({ item }) {
  const {handleClick} = useContext(AppContext)
  
  return (
    <>
      {item.map((val) => (
        <div key={val.id} className="mainMenuCard">
          <img src={val.img} alt="" />
          <h5>{val.name}</h5>
          <span className="menuW">{val.weight} г.</span>
          <div className="mainMenuBottom">
            <span>{val.price} ₽</span>
            <button onClick={() => handleClick(val)} >Заказать</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MenuCards;
