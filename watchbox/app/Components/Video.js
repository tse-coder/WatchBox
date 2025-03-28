"use client"
import React, { useEffect ,useState} from 'react'
import VideoCard from './VideoCard'
import VideoCardSkeleton from './VideoCardSkeleton'
import { useAppContext } from '../context/AppContext'

const Video = () => {
  const {expanded,setExpanded,category,searchValue,startSearch,setStartSearch,search} = useAppContext()
  const [vids,setVids] = useState([])
  useEffect(()=>{
    const getData = async()=>{
      setVids([]);
      const data = await fetch(`/api/youtube?type=byId&category=${category}`)
      const result = await data.json()
      
      setVids(result.items || [])
    }
    getData()
  },[category])

  useEffect(()=>{
    const searchData = async()=>{
      if(startSearch){
        setVids([])
        const result = await search(searchValue)
        setVids(result.items || [])
        setStartSearch(false)
      }
    }
    searchData()
  },[startSearch])

  return (
    
    <div className={`${expanded?"md:pl-58":"md:pl-18"} flex flex-wrap gap-4 pt-5 justify-center dark:bg-black h-fit`}>
        {vids.length!=0?
        vids.map((vid,i)=>{
          const {channelId,channelTitle,description,publishedAt,thumbnails,title} = vid.snippet;

          const videoId  = vid.id.videoId || vid.id
          const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonlinetools.com%2Fimage%2Fgenerate-empty-image&psig=AOvVaw0nVEadnysVyGUP4xiOIRf_&ust=1742990773992000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDZnOOYpYwDFQAAAAAdAAAAABAT";
          const viewCount = vid.statistics?vid.statistics.viewCount : -1
          return(
            <div key={i} >
                <VideoCard
                  videoId = {videoId}
                  channelId = {channelId}
                  channelTitle = {channelTitle}
                  description = {description}
                  publishedAt = {publishedAt}
                  thumbnail = {thumbnailUrl}
                  title = {title}
                  viewCount = {viewCount}
                />
            </div>
          );
        }
      ):Array.from({ length: 18 }).map((_, index) => (
        <VideoCardSkeleton key={index} />
      ))}
    </div>
  )
}

export default Video