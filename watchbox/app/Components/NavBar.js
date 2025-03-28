"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({expanded,setExpanded}) {

  return (
    <nav className="sticky top-0 left-0 z-10 h-17 px-4 border-b border-b-gray-300 bg-white flex items-center justify-between w-csreen dark:bg-gray-950 dark:text-gray-300 dark:border-b dark:border-gray-500">
      <div className="flex items-center gap-4">
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
            className="dark:invert"
          />):(<img 
            src='/assets/expand.svg'
            width={30}
            alt='expand'
            className="dark:invert"
          />)
          }
        </button>
        <Link href="/">
          <img 
            src = "/assets/logo.svg"
            width = {35}
            alt= "watchbox_icon"
          />
        </Link>
        <p className="impact_logo text-gray-600 text-xl dark:text-white">Watchbox</p>
      </div>
      <div>
        <div className="flex lg:border border-gray-300 rounded-full px-2 overflow-hidden dark:border-gray-500">
          <input placeholder="search here ..." onChange={()=>{}} className="bg-transparent mr-3 text-gray-600 focus:outline-none pl-5 h-10 hidden lg:block dark:text-100 " />
          <img 
            src = "/assets/search.svg"
            width = {30}
            alt = "search_icon"
            className="dark:invert"
          />
        </div>
        
      </div>
      <div>
        <a href="/creator">
          <img 
            src = "/assets/tsegaye.jpeg"
            width = {40}
            height= {40}
            alt = "notifications"
            className="cursor-pointer rounded-full"
          />
        </a>
  
      </div>
    </nav>
  );
}
