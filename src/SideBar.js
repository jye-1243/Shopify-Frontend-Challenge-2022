import './App.css'

function SideBar(props) {
    const likes = props.likes;
    console.log(likes);
    return (
        <div className="sidebar">
            <h2> Your Liked Photos </h2>          
            {likes.map((d) => 
                <div key={d.date} className="sidebar-div">
                    <h3> {d.title} </h3>
                    <p> {d.byline ? "By: " + d.byline : ""} </p> 
                    <p> {d.date} </p>
                </div> 
            )}  
        </div>
    );
}

export default SideBar;
