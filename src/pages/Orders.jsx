import React from 'react'
import Card from '../components/Card'
import basket from '../assets/basket.png'
import axios from 'axios'
const { useEffect, useState } = React

// import searchIcon from '../assets/search.svg'
// import btnRemove from '../assets/btnRemove.svg'

function Orders() {
  const [ orders, setOrders ] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://61433babc8700e00178d01d8.mockapi.io/orders')
      setOrders(data)
      console.log(data)
    })()
  }, [])

  return (
    <div className="content p-40">
    <div className="d-flex justify-between align-center mb-40">
    <h1>Мои заказы</h1>
    </div>
    {orders.length <= 0 ? 
      <center>
      <div>
        <img style={{width: 200, marginTop: 120}} src={basket} alt="" />
        <h3 style={{ marginTop: 20}}>У вас нет заказов</h3>
        <p style={{color: '#cc6a6a', marginTop: 20}}>Оформите хотя бы один заказ.</p>
      </div>
    </center>
    :
    <div className="sneakers">
    {
      orders.map((item) => (
      <Card 
        title={item.items[0].title}
        imageUrl={item.items[0].imageUrl}
        price={item.items[0].price}
      />
      ))
    }
  </div>
    }
    
  </div>
  )
}

export default Orders