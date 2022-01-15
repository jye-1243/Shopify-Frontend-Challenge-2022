import { useEffect, useState } from 'react';
import './Post.css';

function Post(props) {

    const [liked, setLiked] = useState(false);
    const data = props.data;

    return (
        <div className="Post">
            <h2> {data.title} </h2>
            <p>By: {data.copyright}</p>
            <img className="Photo" src={data.hdurl}/> 
        </div>
    );
}

export default Post;
