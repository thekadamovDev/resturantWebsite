import './basket.css'
import './basketResponsive.css'
import { useContext, useEffect, useState } from 'react';
import BasketCart from './BasketCart'
import { AppContext } from '../../AppContext';

function Basket(){
    const { cart, openModal} = useContext(AppContext);
    const [price, setPrice] = useState(0);


    const handlePrice = () =>{
        let num = 0;
        cart.map((item) => {
            num += item.count * item.price
        });
        setPrice(num)
    }

    useEffect(() => {
      handlePrice();
    })

    
    
    return(
        <div className="basket">
            <div className="basketMain container">
                <h1>Корзина</h1>
                <div className="basketCards">
                    <BasketCart/>
                </div>
                <div className="basketDesc">
                    <p>Оставьте свои данные и мы свяжемся с вами для уточнения деталей заказа. Обратите внимание, что оплата заказа осуществляется при получении</p>
                    <span>ВСЕГО К ОПЛАТЕ: {price} ₽</span>
                </div>
                <div className="basketInputs">
                    <form >
                        <input className='input' required    type="text" placeholder='Имя'  />
                        <input className='input' required type="text" placeholder='Номер телефона' />
                        <input className='input' required type="text" placeholder='Адрес доставки'  />
                        <input className='basketInputBtn' onClick={openModal} type="submit" value="заказать" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Basket