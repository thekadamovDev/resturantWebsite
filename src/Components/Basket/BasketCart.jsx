import { Minus, Plus, X } from "lucide-react";
import "./basket.css";
import './basketResponsive.css'

import menuImg1 from "../../assets/menuImg1.png";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";

function BasketCart() {
  const { cart, setCart, handleChange } = useContext(AppContext);
  

  const handleRemove = (id) =>{
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice()
  }



  return (
    <div className="basketCart">
      {cart.map((item) => (
        <div className="basketCard">
          <div className="basketCardOne">
            <img src={item.img} alt="" />
            <div className="basketCardName">
              <span className="basketCardTitle">{item.name}</span>
              <span className="basketCardTitle2">{item.weight} г.</span>
            </div>
          </div>
            
          <div className="basketCardTwo">
            <div className="basketBtns">
              <button className="basketMinusBtn" onClick={() => handleChange(item, -1)}>
                <Minus className="basketIcon1" />
              </button>
              <button className="basketNumBtn">{item.count}</button>
              <button className="basketPlusBtn" onClick={() => handleChange(item, +1)}>
                <Plus className="basketIcon2" />
              </button>
            </div>
            <span className="basketCardPrice">{item.price} ₽</span>
            <button className="basketDeleteBtn" onClick={()=> handleRemove(item.id)}>
              <X 
                style={{
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
            <div className="basketResponsiveCard">
                <div className="basketCardName">
                    <span className="basketCardTitle">{item.name}</span>
                    <span className="basketCardTitle2">{item.weight} г.</span>
                </div>
                <div className="basketBtns">
                  <button className="basketMinusBtn" onClick={() => handleChange(item, -1)}>
                    <Minus className="basketIcon1" />
                  </button>
                  <button className="basketNumBtn">{item.count}</button>
                  <button className="basketPlusBtn" onClick={() => handleChange(item, +1)}>
                    <Plus className="basketIcon2" />
                  </button>
                </div>
                <span className="basketCardPrice">{item.price} ₽</span>
                <button className="basketDeleteBtn" onClick={()=> handleRemove(item.id)}>
                  <X 
                    style={{
                      color: "#fff",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                  />
                </button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default BasketCart;
