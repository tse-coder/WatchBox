import Link from "next/link";
import { calculatedDate,calculatedNumber } from "../operation";

export default function RelatedVid({channelTitle,publishedAt,title,videoId,thumbnail}){
    return(
        <div className='flex gap-5 dark:bg-black dark:text-gray-200'>
            <Link href={`/video/${videoId}`}>
                <div className='overflow-hidden rounded-xl h-25  md:h-30 w-35 md:w-50 lg:w-40 shrink-0 mb-4 border border-gray-300 dark:border dark:border-gray-700'>
                    <img
                        src={thumbnail}
                        alt='pic'
                        className='min-h-full min-w-full'
                        loading = 'lazy'
                    />
                </div>
            </Link>
            <div className='flex flex-col gap-1'>
                <p className='text-md md:text-sm font-semibold'>{title.length>=30?title.substring(0,30)+"...":title}</p>
                <p className='text-xs'>{channelTitle}</p>
                <p className='text-xs'>{calculatedNumber(112330)} views &bull; {`${calculatedDate(publishedAt)}`}</p>
            </div>
        </div>
    )
}