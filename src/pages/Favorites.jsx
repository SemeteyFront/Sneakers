import React from 'react'
import Card from '../components/Card'
import { AppContext } from '../App'
import sorry from '../assets/sorry.jpg'

// import searchIcon from '../assets/search.svg'
// import btnRemove from '../assets/btnRemove.svg'

function Favorites({ onFavorite }) {
  const { favorites } = React.useContext(AppContext)
  console.log(favorites)
  return (
    <div className="content p-40">
    <div className="d-flex justify-between align-center mb-40">
    <h1>Мои закладки</h1>
    </div>
  { [].length === 0 ?
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
    :
    <center>
      <div>
        <img style={{width: 200, marginTop: 120, borderRadius: 50}} src={sorry} alt="" />
        <h3 style={{ marginTop: 20}}>Закладок нет :(</h3>
        <p style={{color: '#cc6a6a', marginTop: 20}}>Вы ничего не добавляли в закладки</p>
      </div>
    </center>
    }
    
  </div>
  )
}

export default Favorites