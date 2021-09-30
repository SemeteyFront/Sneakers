import React from 'react'
import axios from 'axios'
import { AppContext } from '../../App'
import './Basket.scss'
import btnRemove from '../../assets/btnRemove.svg'
import arrow from '../../assets/arrow.svg'
import emptyCard from '../../assets/empty-cart.png'
import oform from '../../assets/oform.png'
import Info from '../Info/Info'




function Basket({onClose, onRemove, items = []}) {
  const { cartItems, setCartItems } = React.useContext(AppContext)
  const [ orderId, setOrdeId ] = React.useState(null)
  const [ isOrderComplete, setIsOrderComplete ] = React.useState(false)
  const [ isLoading, setIsLoading ] = React.useState(false)
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      await axios.post('https://61433babc8700e00178d01d8.mockapi.io/orders', {
        items : cartItems
      })
      const {data} = await axios.post('https://61433babc8700e00178d01d8.mockapi.io/cart', [])
      setOrdeId(data.id)
      setIsOrderComplete(true)
      setCartItems([])

      
    } catch (error) {
      alert("Не удалось создать заказ!")
    }
    setIsLoading(false)
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
              <b>{totalPrice} сом </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>{totalPrice / 100 * 5} сом </b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className="greenBtn">Оформить заказ <img src={arrow} alt="arrow" /></button>
        </div>
          </div>
          :
          <Info 
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isOrderComplete ? oform : emptyCard}>
          </Info>
        }
      </div>
    </div>
  )
}

export default Basket