import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Button } from '@mui/material';
import logo from '../../logo.svg'
import './productCart.css';


export const ProductCart = ( {product} ) => {

const {addProductToCart}= useContext(CartContext);

  const handleAddProductToCart = ()=>{
    addProductToCart(product);
  };

  return (
        <div className="bg-white p-4 rounded shadow">
          
        <img className="w-full mb-4" 
        src={logo} 
        alt="Product image"
         width="200px" />
        <h5>{product.name}</h5>
        <h5>{`$${product.price}`}</h5>
        <Button variant='contained' sx={{
          backgroundColor :'red',
        }} 
        onClick={handleAddProductToCart}>Add to Cart</Button>
        </div>
    );
}
