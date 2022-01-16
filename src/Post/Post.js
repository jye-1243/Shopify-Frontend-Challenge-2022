import { useEffect, useState } from 'react';
import './Post.css';

function Post(props) {

    const [liked, setLiked] = useState(false);
    const data = props.data;

    return (
        <div className="Post">
            <div className="info-bar">
                <h1> {data.title} </h1>
                <p>By: {data.copyright}</p> 
                <p> Photo of the Day for: {data.date} </p> 
            </div> 
            <div className='img-container'>
                <img className="Photo" src={data.hdurl}/> 
                <p>{data.explanation} </p> 
            </div>
            <div className="like-bar">
                <button className={liked ? "unlike-button" : "like-button"} onClick={() => setLiked(!liked)}> {liked ? "Unlike" : "Like" } </button>
            </div> 
        </div>
    );
}

export default Post;
