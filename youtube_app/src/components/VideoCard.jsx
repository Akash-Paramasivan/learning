import React from 'react'

const VideoCard = ({info}) => {
  
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className='rounded-lg'/>  
        <ul>
            <li className='font-bold py-2'>{info?.snippet?.title}</li>
            <li className='text-sm text-gray-500'>{info?.snippet?.channelTitle}</li>
            <li className='text-sm text-gray-500'>{info?.statistics?.viewCount} views</li>
            <li className='text-sm text-gray-500'>{info?.snippet?.publishedAt}</li>
        </ul>
    </div>
  )
}

export default VideoCard