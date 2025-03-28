import Link from "next/link";
import { calculatedDate,calculatedNumber } from "../operation";

export default function RelatedVid({channelTitle,publishedAt,title,videoId,thumbnail}){
    return(
        <div className='flex gap-5 dark:bg-gray-950 dark:text-gray-200'>
            <Link href={`/video/${videoId}`}>
                <div className='overflow-hidden rounded-xl h-25 w-50 md:h-30 md:w-45 shrink-0 mb-4 border border-gray-300 dark:border dark:border-gray-700'>
                    <img
                        src={thumbnail}
                        alt='pic'
                        className='min-h-full min-w-full'
                        loading = 'lazy'
                    />
                </div>
            </Link>
            <div className='flex flex-col gap-1'>
                <p className='text-md md:text-sm font-semibold'>{title.length>=100?title.substring(0,100)+"...":title}</p>
                <p className='text-sm md:text-xs'>{channelTitle}</p>
                <p className='text-sm md:text-xs'>{calculatedNumber(112330)} views &bull; {`${calculatedDate(publishedAt)}`}</p>
            </div>
        </div>
    )
}