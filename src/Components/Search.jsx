import React from 'react'
import banner from '.././assets/Images/banner.png'
import  { IoSearchSharp } from 'react-icons/io5'
import { useEffect, useState } from "react";

function Search() {
  const tags = [
    {
      id:1,
      name:'All',
    },
    {
      id:2,
      name:'C# / .Net Vignettes',
    },
    {
      id:3,
      name:'Distributed Systems',
    },
    {
      id:4,
      name:'Tutorials',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-center mt-8 flex-col px-[50] px-[300px]'>
      <img src={banner} className='rounded-2xl'/>
      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <IoSearchSharp className='text-[20px] text-gray-600'/>
        <input type='text' placeholder='Search' className='bg-white outline-none ml-2 flex-grow text-gray-600'/>
      </div>
      <div className='flex gap-10 justify-center mt-5 cursor-pointer'>
      {tags.map((item,index) => (
        <ul onClick={() => setActiveIndex(index)} 
        className = {`${index == activeIndex ? 'bg-red-500 text-white':null} 
        p-1 pb-2 rounded-small md:rounded-full md:px-4`}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
    </div>

  )
}

export default Search