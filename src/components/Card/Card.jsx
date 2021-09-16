
import k5 from '../../assets/k5.jpg'
import k6 from '../../assets/k6.jpg'
import k7 from '../../assets/k7.jpg'
import k8 from '../../assets/k8.jpg'
import k9 from '../../assets/k9.jpg'
import k10 from '../../assets/k10.png'
import k11 from '../../assets/k11.png'
import k12 from '../../assets/k12.jpg'
import heartIcon from '../../assets/heartIcon.svg'
import './Card.scss'

function Card(props) {
  return (
    <div className="card">
      <div className="favorite">
        <img src={heartIcon} alt="heartIcon" />
      </div>
      <img className="kross" src={props.imageUrl} alt="kross" />
      <h5>{props.title}</h5>
      <div className="cena d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{props.price} сом</b>
        </div>
        <button className="button">
          +
        </button>
      </div>
    </div> 
  )
}

export default Card