import React from 'react'
import {BiBed, BiBatch,BiArea } from 'react-icons/bi'

const House = ({ house }) => {
  const{image,type,country,address,price} =house; 
  return (
    <div className='bg-white shadow-1 p-5 rounded w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className="mb-8" src={image}  />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>
           {type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3'>
           {country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>
          {address}
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
          ₹{price} 
      </div>
    </div>
  )
}

export default House
