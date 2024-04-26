import './app.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AppContext } from './AppContext'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Basket from './Components/Basket/Basket'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Menu from './Components/Menu/Menu'
import Information from './Components/Information/Information'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Modal from 'react-modal';
import modalImg from '../src/assets/modalImg.png'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex:'999',
  },
};
function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [cart, setCart] = useState([])

  function handleClick(item){
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
      isPresent = true;
    });
    if(isPresent)
    return ;
  setCart([...cart, item])
  }
  
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if(data.id === item.id)
        ind = index
    })
    
    const tempArr = cart;
    tempArr[ind].count += d;

    if(tempArr[ind].count === 0)
        tempArr[ind].count = 1;
      setCart([...tempArr])
  }

  const[visible, setVisible] = useState(8)

  return (
    <BrowserRouter>
      <AppContext.Provider value={{handleClick, cart, setCart, handleChange, visible, setVisible, openModal}}>
        {/* <Router> */}
          <div className='app'>
            <Navbar size={cart.length}/>
              <Routes>
                <Route path='/' element={<Main/>}/> 
                <Route path='/basket' element={<Basket/>} /> 
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/information' element={<Information/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
          </div>
          <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="modals">
                  <div className="modalTitle">
                    <h1>Спасибо <br /> за заказ!</h1>
                    <p>Мы свяжемся с вами в течении 5 минут для уточнения всех деталей</p>
                    {/* <Link className='modalBtn' to="/">НА ГЛАВНУЮ</Link> */}
                  </div>
                  <div className="modalImg">
                    <img src={modalImg} alt="" />
                  </div>
                </div>
              </Modal>
            <Footer/>
        {/* </Router> */}
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
