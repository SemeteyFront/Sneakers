import React from 'react'
import { AppContext } from '../../App'
import arrow from '../../assets/arrow.svg'

const Info = ({ title, image,  description }) => {
  const { setCartOpened } = React.useContext(AppContext)
  
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img src={image} alt="empty" className="mb-20" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenBtn">
        <img className="nazad" src={arrow} alt="arrow" />
        Вернуться назад
      </button>
    </div>
  )
}

export default Info
