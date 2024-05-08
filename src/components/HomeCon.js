import React from 'react'
import Search from './Search';
import Image from '../assets/img/f.jpg';

const HomeCon = () => {
  return (
<div>
  <div className='relative h-screen max-h-[640px] mb-8'>
    <img src={Image} alt='' className="absolute inset-0 object-cover w-full h-full" />
    <div className='absolute inset-x-0 top-0 pt-16 lg:ml-8 xl:ml-[135px]'>
     <div className='text-center'>
      <h1 className='text-black text-3xl md:text-5xl font-extrabold mb-8'>
        Rent the House of your CHOICE
      </h1>
      </div>
    </div>
  </div>
  <Search />
</div>


  

  )
}

export default HomeCon

