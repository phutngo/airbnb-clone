import React, { useState } from "react";
import "./App.css";
import Flat from "./components/Flat";

//the return here is JSX but it looks like HTML. Babel will convert this to Javascript and JSX

const flats = [
  {
    "id": 145,
    "name": "The Stay Chez Claudette",
    "imageUrl": "https://raw.githubusercontent.com/phutngo/airbnb-clone/master/images/chez.jpg",
    "price": 164,
    "priceCurrency": "CAD",
    "lat": 45.5264082,
    "lng": -73.5900536
  },
  {
    "id": 148,
    "name": "Trendy Apt in Old Port",
    "imageUrl": "https://raw.githubusercontent.com/phutngo/airbnb-clone/master/images/flat2.jpg",
    "price": 200,
    "priceCurrency": "CAD",
    "lat": 45.5042387,
    "lng": -73.5529991
  },
  {
    "id": 201,
    "name": "Super 60m2 in trendy neighborhood!",
    "imageUrl": "https://raw.githubusercontent.com/phutngo/airbnb-clone/master/images/flat3.jpg",
    "price": 150,
    "priceCurrency": "CAD",
    "lat": 45.52537,
    "lng": -73.5675921
  },
  {
    "id": 205,
    "name": "Splendide terrasse vue imprenable",
    "imageUrl": "https://raw.githubusercontent.com/phutngo/airbnb-clone/master/images/flat4.jpg",
    "price": 115,
    "priceCurrency": "CAD",
    "lat": 45.48230623919599,
    "lng": -73.57179696554505
  },
  {
    "id": 210,
    "name": "Superbe vue à 2 min du Vieux-Port",
    "imageUrl": "https://raw.githubusercontent.com/phutngo/airbnb-clone/master/images/flat5.jpg",
    "price": 135,
    "priceCurrency": "CAD",
    "lat": 45.48369032601707,
    "lng": -73.55075855622255
  },
  {
    "id": 211,
    "name": "Tent atop Mount Royal",
    "imageUrl": "https://images.unsplash.com/photo-1542338106-1b4bfe84d5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "price": 15,
    "priceCurrency": "CAD",
    "lat": 45.50607170333054,
    "lng": -73.5904651402887
  }
]

const App = () => {
  const [theFlat, setFlats] = useState(flats); //useState here takes in an initial Array. Below in the .map method, on load we render each element in the array. We still have not used the value of useState yet.

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
      <div className="map"></div>
    </div>
  );
}

export default App;
