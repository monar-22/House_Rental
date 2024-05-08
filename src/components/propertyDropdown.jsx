import React, {useState,useEffect,useContext} from 'react'
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Menu,MenuButton,MenuItems,MenuItem } from '@headlessui/react';

import { HouseContext } from './HouseContext';
   
const PropertyDropdown = () => {

  const {property,setProperty,properties} = useContext(HouseContext);
  const [isOpen,setIsOpen] = useState(false);
;


  return (
    <Menu as='div' className='dropdown relative'>
      <MenuButton className='dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
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
           {properties.map((property,index) => {
            return (
              <MenuItem onClick={() => setProperty(property)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {property}
              </MenuItem>
            )
           })}
      </MenuItems>
      
    </Menu>
  );
};

export default PropertyDropdown
