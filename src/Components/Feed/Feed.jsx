import React,{useState,useEffect} from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
// import {API_KEY} from '../../data'
import { API_KEY } from '../../data'
import { value_Converter } from '../../data'
import moment from 'moment'


const Feed = ({category}) => {

    const [data, setData] = useState([])

const fetchData=async()=>{
    const videoListURL=`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch (videoListURL).then(response=>response.json()).then(data=>setData(data.items))
    // const get=await fetch(videoListURL)
    // const parseget=await get.json();
    // console.log(parseget.items)
    // setData(parseget.items)
}
//For page Refresh and category update content load
useEffect(() => {
fetchData();
}, [category])



  return (
    // <div className="feed">
        
    //     {data.map((item,index)=>{
    //         return(
    //         // /video/:categoryId/:videoId
    //             // <Link to={`video/20/4521`} className='card'>
    //             <Link to={`video/${item.snippet && item.snippet.categoryId}/${item.id}`} className='card'>
    //          <img src={item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.medium && item.snippet.thumbnails.medium.url} alt="" />
    //          <h2>{item.snippet && item.snippet.title}</h2>
    //          <h3>{item.snippet && item.snippet.channelTitle}</h3>
    //          <p>{value_Converter(item.statistics && item.statistics.viewCount) } view &bull; {moment(item.snippet && item.snippet.publishedAt).fromNow()}</p>
    //         </Link>
    //         )
    //     })}


 <div className="feed">
        
        {/* {data.map((item,index)=>{ */}
            {/* return( */}
            {/* /video/:categoryId/:videoId */}
                <Link to={`video/20/ws95v3yC94`} className='card'>
           <img src={thumbnail1} alt="" /> 
             <h2>Best Channel to learn coding that help you to be a web devloper</h2>
             <h3>CodeWithHarry</h3>
             <p>80k views &bull; 2 day ago</p>
            </Link>
            {/* ) */}
        {/* })}  */}
  

     <div className='card'>
        <img src={thumbnail2} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>

    <div className='card'>
        <img src={thumbnail3} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>

    <div className='card'>
        <img src={thumbnail4} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>

    <div className='card'>
        <img src={thumbnail5} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>

    <div className='card'>
        <img src={thumbnail6} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>

    <div className='card'>
        <img src={thumbnail7} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>

    <div className='card'>
        <img src={thumbnail8} alt="" />
<h2>Best Channel to learn coding that help you to be a web devloper</h2>
<h3>CodeWithHarry</h3>
<p>80k views &bull; 2 day ago</p>
    </div>


    </div>
  )
}

export default Feed