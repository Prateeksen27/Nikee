import React from 'react'
import Button from '../Components/Button'
const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10 w-full'>
     
        <h1 className='font-palanquin lg:max-w-md leading-[68px] text-4xl font-bold'>Sign Up for <span className='text-coral-red'>Updates</span> <br /> & Newsletters</h1>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col'>
          <input type="text" placeholder='subscribe' className='input' />
          <div className='flex max-sm:justify-end items-center max-sm:w-full' >
            <Button label='Sign Up' />
          </div>
        </div>
     
     
    </section>
  )
}

export default Subscribe