import './App.css';
import Flat from "./components/Flat.jsx"

//the return here is JSX but it looks like HTML. Babel will convert this to Javascript and JSX

const tempFlat =  {
  "id": 145,
  "name": "The Stay Chez Claudette",
  "imageUrl": "https://raw.githubusercontent.com/phutngo/airbnb-clone/master/images/chez-claudette-tripadvisor.jpg",
  "price": 164,
  "priceCurrency": "CAD",
  "lat": 45.5264082,
  "lng": -73.5900536
};


function App() {
  return (
    <div>
    
    <Flat data = {tempFlat} />

    </div>
  )
};

export default App;
