"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  return (
    <nav className="sticky top-0 left-0 z-10 h-17 px-4 border-b border-b-gray-300 bg-white flex items-center justify-between w-csreen">
      <div className="pl-15 flex items-center gap-2">
        <Link href="/">
          <img 
            src = "/assets/logo.svg"
            width = {35}
            alt= "watchbox_icon"
          />
        </Link>
        <p className="impact_logo text-gray-600 text-xl">Watchbox</p>
      </div>
      <div>
        <div className="flex lg:border-2 border-gray-300 rounded-full px-2 overflow-hidden ">
          <input placeholder="search here ..." onChange={()=>{}} className="bg-white mr-3 text-gray-600 focus:outline-none pl-5 h-10 hidden lg:block" />
          <img 
            src = "/assets/search.svg"
            width = {30}
            alt = "search_icon"
            className="cursor-pointer"
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
            className="cursor-pointer"
          />
        </a>
  
      </div>
    </nav>
  );
}
