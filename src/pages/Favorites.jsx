import React from 'react'
import Card from '../components/Card'
import { AppContext } from '../App'

// import searchIcon from '../assets/search.svg'
// import btnRemove from '../assets/btnRemove.svg'

function Favorites({ onFavorite }) {
  const { favorites } = React.useContext(AppContext)

  return (
    <div className="content p-40">
    <div className="d-flex justify-between align-center mb-40">
    <h1>Мои закладки</h1>
    </div>
    <div className="sneakers">
      {
        favorites.map((item) => (
        <Card 
          key={item.id}
          favorited={true}
          onFavorite={onFavorite}
          {...item}
        />
        ))
      }
    </div>
  </div>
  )
}

export default Favorites