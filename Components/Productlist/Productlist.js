import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchdata } from '../../redux/Productslice';
import { loadproducts } from '../../redux/Productslice'
import Singleproduct from '../Singleproduct/Singleproduct';
import './Productlist.css'
function Productlist() {
  const dispatch=useDispatch();
const products=useSelector(state => state.Productreducer.products)
const status=useSelector(state => state.Productreducer.status)

  useEffect(()=>{
    dispatch(fetchdata());
  },[])

 if(status==='Loading'){
  return (<h1 >Loading..👀👀👀👀👀👀</h1>)
 }
 if(status==='Failed'){
  return (<h1>Uh Oh ! Someting Went Wrong</h1>)
 } 

  
  return (
 <div className="productlist">
   {products.map((item)=>
   <Singleproduct key={item.id}  product={item} />
)}

  {/* <div> {products.map(item=><h3>{item.title}</h3>)}</div> */}

 </div>
  
            
  )
}

export default Productlist