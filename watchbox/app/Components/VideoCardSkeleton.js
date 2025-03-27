import React from 'react'

const VideoCardSkeleton = () => {
  return (
    <div className='w-70 md:w-90'>
        <div className='overflow-hidden rounded-xl h-45 md:h-55 w-70 md:w-90 mb-4 animated_background bg-linear-to-bl from-gray-500 via-gray-200 to-gray-500'>
        </div>
        

        
        <div className='flex flex-col gap-1'>
            <p className='h-3 w-40 bg-gray-400 rounded-full'></p>
            <p className='h-3 w-30 bg-gray-400 rounded-full'></p>
            <p className='h-3 w-30 bg-gray-400 rounded-full'></p>
        </div>
        
        
        
        
    </div>
  )
}

export default VideoCardSkeleton