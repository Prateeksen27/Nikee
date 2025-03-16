import React from 'react'
import Button from '../Components/Button'
const Subscribe = () => {
  return (
  <section className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
    <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up for <span className='text-coral-red'>Updates</span> & <span className='text-coral-red'>Newsletters</span></h3>
    <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-1 sm:border sm:border-slate-gray rounded-full'>
      <input type="text" placeholder='Subscribe to our newsletter' className='input' />
      <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <Button label='Sign Up' className='w-full' />
      </div>
    </div>
  </section>
  )
}

export default Subscribe