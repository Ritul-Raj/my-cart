import React from 'react'
import './Navbar.css'
import {useSelector} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"

function Navbar() {
const cart=useSelector(state=>state.Cartslice.cart)
let count =0;
cart.forEach((item)=>{count+=item.quantity});

  return (
    <nav>
    
<h2 className="banner">My-MiNtRa</h2>
<div className="right-layout">
    <div className="cart-layout">
        <AiOutlineShoppingCart/>
              <h2>{count}</h2>
    </div>
</div>

    </nav>
  )
}

export default Navbar