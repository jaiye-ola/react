import React from 'react'

function ProductItem() {
  return (
    <div>
      <Container className={"mt-12"}>
        <div className='border shadow-xl'>
          <img src="/img/w4.jpg" className='w-full object-cover' alt="" />
          <div className='border-1 p-2'>
            <h1>Product Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at aut laborum provident hic amet!</p>
            <div className='flex text-center flex-wrap justify-around items-center gap-5'>
              <button type='button' className='w-[40%] capitalize bg-[#0034FC] p-2'>Add to Cart</button>
              <a href="" className='border-[#0034FC]'>View More</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductItem
