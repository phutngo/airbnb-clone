import React from 'react';
import './Flat.css';

/* https://raw.githubusercontent.com/phutngo/airbnb-clone/main/flats.json

The raw.githubusercontent.com domain is used to serve unprocessed versions of files stored in GitHub repositories. If you browse to a file on GitHub and then click the Raw link you get this link. 

We will use this link as if it was an API endpoint to practice fetching data from it.
*/


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