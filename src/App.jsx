import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import axios from 'axios';
import Basket from './components/Basket';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [ items, setItems] = React.useState([])
  const [ cartItems, setCartItems] = React.useState([])
  const [ favorites, setFavorites] = React.useState([])
  const [ searchValue, setSearchValue] = React.useState('')
  const [ cartOpened, setCartOpened ] = React.useState(false)
  const [ isLoading, setIsLoading ] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {

      setIsLoading(true)

      const itemsResponse = await axios.get('https://61433babc8700e00178d01d8.mockapi.io/items')
      const cartResponse = await axios.get('https://61433babc8700e00178d01d8.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://61433babc8700e00178d01d8.mockapi.io/favorites')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    try {
      if(cartItems.find(item => +item.id === +obj.id)) {
        axios.delete(`https://61433babc8700e00178d01d8.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => +item.id !== +obj.id))
      } else {
        axios.post('https://61433babc8700e00178d01d8.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    } catch (error) {
      alert("Не удалось добавить в корзину!")
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61433babc8700e00178d01d8.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = e => {
    setSearchValue(e.target.value)
  }

  const onFavorite = async (obj) => {
    try {
      if(favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://61433babc8700e00178d01d8.mockapi.io/favorites/${obj.id}`)
        // setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://61433babc8700e00178d01d8.mockapi.io/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты!")
    }
  }
  
  return (
    <div className="wrapper clear">
      {
      cartOpened && 
      <Basket 
        onRemove={onRemoveItem}
        onClose = { () => setCartOpened(false)}
        items = {cartItems}
        />
        }
      <Header 
        onClickBasket = { () => setCartOpened(true) }
        />

      <Route path="/" exact>
        <Home 
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onFavorite={onFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          items={favorites}
          onFavorite={onFavorite}
        />
      </Route>
    </div>
  );
}

export default App;
