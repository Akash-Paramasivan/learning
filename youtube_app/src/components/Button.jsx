import React from 'react'


const Button = ({list}) => {
  return (
    <div>
        {list.map((name, index) => (
            <button key={index} className='px-5 py-5 m-2 bg-gray-200 rounded-lg'>{name}</button>
        ))}
    </div>
  )
}

export default Button