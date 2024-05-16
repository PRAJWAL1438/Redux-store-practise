import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeIteam } from './dataSlice'


const Cart = () => {

  const  items  = useSelector(store=>store.data.items)
  const dispatch = useDispatch()
  // console.log(items)

  const handleRemove = ()=>{
    dispatch(removeIteam())
  }

  const handleClear = ()=>{
    dispatch(clearCart())
  }
  return (
    <>
       <button onClick={()=>handleRemove()}   className="bg-black text-white p-2 ml-10 mt-3 rounded-lg">
   Remove From Cart
     </button>  
     <button onClick={()=>handleClear()}   className="bg-black text-white p-2 ml-10 mt-3 rounded-lg">
      Clear Cart
     </button>  
    <div className=' flex flex-wrap '>   
    {items.map((item) => (
      <div key={item.id} className="w-12/12    mx-5 shadow-xl mt-5 md:w-2/12 ">
        <img alt="img" className="px-6 pt-2 pb-6" src={item.image} />
        <div className="mx-2">
          <p>Name: {item.title}</p>
          <p>Price: {item.price}</p>
        </div>
      </div>
    ))}</div></>
  )
}

export default Cart