import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import axios from 'axios';
import searchIcon from './assets/search.svg'
import Basket from './components/Basket';
import btnRemove from './assets/btnRemove.svg'

function App() {
  const [ items, setItems] = React.useState([])
  const [ cartItems, setCartItems] = React.useState([])
  const [ searchValue, setSearchValue] = React.useState('')
  const [ cartOpened, setCartOpened ] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://61433babc8700e00178d01d8.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios.get('https://61433babc8700e00178d01d8.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://61433babc8700e00178d01d8.mockapi.io/cart', obj)
    setCartItems([...cartItems, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61433babc8700e00178d01d8.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = e => {
    setSearchValue(e.target.value)
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
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="searchBlock d-flex">
          <img src={searchIcon} alt="Search" />
          {searchValue && <img 
                onClick={() => setSearchValue('')}
                className="removeBtn cleara" 
                src={btnRemove} 
                alt="clear" />}
          <input value={searchValue} onChange={onChangeSearchInput} type="text" placeholder="Поиск ..."/>
        </div>
        </div>
        <div className="sneakers">
          {
            items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => (
              <Card 
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                key={item.id}
                onFavorite={() => console.log('papka')}
                onPlus={(obj) => onAddToCart(obj)}
            />
            ))
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
