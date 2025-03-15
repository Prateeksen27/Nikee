import React from 'react'
import { star } from '../assets/icons'
import  halfStar  from '../assets/icons/halfstar.svg'

const ReviewCard = ({imgURL,customerName,rating,feedback,key}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="" className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='text-lg font-bold mt-4'>{customerName}</p>
        <p className='mt-6 max-w-sm text-center info-text mb-6'>{feedback}</p>
        <div className='flex justify-center items-center gap-2'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img width={24} height={24} src={halfStar} alt="" />
            <p className='font-montserrat text-lg text-slate-gray'>{rating}</p>
        </div>
    </div>
  )
}

export default ReviewCard