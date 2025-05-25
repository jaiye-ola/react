import React, {useContext} from 'react'
import Container from './shared/Container';
import ProductItem from './ProductItem';
import { ProductContext } from '../context/ProductContext';


function Trending() {
  const { trending } = useContext(ProductContext)
  console.log(trending);
  
  return (
    <Container>
      <div className='grid grid-cols-3 justify-center items-center gap-3'>
        <h1>Trending Products</h1>
        {trending.map(items => (
          <ProductItem productitems={items} key={items.id} />
        ))}
        {/* (featured.map((items) = )) */}
      </div>

    </Container>
  )
}

export default Trending

