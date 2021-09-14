import logo from '../../assets/logo.png'
import cart from '../../assets/cart.svg'
import user from '../../assets/user.svg'
import './Header.scss'

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="logo" src={logo} />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src={cart}/>
            <span>1205 сом</span>
          </li>
          <li>
            <img src={user}/>
          </li>
        </ul>
      </header>
  )
}

export default Header;