import Card from '../components/Card'

import searchIcon from '../assets/search.svg'
import btnRemove from '../assets/btnRemove.svg'

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onFavorite,
  onAddToCart,
  isLoading
  }) 
{
  const renderItems = () => {

    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (isLoading ? [...Array(20)] : filteredItems).map((item) => (
    <Card
      
      onFavorite={(obj) => onFavorite(obj)}
      onPlus={(obj) => onAddToCart(obj)}
      added={cartItems.some(obj => +obj.id === +item.id)}
      loading={isLoading}
      {...item}
  />
  ))
  }

  return (
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
        renderItems()
      }
    </div>
  </div>
  )
}

export default Home

