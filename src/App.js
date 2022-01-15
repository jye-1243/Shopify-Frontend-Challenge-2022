import { useEffect, useState } from 'react';
import './App.css';

const key = 'CWosxwH7OrcfEmkDYwoK4xGrVPzvlLNf6wCEu5Ro';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=2021-01-01&end_date=2021-01-10`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <h1> Spacestagram </h1>
      <p>{items.url}</p> 
      {items.map((item) => 
      <img src={item.hdurl}></img> )}
    </div>
  );
}

export default App;
