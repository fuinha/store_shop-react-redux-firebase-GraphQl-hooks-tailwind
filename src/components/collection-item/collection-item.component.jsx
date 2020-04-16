import React from 'react';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg mb-5 w-64 flex flex-col justify-between'>
    <img
      className='w-full'
      style={{ height: '25rem' }}
      src={imageUrl}
      alt='Sunset in the mountains'
    />
    <div className='px-6 py-4 flex justify-between'>
      <div className='font-bold text-xl mb-2'>{name}</div>
      <div className='font-bold text-xl mb-2'>{price}$</div>
    </div>
    <button className='w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
      Add to Card
    </button>
  </div>
);

export default CollectionItem;
