import React from 'react'
import { AppContext } from '../../App'
import './Basket.scss'
import btnRemove from '../../assets/btnRemove.svg'
import arrow from '../../assets/arrow.svg'
import emptyCard from '../../assets/empty-cart.png'
import oform from '../../assets/oform.jpg'
import Info from '../Info/Info'


function Basket({onClose, onRemove, items = []}) {
  const { setCartItems } = React.useContext(AppContext)
  const [ isOrderComplete, setIsOrderComplete ] = React.useState(false)

  const onClickOrder = () => {
    setIsOrderComplete(true)
    setCartItems([])
  }

  return (
    <div>
      <div className="overlay" onClick={onClose} />
      <div className="basket">
        <h2 className="d-flex justify-between mb-30">
          Корзина 
          <img 
            onClick={onClose} 
            className="cu-p removeBtn" 
            src={btnRemove} 
            alt="btnRemove" />
        </h2>

        {
          items.length > 0 ? 
          <div className="product">
            <div className="items">
          {items.map( obj => 
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <div
                  style={{backgroundImage: `url(${obj.imageUrl})`}} 
                  className="cartItemImg"></div>
  
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} сом</b>
                </div>
                <img 
                  key={obj.id}
                  onClick={() => onRemove(obj.id)}
                  className="removeBtn" 
                  src={btnRemove} 
                  alt="btnRemove" />
              </div>
          )}
          </div>
          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 сом </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 сом </b>
            </li>
          </ul>
          <button onClick={onClickOrder} className="greenBtn">Оформить заказ <img src={arrow} alt="arrow" /></button>
        </div>
          </div>
          :
          <Info 
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={isOrderComplete ? "Ваш заказ #13 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isOrderComplete ? oform : emptyCard}>
          </Info>
        }
      </div>
    </div>
  )
}

export default Basket