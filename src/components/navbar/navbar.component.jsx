import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-indigo-500 py-6 px-16'>
      <Link to='/' className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>
          CONGAR PROGRAMMING
        </span>
      </Link>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-indigo-100 hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'></div>
        <div>
          <Link
            to='/shop'
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-100 mr-4'
          >
            SHOP
          </Link>
          <Link
            to='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-100 mr-4'
          >
            CONTACT
          </Link>
          <Link
            to='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-100 mr-4'
          >
            SIGN IN
          </Link>
          <Link
            to='#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-100 hover:bg-indigo-700 mt-4 lg:mt-0'
          >
            CART
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
