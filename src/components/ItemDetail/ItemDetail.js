import React from 'react'
import { useNavigate } from 'react-router-dom'
import itemDetailStyle from './ItemDetail.css'

const ItemDetail = ({productDetail}) => {
    const {id, title, price, pictureURL, description, stock} = productDetail;
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(-1)
    }
  
  return (
    <div style={{width: 18+'rem'}}>
        <h1 className="card-title" style={{margin:40+'px'}}>{title}</h1>
        <div className='d-flex detailCard'> 
          <img src={pictureURL} className="card-img-top" alt="..."/>
          <div className="d-flex flex-column infoContainer" >
              <p className="card-text" style={{backgroundColor:'#212529', color:'white', borderRadius:5+'px'}}>${price}</p>
              <p className= "stockInfo">Stock: {stock}</p>
              <p>{description}</p>
              <button  className="getBack-btn" onClick={handleNavigate} type="button">Volver</button>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail