import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
  dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
      <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' alt="menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"></img>
      <a href="/"><img className='h-8 mx-2' alt="logo" src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"></img></a>
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text"/>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-300'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt="user" src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-unb6q333.png"></img>
      </div>
    </div>
  )
}

export default Head