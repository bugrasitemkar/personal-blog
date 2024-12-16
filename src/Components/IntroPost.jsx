import React from 'react'
import data from '../Data/data.json'

function IntroPost() {
  const post = data.data[0];
  return (
<div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
  <div className='grid place-items-center'>
    <img src={post.coverImage} className='rounded-2xl object-cover max-w-[400px] max-h-[400px]'/>
  </div>
  <div>
    <h4 className='text-red-500'>{post.tag}</h4>
    <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
    <h4 className='line-clamp-6 text-grat-400 mt-5'>{post.desc}</h4>
  </div>
</div>

  )
}

export default IntroPost