import React from 'react';
import { withRouter } from 'react-router-dom';
import "./menuItem.scss"
const MenuItem = ({ title, imageUrl,  history, linkUrl, match }) => {
  return (
    <div className="menu-item m-5 max-w-sm rounded overflow-hidden shadow-lg  mb-4 bg-gray-100">
  <img className="background-image w-full h-64" src={`${imageUrl}`} alt="Sunset in the mountains"/> 
  <div className="px-3 py-4">
    <div className="font-bold text-xl uppercase">{title}</div>
    
      </div>
      <button
       onClick={() => history.push(`${match.url}${linkUrl}`)}
        className=" w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 ">
  SHOP NOW
</button>
</div>
    
  );
};

export default withRouter(MenuItem);
