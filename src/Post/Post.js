import { useState } from 'react';
import './Post.css';

function Post(props) {

    const [liked, setLiked] = useState(props.liked);
    const data = props.data;

    return (
        <div className="Post" key={data.date}>
            <div className="info-bar">
                <h1> {data.title} </h1>
                <p> {data.copyright ? "By: " + data.copyright : ""}</p> 
                <p> Photo of the Day for: {data.date} </p> 
            </div> 
            <div className='img-container'>
                {data.media_type === "image" ? <img className="Photo" src={data.hdurl} alt={data.title}/> 
                :
                <p>The media for this post is not an image, and could not be loaded properly.</p>}
                <p>{data.explanation} </p> 
            </div>
            <div className="like-bar">
                <button className={liked ? "unlike-button" : "like-button"} onClick={() => {
                    const prevLiked = liked;
                    setLiked(!liked);
                    if (prevLiked) {
                        props.handleUnlike(data.date);
                    }
                    else {
                        props.handleLike({date: data.date, title: data.title, byline: data.copyright})
                    } }
                    }> {liked ? "Unlike" : "Like" } </button>
            </div> 
        </div>
    );
}

export default Post;
