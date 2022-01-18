import './../App.css'

function LikedMarker(props) {
    const d = props.data;
    
    return (
        <div key={d.date} className="sidebar-div">
            <h3 className="liked-title"> {d.title} </h3>
            <p> {d.byline ? "By: " + d.byline : ""} </p> 
            <p> {d.date} </p>
            <div className="button-row"> 
                <form> <button className='nav-button' name="date" value={d.date}> See Image </button>  </form>
            </div>
        </div> 
    );
}

export default LikedMarker;
