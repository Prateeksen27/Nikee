import React from 'react'
import Button from '../Components/Button'
import shoe from '../assets/images/shoe8.svg'
const SuperQuality = () => {
  return (
   <section className='max-container flex justify-between items-center max-lg:flex-col gap-10 w-full max-sm:px-0 px-3 sm:px-12'>
    <div className='flex flex-1 flex-col'>
    <h2 className='font-palanquin text-4xl capitalize font-bold mg:max--w-lg'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          We Provide You
        </span>
        <br />
        <span className='text-coral-red inline-block mt-3'>Super Quality</span> Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit reiciendis accusamus quaerat sequi quae ad, sint vero alias veniam quibusdam velit deleniti, consectetur illum, debitis ducimus quis ipsa nulla nam.
      </p>

      <p className='mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et harum quibusdam. Quod, facilis sapiente!</p>
      <div>
         <Button className='mt-11 lg:max-w-lg' label='View Details'/>
      </div>
     
     </div>
    <div>
      <img src={shoe}className='object-contain w-fit' alt="" />
    </div>
   </section>
  )
}

export default SuperQuality