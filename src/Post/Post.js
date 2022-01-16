import { useEffect, useState } from 'react';
import './Post.css';

function Post(props) {

    const [liked, setLiked] = useState(false);
    const data = props.data;

console.log(data);
    return (
        <div className="Post">
            <div className="info-bar">
                <h1> {data.title} </h1>
                <p>By: {data.copyright}</p> 
                <p> Photo of the Day for: {data.date} </p> 
            </div> 
            <div className='img-container'>
                {data.media_type === "image" ? <img className="Photo" src={data.hdurl} alt={data.title}/> 
                :
                <p>The media for this post is not an image, and could not be loaded properly.</p>}
                <p>{data.explanation} </p> 
            </div>
            <div className="like-bar">
                <button className={liked ? "unlike-button" : "like-button"} onClick={() => setLiked(!liked)}> {liked ? "Unlike" : "Like" } </button>
            </div> 
        </div>
    );
}

export default Post;
