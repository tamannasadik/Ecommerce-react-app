import { useProducts } from '../../api/queries';
import {Loading} from'../../common/components';
import { ProductCart } from './ProductCart';
// import './ProductCart.css';

export function ProductGrid(){
 
    const{isLoading, products} = useProducts();
  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading ? (
        <Loading/>
       ) : (
          products.map((product) => (
        <ProductCart key={product.id} product={product}/>
       ))
      
      )}
      </div>
  
  );
};

