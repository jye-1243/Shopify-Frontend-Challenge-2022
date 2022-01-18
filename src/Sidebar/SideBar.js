import './Sidebar.css'
import LikedMarker from './LikedMarker';

function Sidebar(props) {
    const likes = props.likes;
    return (
        <div className="sidebar">
            <h2 className="sidebar-title"> Your Liked Photos </h2>          
            {likes.map((d) => <LikedMarker data={d} key={d.date}/>)}  
        </div>
    );
}

export default Sidebar;
