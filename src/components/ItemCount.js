import React, { useState } from 'react';
import gow from '../images/items/Playstation5/gow.jpg'

let countStyles={
    padding:'6px 25px',
    backgroundColor:'#d1d1d1'
}

function ItemCount({stock, initial}){
    const [count, setCount]= useState(parseInt(initial));

    function restar(){
        if (count !== parseInt(initial)){
            setCount(count - 1)
        }
    }
    function sumar(){
        if (count !== parseInt(stock)){
            setCount(count + 1)
        }
    }
    

    return (<div className="card" style={{width: 18 +"rem"}}>
    <img src={gow} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">God of War</h5>
      <p className="card-text">$6800</p>
      <div>
        <button onClick={()=>restar()} type='button' href="#" className="btn btn-primary">-</button>
        <span style={countStyles}>{count}</span>
        <button onClick={()=>sumar()} type='button' href="#" className="btn btn-primary">+</button>
      </div>
      <button type='button' onClick={()=> console.log(count)}href="#" className="btn btn-primary">Agregar al carrito</button>
    </div>
  </div>)
}


export default ItemCount;