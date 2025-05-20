import React,{useState,useEffect} from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_Converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'



const PlayVideo = () => {
const {VideoId}=useParams();

const [apiData, setApiData] = useState(null);
const [channelData, setChannelData] = useState(null)
const [commentData, setCommentData] = useState(null)

const fetchVideoData=async()=>{
    // Fetaching Videos Data
    const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
}

const fetchOtherData = async()=>{
    //Fetaching Channel Data
    const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `
    // items[0] to get the first object
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

    // Fetaching Comment data
    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${VideoId}&key=${API_KEY} `
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
}


useEffect(() => {
 fetchVideoData();
}, [VideoId])

useEffect(() => {
 fetchOtherData();
}, [apiData])



  return (
    <div className='playvideo'>
{/* <video src={video1} controls autoPlay muted></video> */}
<iframe  src={`https://www.youtube.com/embed/${VideoId}?autolpay=1 `}frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
{/* <h3>Best YouTube Channel To Learn Web Development</h3> */}

<h3>{apiData?apiData.snippet.title:"Title Here"}</h3>

<div className="paly-video-info">
    {/* <p>40k views &bull; 2 days ago</p> */}
        <p>{apiData?value_Converter(apiData.statistics.viewCount):"40k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"3 day ago"}</p>


<div>
    {/* <span><img src={like} alt="" />5k</span>
    <span><img src={dislike} alt="" />55</span>
    <span><img src={share} alt="" />Share</span>
    <span><img src={save} alt="" />Save</span> */}

    <span><img src={like} alt="" />{apiData?value_Converter(apiData.statistics.likeCount):"800"}</span>
    <span><img src={dislike} alt="" /></span>
    <span><img src={share} alt="" />Share</span>
    <span><img src={save} alt="" />Save</span>

</div>
</div>
<hr />
<div className="publisher">
{/* <img src={jack} alt="" /> */}
<img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />

<div>
    {/* <p>CodeWithHarry</p>
    <span>7M Subscriber</span> */}
    <p>{apiData?apiData.snippet.channelTitle:"Channel Name"}</p>
    <span>{channelData?value_Converter(channelData.statistics.subscriberCount):"1M"} Subscriber</span> 
</div>
<button>Subscribe</button>
{/*  */}
</div>
<div className="video-description">
    {/* <p>Channel that make s learning Easy</p>
    <p>Subscribe CodeWithHarry to Watch More Tutotrials on web development</p> */}
    <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
    <hr />
    {/* <h4>3k Comments</h4> */}
    <h4>{apiData?value_Converter(apiData.statistics.commentCount):"1k"} Comments</h4>

    {commentData && commentData.map((item,index)=>{
    return(
        <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>2 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" /><span>{value_Converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" /><span>0</span>
                </div>
            </div>
        </div>
    )
})}



    {/* <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Aryan Sharma <span>2 day ago</span></h3>
            <p>It’s one of the best channels to learn coding from scratch. All the contents are free. As a student, I started my coding journey with the help of this channel</p>
            <div className="comment-action">
                <img src={like} alt="" /><span>1k</span>
                <img src={dislike} alt="" /><span>0</span>
            </div>
        </div>
    </div> */}

    {/* <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Simran Kaur<span>3 day ago</span></h3>
            <p>It's really a very good channel have a vast variety of fundamental courses that too for free.

</p>
            <div className="comment-action">
                <img src={like} alt="" /><span>400</span>
                <img src={dislike} alt="" /><span>0</span>
            </div>
        </div>
    </div>


    <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Ajay Sharma <span>2 day ago</span></h3>
            <p>Yes , I think its one of the best channel out there for someone who wants to learn programming by themselves</p>
            <div className="comment-action">
                <img src={like} alt="" /><span>100</span>
                <img src={dislike} alt="" /><span>0</span>
            </div>
        </div>
    </div>


    <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Akash Gusain <span>2 day ago</span></h3>
            <p>If you want to start coding (I.e u r an absolute beginner ) or u may be knowing some languages already then code with harry is for you</p>
            <div className="comment-action">
                <img src={like} alt="" /><span>300</span>
                <img src={dislike} alt="" /><span>0</span>
            </div>
        </div>
    </div>

    <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3> Anshuman Singh <span>1 day ago</span></h3>
            <p>Code With Harry is a good channel where you can learn coding. He has many free courses in simple Hindi so if you want to learn coding so you can check out for this.</p>
            <div className="comment-action">
                <img src={like} alt="" /><span>20</span>
                <img src={dislike} alt="" /><span>0</span>
            </div>
        </div>
    </div>

    <div className="comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Akash Gusain <span>1 hr ago</span></h3>
            <p>It’s one of the best channels to learn coding from scratch. All the contents are free. As a student, I started my coding journey with the help of this channe</p>
            <div className="comment-action">
                <img src={like} alt="" /><span>8</span>
                <img src={dislike} alt="" /><span>0</span>
            </div>
        </div>
    </div> */}

</div>
{/* </div> */}


    </div>
  )
}

export default PlayVideo