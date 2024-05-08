import React, {useState,useEffect,useContext} from 'react'
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Menu,MenuButton,MenuItems,MenuItem } from '@headlessui/react';

import { HouseContext } from './HouseContext';
   
const CountryDropdown = () => {

  const {country,setCountry,countries} = useContext(HouseContext);
  const [isOpen,setIsOpen] = useState(false);
;


  return (
    <Menu as='div' className='dropdown relative'>
      <MenuButton className='dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-primary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-primary' />
            )
          }
      </MenuButton>

      <MenuItems className='dropdown-menu'>
           {countries.map((country,index) => {
            return (
              <MenuItem onClick={() => setCountry(country)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {country}
              </MenuItem>
            )
           })}
      </MenuItems>
      
    </Menu>
  );
};

export default CountryDropdown
