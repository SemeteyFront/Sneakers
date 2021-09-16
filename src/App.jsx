import Card from './components/Card';
import Header from './components/Header';
import searchIcon from './assets/search.svg'
import Basket from './components/Basket';
import k1 from './assets/k1.jpg'
import k2 from './assets/k2.jpg'
import k3 from './assets/k3.jpg'
import k4 from './assets/k4.jpg'

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999, 
    imageUrl:k1,
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270', 
    price: 11599, 
    imageUrl:k2,
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede', 
    price: 8499, 
    imageUrl:k3,
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider', 
    price: 8999, 
    imageUrl: k4,
  },
]

function App() {
  return (
    <div className="wrapper clear">
      {/* <Basket /> */}
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
        <h1>Все кроссовки</h1>
        <div className="searchBlock d-flex">
          <img src={searchIcon} alt="Search" />
          <input type="text" placeholder="Поиск ..."/>
        </div>
        </div>
        <div className="sneakers">
          {
            arr.map((obj) => (
              <Card 
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            />
            ))
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
