import React from 'react';
import { services } from '../Constants/Constants';

const Services = () => {
  return (
    <section className='px-4 sm:px-12 max-w-7xl mx-auto'>
      <h2 className='font-palanquin text-3xl sm:text-4xl font-bold m-6 text-center sm:text-left'>
        Our <span className='text-coral-red'>Services</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div 
            key={index} 
            className='flex flex-col items-center sm:items-start gap-4 p-6 shadow-lg hover:shadow-coral-red transition duration-300 ease-in-out rounded-lg bg-white'
          >
            <div className='w-16 h-16 p-3 bg-coral-red rounded-full flex justify-center items-center'>
              <img src={service.imgURL} height={64} width={64} className='object-contain' alt={service.label} />
            </div>
            <h3 className='font-palanquin text-2xl sm:text-3xl font-bold text-center sm:text-left'>
              {service.label}
            </h3>
            <p className='font-montserrat text-base sm:text-lg text-center sm:text-left leading-normal text-slate-gray'>
              {service.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;