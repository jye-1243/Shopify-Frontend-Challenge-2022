import { useEffect, useState } from 'react';
import './App.css';
import Post from './Post/Post';
import TopBar from './TopBar'
import SideBar from './SideBar'
import moment from 'moment';

const key = 'CWosxwH7OrcfEmkDYwoK4xGrVPzvlLNf6wCEu5Ro';
const currDate = new Date();
const dateString = currDate.toISOString().slice(0,10);
const prevDate = new Date()
prevDate.setDate(prevDate.getDate() - 10);
const prevDateString = prevDate.toISOString().slice(0,10);

const queryParams = new URLSearchParams(window.location.search);

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); 
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    if (window.sessionStorage.getItem("spacestagram-liked-photos")) { 
      setLiked(JSON.parse(window.sessionStorage.getItem("spacestagram-liked-photos")));
    }
    const searchDate = queryParams.get('date');
    var query = `https://api.nasa.gov/planetary/apod?api_key=${key}&end_date=${dateString}&start_date=${prevDateString}`;
    if (searchDate) {
      if (moment(searchDate,'YYYY-MM-DD', true).isValid() && moment(searchDate) >= moment('1995-06-16') && moment(searchDate) <= moment(currDate)) {
        query = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${searchDate}`
      }
      else if ((moment(searchDate,'YYYY-MM-DD', true).isValid())) {
        alert("There is no data for the searched date");
      }
      else {
        alert("The searched date is not in the proper format");
      }
    }
    fetch(query)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(Array.isArray(result) ? result.reverse(): [result]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("spacestagram-liked-photos", JSON.stringify(liked));
  }, [liked]);

  function handleLike(date) {
    setLiked(liked => [...liked, date]);
  }

  function handleUnlike(date) {
    setLiked(liked => liked.filter((d) => d.date !== date));
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <TopBar/>
      <div className="body"> 
        <div className="post-div">
          
          {items.map((item) => 
            <Post data={item} 
                  key={item.date} 
                  handleLike={handleLike} 
                  handleUnlike={handleUnlike}
                  liked={liked.some((d) => d.date === item.date)}/>)}
        </div>
        <div className="side-bar-container">
          <SideBar likes={liked}/>
        </div>
      </div>

    </div>
  );
}

export default App;
