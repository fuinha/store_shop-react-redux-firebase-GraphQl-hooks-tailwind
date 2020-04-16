import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview container flex flex-col m-auto  items-center sm:items-stretch px-10 '>
    <h1 className='title mt-6 font-bold text-2xl'>{title.toUpperCase()}</h1>
    <div className='preview flex justify-between mt-6 flex-col sm:flex-row flex-wrap'  >
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;