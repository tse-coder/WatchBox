import Link from 'next/link'
import React from 'react'

const VideoCard = ({videoId,channelId,channelTitle,description,publishedAt,thumbnail,title,formatedDate}) => {
  return (
    <div className='w-70 md:w-90'>
        <Link href={`/video/${videoId}`} as={`/video/${videoId}`}>
            <div className='overflow-hidden rounded-xl h-45 md:h-55 w-70 md:w-90 mb-4 border-2 border-gray-300'>
                <img
                    src={thumbnail}
                    alt='pic'
                    className='min-h-full min-w-full'
                />
            </div>
        </Link>
        

        <div className='flex items-center gap-3'>
            <div>
                <p className='text-lg'>{title}</p>
                <p className='text-sm'>{channelTitle}</p>
                <p className='text-sm '>{formatedDate(publishedAt)}</p>
            </div>
        </div>
        
        
        
    </div>
  )
}

export default VideoCard