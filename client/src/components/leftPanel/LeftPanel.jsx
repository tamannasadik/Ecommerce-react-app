
// import { Suspense } from 'react';
// import { Loading } from '../../common/components';
import { ProductGrid } from '../product';
import { FilterSection } from './FilterSection';

export function LeftPanel(){
    return (
        <div>
      
      <FilterSection />
      
        <ProductGrid/>
     
      
      </div>
    );
}