"use client"
import React, { useState } from 'react'
import categories from '../category'

const Leftnavbar = ({expanded,setExpanded,setCategory}) => {

  return (
    <div className={`${expanded?"w-55 px-5":"w-15 px-2"} pt-3 fixed left-0 bottom-0 h-screen bg-white text-gray-700 overflow-hidden border-r-2 border-r-gray-300 shrink-0 z-20`}>
      <div className='border-b-2 border-b-gray-500 flex flex-col gap-4 pb-5'>
        <button 
          className='cursor-pointer'
        onClick={()=>{
          setExpanded(prev => !prev)
        }}>
          {expanded?
          (<img 
            src='/assets/collapse.svg'
            width={30}
            alt='collapse'
          />):(<img 
            src='/assets/expand.svg'
            width={30}
            alt='expand'
          />)
          }
        </button>
        {categories.map(((cat,idx)=>(
          <div
          key = {idx}
          onClick={()=>setCategory(cat.id)} 
          className='flex gap-5 p-2 hover:shadow-lg hover:border-gray-100 hover:border-2 rounded-full cursor-pointer'>
          <img 
            src={cat.icon}
            width={25}
            height={25}
          />
          <p className='font-semibold'>{cat.name}</p>
        </div>
        )))}
      </div>
    </div>
  )
}

export default Leftnavbar