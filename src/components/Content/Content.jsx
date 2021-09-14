import k1 from '../../assets/k1.jpg'
import k2 from '../../assets/k2.jpg'
import k3 from '../../assets/k3.jpg'
import k4 from '../../assets/k4.jpg'
import k5 from '../../assets/k5.jpg'
import k6 from '../../assets/k6.jpg'
import k7 from '../../assets/k7.jpg'
import k8 from '../../assets/k8.jpg'
import k9 from '../../assets/k9.jpg'
import k10 from '../../assets/k10.png'
import k11 from '../../assets/k11.png'
import k12 from '../../assets/k12.jpg'
import './Content.scss'

function Content() {
  return (
    <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="sneakers">

          <div className="card">
            <img className="kross" src={k1} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k2} alt="" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>12 999 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k3} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>8 499 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k4} alt="" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>8 999 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  
          
          <div className="card">
            <img className="kross" src={k5} alt="" />
            <h5>Мужские Кроссовки Under Armour Curry 8</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>15 199 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  
          <div className="card">
            <img className="kross" src={k6} alt="" />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>11 299 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  
          <div className="card">
            <img className="kross" src={k7} alt="" />
            <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>10 799 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  
          <div className="card">
            <img className="kross" src={k8} alt="" />
            <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>16 499 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k9} alt="" />
            <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>13 999 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k10} alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>8 499 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k11} alt="" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>8 999 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

          <div className="card">
            <img className="kross" src={k12} alt="" />
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="cena d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>11 299 сом</b>
              </div>
              <button className="button">
                +
              </button>
            </div>
          </div>  

        </div>
      </div>
  )
}

export default Content