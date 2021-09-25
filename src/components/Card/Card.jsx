import React from 'react'
import plus from '../../assets/btnPlus.svg'
import btnCkecked from '../../assets/btnChecked.svg'
import heartIcon from '../../assets/heartIcon.svg'
import './Card.scss'

function Card({ title, price, imageUrl, onFavorite, onPlus }) {

  const [isAdded, setIsAdded ] = React.useState(false)

  const onClickPlus = () => {
    onPlus({title, price, imageUrl})
    setIsAdded(!isAdded)
  }

  return (
    <div className="card">
      <div className="favorite" onClick={onFavorite}>
        <img src={heartIcon} alt="heartIcon" />
      </div>
      <img className="kross" src={imageUrl} alt="kross" />
      <h5>{title}</h5>
      <div className="cena d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{price} сом</b>
        </div>
        <img src={isAdded ? btnCkecked : plus} alt="plusBtn" onClick={onClickPlus}/>
      </div>
    </div> 
  )
}

export default Card