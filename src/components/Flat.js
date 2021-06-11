import React from 'react';
import './Flat.css';

//Flat.js is a functional component that simply takes props from its parent component App.js. The props is the flat data such as name, price, etc. Then our Flat.js functional component simply renders the data as a card when called by App.js

const Flat = ( {data} ) => { //destructure data from props. data was passed in as an object
  const {name, price, priceCurrency, imageUrl} = data; //destructure data

    return (
    <>
    <div className="flat">
      <div 
        className="flat-picture" 
        style={{
          backgroundImage: `url( '${imageUrl}' )`
        }}>  
      </div>
      <div className="flat-title"> 
        {name} - {price} {priceCurrency}
      </div>
    </div>
    </>    
    );
};

export default Flat