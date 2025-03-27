import React from 'react'

const RelatedVidSkeleton = () => {
  return (
    <div className='flex gap-5'>

    <div className='rounded-xl h-25 w-40 md:h-30 md:w-45 shrink-0 mb-4 bg-linear-to-bl from-gray-500 via-gray-200 to-gray-500 animated_background'>
    </div>
    
    
    <div className='flex flex-col gap-2'>
        <p className='h-3 w-40 lg:50 xl:65 bg-gray-400 rounded-full'></p>
        <p className='h-3 w-30 bg-gray-400 rounded-full'></p>
        <p className='h-3 w-30 bg-gray-400 rounded-full'></p>
    </div>
</div>
  )
}

export default RelatedVidSkeleton