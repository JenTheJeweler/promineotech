// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// 
import React from "react";

//props below to dynamically fill in the info
function MovieData(props) { 
console.log ("this is my movie props", props.movieproperties)
let movieName = props.movieproperties.name
    return (
      <>
        
        
{/* iterate over movies array with map method, data of each movie, can output to another component... */}
      </>
    );
  }

  
  export default MovieData;