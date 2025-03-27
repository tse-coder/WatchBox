"use client"
import React, { useState, useEffect } from 'react'
import RelatedVid from '@/app/Components/RelatedVid';
import { useParams } from 'next/navigation';
import RelatedVidSkeleton from '@/app/Components/RelatedVidSkeleton';

export default function page() {
    const params = useParams()
    const videoId = params?.id
    const [vids, setVids] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const videoData = await fetch(`/api/youtube?type=single&id=${videoId}`)
            const result = await videoData.json()
            const activeVideo = result.items[0].snippet;
            setCurrentVideo(activeVideo);

            const categoryData = await fetch(`/api/youtube?type=byId&category=${activeVideo.categoryId}`)
            const vidsResult = await categoryData.json()
            setVids(vidsResult.items);
        }
        getData()

    }, [videoId])

    const formatedDate = (date)=>{
        const fullDate = new Date(date);
        return fullDate.toLocaleDateString("en-US",{
            year:"numeric",
            month:"short",
            day:"numeric"
        }) 
    }

    return currentVideo ? (

        <div className='text-gray-900 p-6 lg:flex gap-5 max-w-2xl mx-auto lg:max-w-full'>
            <div>
                <section className='max-w-2xl mx-auto '>
                    <div className='overflow-hidden rounded-xl max-h-300 '>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                            loading='lazy'
                            className='w-lg h-80 md:w-xl md:h-100 xl:w-2xl lg:h-120 rounded-xl'
                        >
                        </iframe>
                    </div>

                    <p className='p-3 text-xl '>
                        {currentVideo.title}
                    </p>
                    <div className='flex justify-between'>
                        
                        <p className='text-lg'>{currentVideo.channelTitle}</p>
                        
                        <div className='flex items-center gap-5'>
                            <button
                                className='bg-gray-600 text-white p-2 lg:p-3 rounded-full px-3 lg:px-5 text-sm lg:text-md'
                            >subscribe</button>
                            <div className='items-center p-3 rounded-full border border-gray-300 px-5 bg-gray-100 gap-3 hidden lg:flex'>
                                <button className='flex items-center gap-2'>
                                    <img
                                        src='/assets/like.svg'
                                        className='size-6 xl:size-7'
                                    />
                                </button>
                                <button className='pl-2 border-l '>
                                    <img
                                        src='/assets/dislike.svg'
                                        className='size-6 xl:size-7'
                                    />
                                </button>
                            </div>
                            <button className=' p-3 rounded-full border border-gray-300 px-5 bg-gray-100 items-center gap-2 hidden lg:flex'>
                                <img
                                    src='/assets/share.svg'
                                    className='size-6 xl:size-7'
                                />
                                share
                            </button>
                            <button className='bg-gray-200 rounded-full p-3 block lg:hidden'>
                                <img
                                    src='/assets/more.svg'
                                    width={20}
                                />
                            </button>
                        </div>

                    </div>
                    <div className='p-3 mt-3 rounded-xl bg-gray-100 border-2 border-gray-200'>
                        <span>{formatedDate(currentVideo.publishedAt)}</span>
                        <br />
                        {currentVideo.description.length>=300?currentVideo.description.substring(0,300):currentVideo.description}
                    </div>
                </section>
            </div>
            <div className='lg:h-screen lg:overflow-scroll max-w-full mt-5 lg:mt-0'>

                {vids ? vids.map((vid, i) => {
                    const { channelId, channelTitle, description, publishedAt, thumbnails, title } = vid.snippet;
                    const videoId = vid.id.videoId || vid.id
                    const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonlinetools.com%2Fimage%2Fgenerate-empty-image&psig=AOvVaw0nVEadnysVyGUP4xiOIRf_&ust=1742990773992000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDZnOOYpYwDFQAAAAAdAAAAABAT";

                    console.log(thumbnailUrl)
                    return (
                        <div key={i} >
                            <RelatedVid
                                videoId={videoId}
                                channelTitle={channelTitle}
                                publishedAt={publishedAt}
                                thumbnail={thumbnailUrl}
                                title={title}
                                formatedDate = {formatedDate}
                            />
                        </div>
                    );
                }) : (
                    Array.from({length:18}).map((_,index)=>(
                        <RelatedVidSkeleton key={index}/>
                    ))
                )}
            </div>
        </div>

    ) : (
        <div className='text-gray-900 p-6 lg:flex gap-5 max-w-2xl mx-auto lg:max-w-full'>
        <div>
            <section className='max-w-2xl mx-auto '>
                <div className='w-lg h-80 md:w-xl md:h-100 xl:w-2xl lg:h-120 rounded-xl max-h-300 bg-linear-to-bl from-gray-500 via-gray-200 to-gray-500 animated_background'></div>

                <p className='my-1 h-4 w-50 rounded-full bg-gray-500'></p>
                <div className='flex justify-between'>
                   
                    <p className='my-1 h-3 w-40 rounded-full bg-gray-500'></p>

                    <div className='flex items-center gap-5'>
                        <button
                            className='bg-gray-600 text-white p-2 lg:p-3 rounded-full px-3 lg:px-5 text-sm lg:text-md'
                        >subscribe</button>
                        <div className='items-center p-3 rounded-full border border-gray-300 px-5 bg-gray-100 gap-3 hidden lg:flex'>
                            <button className='flex items-center gap-2'>
                                <img
                                    src='/assets/like.svg'
                                    className='size-6 xl:size-7'
                                />
                                <p className='hidden xl:block'></p>

                            </button>
                            <button className='pl-2 border-l '>
                                <img
                                    src='/assets/dislike.svg'
                                    className='size-6 xl:size-7'
                                />
                            </button>
                        </div>
                        <button className=' p-3 rounded-full border border-gray-300 px-5 bg-gray-100 items-center gap-2 hidden lg:flex'>
                            <img
                                src='/assets/share.svg'
                                className='size-6 xl:size-7'
                            />
                            share
                        </button>
                        <button className='bg-gray-200 rounded-full p-3 block lg:hidden'>
                            <img
                                src='/assets/more.svg'
                                width={20}
                            />
                        </button>
                    </div>

                </div>

                <div className='p-3 mt-3 rounded-xl bg-gray-100 border-2 border-gray-200 h-50'></div>

            </section>
        </div>
        <div className='lg:h-screen lg:overflow-scroll max-w-full mt-5 lg:mt-0'>
            {Array.from({length:18}).map((_,index)=>(
                <RelatedVidSkeleton key={index}/>
            ))}
        </div>
        </div>
    )
}