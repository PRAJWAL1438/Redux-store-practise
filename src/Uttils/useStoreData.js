import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {storeData} from "./dataSlice"

const useStoreData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();

  },[]);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    // console.log(json);
    dispatch(storeData(json));
  };
};

export default useStoreData;