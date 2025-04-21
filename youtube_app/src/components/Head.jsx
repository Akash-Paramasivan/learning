import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
      <img className='h-8' alt="menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"></img>
      <img className='h-8 mx-2' alt="youtube" src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"></img>
      </div>
      <div className='col-span-10'>
        <input type="text"/>
        <button>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt="user" src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-unb6q333.png"></img>
      </div>
    </div>
  )
}

export default Head