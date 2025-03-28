"use client";

import Link from "next/link";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const {expanded,setExpanded,setSearchValue,setStartSearch} = useAppContext()
  
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
        <div id="search_area" className="lg:flex hidden absolute lg:static w-full lg:w-auto border border-gray-300 rounded-full px-2 overflow-hidden dark:border-gray-500">
          <input id="search" placeholder="search here ..." onChange={(e)=>{
            setSearchValue(e.target.value)
          }} className="bg-transparent mr-3 text-gray-600 focus:outline-none pl-5 h-10  dark:text-white dark:placeholder-gray-100" />
          
          <Link href="/" className="flex items-center">
          <img 
            src = "/assets/search.svg"
            width = {30}
            alt = "search_icon"
            className="dark:invert cursor-pointer"
            onClick={()=>{
              setStartSearch(true)
              document.getElementById("search").value = ""
            }}
          />
          </Link>

        </div>
        <img 
            src = "/assets/search.svg"
            width = {30}
            alt = "search_icon"
            className="dark:invert cursor-pointer"
            onClick={(e)=>{
              e.target.style.display = "none"
              document.getElementById("search_area").style.display = "flex"
            }}
          />
        
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
