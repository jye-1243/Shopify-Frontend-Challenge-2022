import './../App.css'
import LikedMarker from './LikedMarker';

function SideBar(props) {
    const likes = props.likes;

    return (
        <div className="sidebar">
            <h2> Your Liked Photos </h2>          
            {likes.map((d) => <LikedMarker data={d}/>)}  
        </div>
    );
}

export default SideBar;
