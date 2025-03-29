"use client"
import React, { useState, useEffect } from 'react'
import RelatedVid from '@/app/Components/RelatedVid';
import { useParams } from 'next/navigation';
import RelatedVidSkeleton from '@/app/Components/RelatedVidSkeleton';
import { calculatedDate, calculatedNumber } from '@/app/operation';
import { useAppContext } from '@/app/context/AppContext';

export default function page() {
    const params = useParams()
    const videoId = params?.id
    const [vids, setVids] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);

    const {expanded} = useAppContext()

    useEffect(() => {
        const getData = async () => {
            
            const videoData = await fetch(`/api/youtube?type=single&id=${videoId}`)
            const vidResult = await videoData.json();
            
            const activeVideo = vidResult.items[0]?.snippet;

            const channelData = await fetch(`/api/youtube?type=channel&channelId=${vidResult.items[0].snippet.channelId}`)
            const channelResult = await channelData.json()

            setCurrentVideo({ ...vidResult.items[0].statistics, ...vidResult.items[0].snippet });
            setCurrentChannel(channelResult.items[0].snippet);

            const categoryData = await fetch(`/api/youtube?type=byId&category=${activeVideo.categoryId}`)
            const vidsResult = await categoryData.json();

            setVids(vidsResult.items);
        }
        getData()

    }, [])

    return currentVideo ? (

        <div className={`${expanded?"lg:pl-58":"lg:pl-18"}text-gray-900 p-6 lg:flex gap-5 max-w-2xl mx-auto lg:max-w-full  dark:text-gray-400 dark:bg-black`}>
            <div>
                <section className='w-full max-w-3xl mx-auto'>
                    <div className='overflow-hidden rounded-xl h-fit lg:w-3xl'>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                            loading='lazy'
                            className='w-full h-60 sm:h-72 md:h-80 lg:h-96'
                        ></iframe>
                    </div>

                    <p className='p-3 text-lg sm:text-xl'>
                        {currentVideo.title}
                    </p>

                    <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
                        <div className='flex items-center gap-3'>
                            <img src={currentChannel.thumbnails.high.url} className='size-20 md:size-10 rounded-full' />
                            <p className='text-base sm:text-lg'>{currentVideo.channelTitle}</p>        
                        </div>
                        <div className='flex items-center gap-3 sm:gap-5 font semi-bold'>
                            
                            <button className='bg-gray-600 text-white py-2 px-4 sm:px-5 rounded-full text-sm sm:text-md dark:bg-gray-100 dark:text-black w-full sm:w-auto text-center'>
                                Subscribe
                            </button>

                            <div className='hidden sm:flex items-center p-2 px-4 rounded-full border border-gray-300 bg-transparent gap-2 sm:gap-3'>
                                <button className='flex items-center gap-2'>
                                    <svg width="20" height="20" viewBox="0 0 122.88 106.16">
                                        <g><path fill="currentColor" d="M4.02,44.6h27.36c2.21,0,4.02,1.81,4.02,4.03v53.51c0,2.21-1.81,4.03-4.02,4.03H4.02 c-2.21,0-4.02-1.81-4.02-4.03V48.63C0,46.41,1.81,44.6,4.02,44.6L4.02,44.6z M63.06,4.46c2.12-10.75,19.72-0.85,20.88,16.48 c0.35,5.3-0.2,11.47-1.5,18.36l25.15,0c10.46,0.41,19.59,7.9,13.14,20.2c1.47,5.36,1.69,11.65-2.3,14.13 c0.5,8.46-1.84,13.7-6.22,17.84c-0.29,4.23-1.19,7.99-3.23,10.88c-3.38,4.77-6.12,3.63-11.44,3.63H55.07 c-6.73,0-10.4-1.85-14.8-7.37V51.31c12.66-3.42,19.39-20.74,22.79-32.11V4.46L63.06,4.46z" /></g>
                                    </svg>
                                    <p>{calculatedNumber(currentVideo.likeCount)}</p>
                                </button>
                                <button className='pl-2 border-l'>
                                    <svg width="20" height="20" viewBox="0 0 122.88 106.16">
                                        <g transform="scale(-1,1) translate(-122.88,0)">
                                            <path fill="currentColor" d="M4.03,61.56h27.36c2.21,0,4.02-1.81,4.02-4.02V4.03C35.41,1.81,33.6,0,31.39,0H4.03C1.81,0,0,1.81,0,4.03 v53.51C0,59.75,1.81,61.56,4.03,61.56L4.03,61.56z M63.06,101.7c2.12,10.75,19.72,0.85,20.88-16.48c0.35-5.3-0.2-11.47-1.5-18.36 l25.15,0c10.46-0.41,19.59-7.9,13.14-20.2c1.47-5.36,1.69-11.65-2.3-14.13c0.5-8.46-1.84-13.7-6.22-17.84 c-0.29-4.23-1.19-7.99-3.23-10.88c-3.38-4.77-6.12-3.63-11.44-3.63H55.07c-6.73,0-10.4-1.85-14.8,7.37v47.31 c12.66,3.42,19.39,20.74,22.79,32.11V101.7L63.06,101.7L63.06,101.7z" />
                                        </g>
                                    </svg>
                                </button>
                            </div>

                            <button className='p-2 px-4  rounded-full border border-gray-300 bg-gray-100 flex items-center gap-2 bg-transparent font-semibold'>
                                <svg width="20" height="20" viewBox="0 0 122.88 98.86">
                                    <g><path fill="currentColor" d="M122.88,49.43L73.95,98.86V74.23C43.01,67.82,18.56,74.89,0,98.42c3.22-48.4,36.29-71.76,73.95-73.31l0-25.11 L122.88,49.43L122.88,49.43z" /></g>
                                </svg>
                                Share
                            </button>
                        </div>
                    </div>

                    <div className='p-3 mt-3 rounded-xl bg-gray-100 dark:bg-gray-700'>
                        <span>{calculatedNumber(48019384)} views &bull; {calculatedDate(currentVideo.publishedAt)}</span>
                        <br />
                        {currentVideo.description.length >= 100 ? currentVideo.description.substring(0, 100) + ". . ." : currentVideo.description}
                    </div>
                </section>
            </div>
            <div className=' max-w-full mt-5 lg:mt-0 lg:w-[40%] '>

                {vids ? vids.map((vid, i) => {
                    const { channelId, channelTitle, description, publishedAt, thumbnails, title } = vid.snippet;
                    const videoId = vid.id.videoId || vid.id
                    const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonlinetools.com%2Fimage%2Fgenerate-empty-image&psig=AOvVaw0nVEadnysVyGUP4xiOIRf_&ust=1742990773992000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDZnOOYpYwDFQAAAAAdAAAAABAT";

                    return (
                        <div key={i} >
                            <RelatedVid
                                videoId={videoId}
                                channelTitle={channelTitle}
                                publishedAt={publishedAt}
                                thumbnail={thumbnailUrl}
                                title={title}
                            />
                        </div>
                    );
                }) : (
                    Array.from({ length: 18 }).map((_, index) => (
                        <RelatedVidSkeleton key={index} />
                    ))
                )}
            </div>
        </div>

    ) : (
        <div className='lg:flex gap-5 max-w-2xl mx-auto lg:max-w-full  dark:bg-black'>
            <div>
                <section className='max-w-3xl mx-auto w-full'>
                    <div className='w-full lg:w-2xl xl:w-3xl h-100 lg:h-120 rounded-xl max-h-300 bg-linear-to-bl from-gray-500 via-gray-200 to-gray-500 animated_background'></div>

                    <p className='my-1 h-4 w-50 rounded-full bg-gray-500'></p>
                    <div className='flex justify-between'>

                        <p className='my-1 h-3 w-40 rounded-full bg-gray-500'></p>

                        <div className='flex items-center gap-5'>
                            <div className='items-center h-4 w-10 rounded-full border bg-gray-100 hidden lg:block '></div>
                            <div className='items-center h-4 w-10 rounded-full border bg-gray-100 hidden lg:block '></div>
                            <div className='items-center h-4 w-10 rounded-full border bg-gray-100 hidden lg:block '></div>
                        </div>

                    </div>

                    <div className='rounded-xl bg-gray-100 h-10 dark:bg-gray-700'></div>

                </section>
            </div>
            <div className=' max-w-full mt-5 lg:mt-0 dark:bg-black'>
                {!vids ? Array.from({ length: 18 }).map((_, index) => (
                    <RelatedVidSkeleton key={index} />
                )) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        no related video
                    </div>
                )}
            </div>
        </div>
    )
}