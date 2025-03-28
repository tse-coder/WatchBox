"use client"

import React, { useEffect, useState } from 'react'
import categories from '../category'
import { useAppContext } from '../context/AppContext'
import { usePathname } from 'next/navigation'

const Leftnavbar = () => {
  const { expanded, setExpanded, setCategory } = useAppContext();
  const path = usePathname()

  return (
    <div className={`${expanded ? "block w-55 px-5" : "hidden w-15 px-2"} w-15 lg:block pt-3 fixed left-0 top-17 h-full bg-white text-gray-700 overflow-hidden border-r-2 border-r-gray-300 shrink-0 z-20 dark:bg-black dark:border-r dark:border-gray-500`}>
      <div className='border-b-2 border-b-gray-500 flex flex-col gap-4 pb-5'>

        {categories.map(((cat, idx) => (
          <a href='/' key={idx}>
            <div
              onClick={() => {
                setCategory(cat.id)
                setExpanded(false)
              }}
              className='flex gap-5 p-2 hover:shadow-lg hover:border-gray-100 hover:border-2 rounded-full cursor-pointer dark:text-gray-200 dark:hover:border dark:shadow-0'>
              <img
                src={cat.icon}
                width={25}
                height={25}
                className="dark:invert"
              />
              <p className='font-semibold'>{cat.name}</p>
            </div>
          </a>

        )))}
      </div>
    </div>
  )
}

export default Leftnavbar