import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.svg'
import user from '../../assets/user.svg'
import heart from '../../assets/heart.svg'
import './Header.scss'

function Header({onClickBasket}) {
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
            <img src={cart} alt="Cart"/>
            <span>1205 сом</span>
          </li>
          <li className="mr-20 cu-p">
            <Link 
              to="/favorites">
                <img src={heart}
                alt="heart"/>
              </Link>
          </li>
          <li>
            <img src={user} alt="user"/>
          </li>
        </ul>
      </header>
  )
}

export default Header;