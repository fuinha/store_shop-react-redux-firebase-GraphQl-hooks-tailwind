import React from 'react'

const FormInput = ({handlechange, ...otherProps}) => {
    return (
        <input
            className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5'
            onChange={ handlechange }
            {...otherProps}
        />
    )
}

export default FormInput
