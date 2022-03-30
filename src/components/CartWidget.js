import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

let styles={
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    margin: '5px'
}
let iconStyle={
    color: 'white',
    margin:'7px',
    fontSize:'20px'
}

function CartWidget (){
    return(<div style={styles}>
        <FontAwesomeIcon style={iconStyle} icon={faCartShopping}/>
        <span> 0 </span>   
    </div>)
}
export default CartWidget;