import React,{useState,useEffect} from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'
import { value_Converter } from '../../data'
import { Link } from 'react-router-dom'






const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([])

    const fetchData=async()=>{
        const reatedvideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `
        await fetch(reatedvideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
    }

    useEffect(() => {
    fetchData()
    }, [])
    
    
  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className='video-info'>
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{value_Converter(item.statistics.viewCount)}</p>
                </div>
            </Link>
            )
        })}


{/* <div className="side-video-list">
    <img src={thumbnail1} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail2} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail3} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail8} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail4} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail5} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail6} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div>

<div className="side-video-list">
    <img src={thumbnail7} alt="" />
    <div className='video-info'>
        <h4>Best Channel that help you to be a Web Developer</h4>
        <p>CodeWithHarry</p>
        <p>1M View</p>
    </div>
</div> */}





    </div>
  )
}

export default Recommended