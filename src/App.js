import React, { useState, useEffect } from "react";
import "./App.css";
import Flat from "./components/Flat";
import Map from "./components/Map";

//the return here is JSX but it looks like HTML. Babel will convert this to Javascript and JSX

const defaultFlat = [
  {
  "id": 211,
  "name": "DEFAULT FLAT NAME b/c we could not load API data",
  "imageUrl": "https://images.unsplash.com/photo-1542338106-1b4bfe84d5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "price": "N/A",
  "priceCurrency": "N/A",
  "lat": 45.50607170333054,
  "lng": -73.5904651402887
  }
]

const App = () => {
  const [theFlat, setFlats] = useState(defaultFlat); //useState here takes in an initial Array named flats. Below in the .map method, on load we render each element in the array. We still have not used the value of useState yet.

  
  useEffect( () => {
    const url = 'https://raw.githubusercontent.com/phutngo/airbnb-clone/main/flats.json';

    fetch(url)
    .then( (res) => res.json())
    .then( (data) => setFlats(data))
    .catch( (err) => {
        //do whatever here if error hits
    });
  }, [])
  

  return (
    <div className="app">
      <div className="main">
        <div className="search"></div>
        <div className="flats">
          
          {theFlat.map( (el) => (
            <Flat key={el.id} data={el} />
          ))}

        </div>
      </div>
      <div className="map">
        <Map propFlat={theFlat} />
      </div>
    </div>
  );
}

export default App;
