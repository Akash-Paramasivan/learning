import React from 'react'
import Button from './Button'

const list =['All', 'Music', 'News', 'Sports', 'Gaming', 'Movies', 'Live', 'Fashion', 'Comedy', 'Education', 'Science & Technology'];
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button list={list}/>
    </div>
  )
}

export default ButtonList