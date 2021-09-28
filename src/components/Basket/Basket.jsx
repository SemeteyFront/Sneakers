import './Basket.scss'
import btnRemove from '../../assets/btnRemove.svg'
import arrow from '../../assets/arrow.svg'
import emptyCard from '../../assets/empty-cart.png'


function Basket({onClose, onRemove, items = []}) {
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
          <button className="greenBtn">Оформить заказ <img src={arrow} alt="arrow" /></button>
        </div>
          </div>
          :
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img src={emptyCard} alt="empty" className="mb-20" />
          <h2>Корзина пустая</h2>
          <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button onClick={onClose} className="greenBtn">
            <img className="nazad" src={arrow} alt="arrow" />
            Вернуться назад
          </button>
        </div>
        }
      </div>
    </div>
  )
}

export default Basket