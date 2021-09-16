import './Basket.scss'
import k1 from '../../assets/k1.jpg'
import btnRemove from '../../assets/btnRemove.svg'
import arrow from '../../assets/arrow.svg'

function Basket() {
  return (
    <div className="overlay">
      <div className="basket">
        <h2 className="d-flex justify-between mb-30">Корзина <img  className="cu-p removeBtn" src={btnRemove} alt="btnRemove" /></h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: `url(${k1})`}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 сом</b>
            </div>
            <img className="removeBtn" src={btnRemove} alt="btnRemove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: `url(${k1})`}} className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 сом</b>
            </div>
            <img className="removeBtn" src={btnRemove} alt="btnRemove" />
          </div>
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
    </div>
  )
}

export default Basket