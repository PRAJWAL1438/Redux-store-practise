import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const items = useSelector(store=>store.data.items)
  // const dispatch = useDispatch()
  // console.log('iteam'+items)


  return (
    <div className="w-full bg shadow-lg mx-auto     md:flex justify-between ">
    <Link to='/'><h1 className="p-5 font-bold">Store</h1></Link>  
      <div className="flex items-center p-5">
        {items.length}
   <Link to='/cart'><FontAwesomeIcon className="text-xl text-black ml-2"  icon={faBagShopping} /></Link>
      </div>
    </div>
  );
};

export default Header;
