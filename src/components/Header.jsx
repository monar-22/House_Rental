import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
       <div className='container mx-auto flex justify-between items-center'>
      <Link to='/'>
        <h1 className="text-3xl font-bold">House Rental</h1>
      </Link>

      <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900' to=''>Log in</Link>
        <Link className='bg-violet-700 text-white px-4 py-3 rounded-lg' to=''>Sign up</Link>
      </div>
    </div>
    </header>
   
  )
}

export default Header;
