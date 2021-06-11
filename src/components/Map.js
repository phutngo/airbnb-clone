import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN = "pk.eyJ1IjoicGh1bmdvIiwiYSI6ImNrcHNxcDUwcDBoZ2Iybm12a2Framk4M2gifQ.e8e6qiPECca3_63S_xFlUw";

const Map = ( { propFlat } ) => {
 const [viewport, setViewport] = useState({
   latitude: 45.4972159, // Montreal
   longitude: -73.6103642, // Montreal
   zoom: 12,
   pitch: 0,
   bearing: 0,
 });

 return (
   <ReactMapGL
     {...viewport}
     width="100%"
     height="100%"
     mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
     mapboxApiAccessToken={MAPBOX_TOKEN}
     onViewportChange={(viewport) => setViewport(viewport)}
     transitionDuration={50}
   >


   </ReactMapGL>
 );
};

/*
Regarding {...viewport}, ... is a spread operator, in this case it spreads ALL the keys under the object viewport (which defaults to the values that we set in useState)

In this case {...viewport} is equivalent to
{viewport.latitude: 45.4972159,
viewport.longitude: -73.6103642, 
viewport.zoom: 12,
viewport.pitch: 0,
viewport.bearing: 0}

*/

/*
    {propFlat.map( (el) => (
        <Marker latitude={propFlat.lat} longitude={propFlat.lng}>
        <div>
           YOU ARE HERE
        </div>
        </Marker>
    ))}
*/

export default Map;
