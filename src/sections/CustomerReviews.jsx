import React from 'react'
import { reviews } from '../Constants/Constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
   <section className='max-container'>
    <h2 className='font-palanquin text-4xl font-bold text-center'>Chukuchu ki re<span className='text-coral-red'>Magia</span></h2>
    <p className='info-text m-auto mt-4 max-w-lg text-center text-slate-gray font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem quae quos.</p>
    <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review,index)=>(
        <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
      ))}
    </div>
   </section>
  )
}

export default CustomerReviews