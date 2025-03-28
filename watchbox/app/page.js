"use client"

import Leftnavbar from "./Components/LeftNavBar";
import Navbar from "./Components/NavBar";
import Video from "./Components/Video";
import { useState } from "react";

export default function Home() {
  const [expanded,setExpanded] = useState(false);
  const [category,setCategory] = useState("")
  return( 

    <div>
      <Navbar
        expanded = {expanded} 
        setExpanded = {setExpanded}
      />
      <div className="flex text-gray-900 h-dvh">
        <Leftnavbar 
          expanded={expanded} 
          setExpanded={setExpanded}
          setCategory={setCategory} 
        />
        <Video 
          expanded={expanded} 
          setExpanded={setExpanded} 
          category={category}
        />
      </div>
    </div>
  );
}
