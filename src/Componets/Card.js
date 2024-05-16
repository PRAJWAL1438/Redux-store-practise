import React from "react";
import useStoreData from "../Uttils/useStoreData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Uttils/dataSlice";

const Card = () => {
  useStoreData();
  const setData = useSelector((store) => store.data.setData);
  const dispatch = useDispatch()
  // console.log(setData);

  if (!setData) return;

  const HandleAddToCart = (item)=>{
     dispatch(addToCart(item))
    //  console.log(item)
  }

  return (
    <>
      {setData.map((item) => (
        <div key={item.id} className=" w-12/12   md:w-2/12   mx-5 shadow-xl mt-5 ">
          <img alt="img" className="px-6 pt-2 pb-6" src={item.image} />
          <div className="mx-2">
            <p>Name: {item.title}</p>
            <p>Price: {item.price}</p>
            <button onClick={()=>HandleAddToCart(item)}   className="bg-black text-white p-1 mb-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
