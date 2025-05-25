import React, { useContext } from 'react'
import Container from './shared/Container'
import { ProductContext } from '../context/ProductContext'
import ProductItem from './ProductItem';

function Featured() {
  const { featured } = useContext(ProductContext)
  console.log(featured);
  
  return (
    <Container>
      <div className='grid grid-cols-3 justify-center items-center gap-3'>
        <h1>Featured Products</h1>
        {featured.map(items => (
          <ProductItem productitems={items} key={items.id} />
        ))}
        {/* (featured.map((items) = )) */}
      </div>

    </Container>
  )
}

export default Featured
