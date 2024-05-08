import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed,BiBath,BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const HouseDetails = () => {
  const { id } = useParams();

  const house = housesData.find(house => {
    return house.id === parseInt(id);
  })

  return (
    <div>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
         </div>
         <div className='mb-2 lg:mb-0 flex gap-x-2 text-sm'>
           <div className='bg-green-500 text-white px-3 rounded-full'>
              {house.type}
           </div>
           <div className='bg-violet-500 text-white px-3 rounded-full'>
              {house.country}
            </div>
         </div>
         <div className='text-3xl font-semibold'>
            ₹{house.price}
         </div>
        </div> 
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
           <div className='max-w-[768px]'>
             <div className='mb-8'>
               <img src={house.imageLg} alt="" />
             </div>
             <div className='flex gap-x-6  mb-6'>
               <div className='flex gap-x-2'>
                  <BiBed className='text-2xl'/>
                  <div>{house.bedrooms}</div>
               </div>
               <div className='flex gap-x-2'>
                  <BiBath className='text-2xl'/>
                  <div>{house.bedrooms}</div>
               </div>
               <div className='flex gap-x-2'>
                  <BiArea className='text-2xl'/>
                  <div>{house.surface}</div>
               </div>
             </div>
             <div>{house.description}</div>
           </div>
           <div className='border border-gray-300 rounded p-4'>
              <h1 className='font-bold text-xl'>Book this Place</h1>
              <form>
                <label >Name</label>
                <input 
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10' 
                type='text'
                />
                <label>Check In:</label>
                <input 
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10' 
                type='date'
                />
                <label>Check Out:</label>
                <input 
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10' 
                type='date'
                />
                <label>Number of guests:</label>
                <input 
                className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-3 h-10' 
                type='number'
                />
                <button class="mt-4 bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-600">Book now</button>
              </form>
           </div>
        </div>

    </div>
   </div>
  )
}

export default HouseDetails
