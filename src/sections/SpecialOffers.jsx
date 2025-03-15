import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'

const SpecialOffers = () => {
  return (
    <section className='max-container min-h-screen flex-col sm:flex-row px-10  max-sm:px-0 flex justify-between items-center flex-col gap-10 w-full'>
       <div className='flex justify-center sm:block hidden items-center w-full'>
        <img src={offer} alt="" />
      </div>
      <div>
        <h2 className='font-palanquin text-4xl font-bold'> <span className='text-coral-red'>Special</span> Offers</h2>
        <p className='text-gray-500 text-lg leading-8 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et In sed odio nec aliquet eu proin mauris et.</p>
        <p className='text-gray-500 text-lg leading-8 mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore saepe aperiam dicta ullam ducimus quos perferendis maiores, odio earum nulla voluptate praesentium, velit possimus cum fugit quibusdam, veritatis molestias?</p>
        <div className='mt-12 flex gap-4'>
        <Button label='Shop Now' iconUrl={arrowRight} />
        <button className='font-montserrat text-lg leading-normal text-coral-red border-2  px-7 py-4border-coral-red rounded-full'>Learn More</button>
        </div>
      </div>
      <div className='flex justify-center sm:hidden block items-center w-full'>
        <img src={offer} alt="" />
      </div>
    </section>
  )
}

export default SpecialOffers