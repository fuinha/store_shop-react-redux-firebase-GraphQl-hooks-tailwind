import React from 'react';
// import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className="m-5 max-w-sm rounded overflow-hidden shadow-lg  mb-4 bg-gray-100">
  <img className="w-full h-64" src={`${imageUrl}`} alt="Sunset in the mountains"/> 
  <div className="px-3 py-4">
    <div className="font-bold text-xl uppercase">{title}</div>
    
      </div>
      <button className=" w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 ">
  SHOP NOW
</button>
</div>
    
  );
};
// <div className={`${size} menu-item`}>
    //   <div
    //     className='background-image'
    //     style={{
    //       backgroundImage: `url(${imageUrl})`,
    //     }}
    //   />
    //   <div className='content'>
    //     <h2 className='title'>{title}</h2>
    //     <span className='subtitle'>SHOP NOW</span>
    //   </div>
    // </div>
export default MenuItem;
