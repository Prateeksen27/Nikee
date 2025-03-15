import React from 'react'
import { products } from '../Constants/Constants'

const PopularProducts = () => {
  return (
   <section className='max-container'>
    <div className='text-center'>
      <h2 className='font-palanquin text-4xl font-bold'>Our <span className='text-coral-red'> Popular</span> Products</h2>
    </div>
    <div className='mt-10 flex flex-wrap  justify-center items-center sm:gap-4 gap-4'>
      {products.map((product, index) => (
        <div key={index} className='bg-white flex justify-start items-start flex-col p-4 rounded-md hover:shadow-md hover:shadow-coral-red cursor-pointer transition duration-300 ease-in-out '>
          <img src={product.imgURL} alt={product.name} />
          <div>
            <p>⭐ (4.5)</p>
            <p className='text-lg font-bold'>{product.name}</p>
            <p className='mt-2 font-semibold text-coral-red'>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
   </section>
  )
}

export default PopularProducts