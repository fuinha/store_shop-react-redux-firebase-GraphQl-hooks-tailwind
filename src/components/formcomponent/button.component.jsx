import React from 'react';

const FormButton = ({ children, color, ...otherProps }) => {
  return (
      <button
      
      {...otherProps}
      className={`mt-5 tracking-wide font-semibold bg-${color}-500 text-gray-100 w-full py-4 rounded-lg hover:bg-${color}-700 transition-all duration-300 ease-in-out f focus:shadow-outline focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default FormButton;
