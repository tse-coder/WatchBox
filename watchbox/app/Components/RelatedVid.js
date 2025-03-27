import Link from "next/link";

export default function RelatedVid({channelTitle,publishedAt,title,videoId,thumbnail,formatedDate}){
    return(
        <div className='flex gap-5'>
            <Link href={`/video/${videoId}`}>
                <div className='overflow-hidden rounded-xl h-25 w-50 md:h-30 md:w-45 shrink-0 mb-4 border-2 border-gray-300'>
                    <img
                        src={thumbnail}
                        alt='pic'
                        className='min-h-full min-w-full'
                    />
                </div>
            </Link>
            <div className='flex flex-col gap-1'>
                <p className='text-md md:text-sm font-semibold'>{title.length>=100?title.substring(0,100)+"...":title}</p>
                <p className='text-sm md:text-xs'>{channelTitle}</p>
                <p className='text-sm md:text-xs'>{formatedDate(publishedAt)}</p>
            </div>
        </div>
    )
}