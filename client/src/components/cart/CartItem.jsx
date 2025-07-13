import React from 'react'

export const CartItem = ({cartItem, removeProductFromCart}) => {
    const handleRemoveProductFromCart=()=>{
        removeProductFromCart(cartItem.id);
    }
  return (
    <div className='cart-item'>
              <p>{`${cartItem.name} * ${cartItem.quantity}`}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" 
              onClick={handleRemoveProductFromCart}>Remove</button>
            </div>
  )
}
