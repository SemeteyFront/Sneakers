import React from 'react'
import plus from '../../assets/btnPlus.svg'
import btnCkecked from '../../assets/btnChecked.svg'
import ContentLoader from "react-content-loader"
import heartIcon from '../../assets/heartIcon.svg'
import heartLiked from '../../assets/heartLiked.svg'
import './Card.scss'
import { AppContext } from '../../App'

function Card({ id ,title, price, imageUrl, onFavorite, onPlus, favorited = false, loading = false }) {

  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite ] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({ id ,title, price, imageUrl})
  }

  const onClickLiked = () => {
    onFavorite({ id ,title, price, imageUrl})
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="card">
      {
        loading ? <ContentLoader
          speed={2}
          width={175}
          height={265}
          viewBox="0 0 175 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="175" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="175" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="142" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> :
        <>
          <div className="favorite" onClick={onClickLiked}>
            <img src={isFavorite ? heartLiked : heartIcon} alt="heartIcon" />
          </div>
          <img className="kross" src={imageUrl} alt="kross" />
          <h5>{title}</h5>
          <div className="cena d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <p>Цена:</p>
              <b>{price} сом</b>
            </div>
            <img src={isItemAdded(id) ? btnCkecked : plus} alt="plusBtn" onClick={onClickPlus}/>
          </div> 
        </>
      }
    </div> 
  )
}

export default Card




