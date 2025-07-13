import {Cart} from '../cart';
export function RightPanel() {
  
    return (
        <div className="mb-8">
      <h1 className="text-xl font-semibold mb-2">Cart</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Checkout</button>
      <div>
        <Cart />
      </div>
      </div>
    
    );
}