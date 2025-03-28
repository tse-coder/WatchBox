import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center bg-white h-screen dark:bg-black'>
      <h1 className='font-extrabold font-cursive text-2xl text-slate-500 dark:text-gray-300'>🙏 Thank you for visiting WatchBox 🙏</h1>
      <video
        src="/assets/thankyou.mp4"
        autoPlay = {true}
        loop
        className='rounded-xl shadow-md shadow-white'
      >

      </video>
      <p className='text-xl font-semibold dark:color-white'>creator</p>
    </div>
  )
}

export default page