"use client"

import Link from "next/link"


export default function Error(){
    return(
        <div className="flex flex-col gap-5 w-screen h-screen items-center justify-center dark:bg-black dark:text-white text-xl">
            <p>sorry , something went wrong</p>
            <div className="text-3xl">😞</div>
            <Link
                href="/"
            />
            <button className="bg-transparent border rounded-full p-3 px-5">go gack</button>          
        </div>
    )
}