import React, {useState,useEffect,useContext} from 'react'
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu,MenuButton,MenuItems,MenuItem } from '@headlessui/react';
import { HouseContext } from './HouseContext';
   
const PriceDropdown = () => {

  const {price,setPrice} = useContext(HouseContext);
  const [isOpen,setIsOpen] = useState(false);
  
  const prices = [
    {
      value:'Price range (any)',
    },
    {
      value:'100000-160000',
    },
    {
      value:'160000-220000',
    },
    {
      value:'220000-400000',
    }
  ]


  return (
    <Menu as='div' className='dropdown relative'>
      <MenuButton className='dropdown-btn w-full text-left' onClick={()=>setIsOpen(!isOpen)}>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Select the price</div>
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
           {prices.map((price,index) => {
            return (
              <MenuItem onClick={() => setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {price.value}
              </MenuItem>
            )
           })}
      </MenuItems>
      
    </Menu>
  );
};

export default PriceDropdown
