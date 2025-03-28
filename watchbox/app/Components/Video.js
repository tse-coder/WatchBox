"use client"
import React, { useEffect ,useState} from 'react'
import VideoCard from './VideoCard'
import VideoCardSkeleton from './VideoCardSkeleton'

const Video = ({expanded,setExpanded,category}) => {
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
  const formatedDate = (date)=>{
    const fullDate = new Date(date);
    return fullDate.toLocaleDateString("en-US",{
        year:"numeric",
        month:"short",
        day:"numeric"
    }) 
  }
  return (
    
    <div className={`${expanded?"md:pl-58":"md:pl-18"} flex flex-wrap gap-4 pt-5 justify-center dark:bg-black h-fit`}>
        {vids.length!=0?
        vids.map((vid,i)=>{
          const {channelId,channelTitle,description,publishedAt,thumbnails,title} = vid.snippet;
          const videoId  = vid.id.videoId || vid.id
          const thumbnailUrl = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonlinetools.com%2Fimage%2Fgenerate-empty-image&psig=AOvVaw0nVEadnysVyGUP4xiOIRf_&ust=1742990773992000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDZnOOYpYwDFQAAAAAdAAAAABAT";

          console.log(thumbnailUrl)
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
                  formatedDate = {formatedDate}
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