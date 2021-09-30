import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import baskets from '../../assets/baskets.png'
import users from '../../assets/users.png'
import hearts from '../../assets/hearts.png'
import './Header.scss'
import { AppContext } from '../../App'

function Header({onClickBasket}) {
  const { cartItems } = React.useContext(AppContext)

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return (
    <header className="d-flex justify-between align-center p-40">
        <Link to="/">
          <div className="d-flex align-center">
            <img className="logo" src={logo} alt="logoType"/>
            <div>
              <h3 className="text-uppercase">REACT SNEAKERS</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={onClickBasket} className="mr-30 cu-p">
            <img style={{width: 20, height: 20}} src={baskets} alt="Cart"/>
            <span>{ totalPrice } сом</span>
          </li>
          <li className="mr-20 cu-p">
            <Link 
              to="/favorites">
                <img style={{width: 20, height: 20}} src={hearts}
                alt="heart"/>
              </Link>
          </li>
          <li>
            <Link to="/orders">
              <img style={{width: 20, height: 20}} src={users} alt="user"/>
            </Link>
          </li>
        </ul>
      </header>
  )
}

export default Header;