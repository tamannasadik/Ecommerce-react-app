// import axios from 'axios';
import  {useCallback, useEffect, useState } from 'react';
import { ProductServices } from "../services";

export const useProducts =()=>{
 const [isLoading , setIsLoading] = useState(false);
   const [products,setProducts] =useState([]);
   
   const loadProducts = useCallback(async()=>{
    try {
      setIsLoading(true);
    const products=await ProductServices.getProducts();
    setProducts(products);
   } catch (error) {
    alert('Failed to load products');
    console.error(error);
   }finally {
    setIsLoading(false);
   }
   },[]);
    useEffect(() => {
       loadProducts();
    }, [loadProducts]);
   return {isLoading, products};
    
  };
  // fetch('http://localhost:5000/api/products')
      //   .then((res) => res.json())
      //   .then ((data)=>setProducts(data));
      // .catch((err)=> {
      //   alert('Failed to load products!');
      //   console.error(err);
      //   }); 
      //  error dekhacche bole comment kore rakhlam
         