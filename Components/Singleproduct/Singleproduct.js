import React from 'react'
import './Singleproduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removefromcart } from '../../redux/Cartslice';
function Singleproduct({product}) {

  const dispatch=useDispatch();
  const carts=useSelector(state=>state.Cartslice.cart);
  const curritem=carts.find(item=>item.id==product.id)
  const currquantity=curritem?curritem.quantity:0;


  return (
    <div className='Singleproduct'>
    <img className='product-img' src={product.images[0]} alt={product.title}/>
    <div className="productinfo">
    <h2 className='product-title'>{product.title}</h2>
    <p className='produtc-price'>${product.price}</p>
    <p>Category:{product.category.name}</p>
    </div>

    <div className="cart-info">
    <button className='button'  onClick={()=>dispatch(removefromcart(product.id))}>-</button>
    <h4>{currquantity}</h4>
    <button className='button' onClick={()=>dispatch(addtocart(product.id))}>+</button>
    </div>                                                                        
  

    </div>
  )
}

export default Singleproduct