import React from 'react'
import Search from './Search';
import Image from '../assets/img/fimg.jpg';

const HomeCon = () => {
  return (
    <div>
    <div className='relative h-screen max-h-[640px] mb-8'>
      <div className='absolute inset-0 flex items-center justify-center lg:ml-8 xl:ml-[135px]'>
      <div className='text-center'>
         <h1 className='text-white text-4l md:text-6xl font-bold mb-8'>
            <span>Rent </span>The House of your CHOICE.
         </h1>    
      </div>
      </div>
        <img src={Image} alt='' className="absolute inset-0 object-cover w-full h-full"/>
     </div>
      <Search />
    </div>
  )
}

export default HomeCon

