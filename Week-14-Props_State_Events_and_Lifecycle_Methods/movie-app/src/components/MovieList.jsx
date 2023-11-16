// -MovieList: a container for all the Movie components and their data.  
// (local version of db.json) array of data

import React from "react";
import MovieData from "./Movie";

render ( )
 {
  return (

      <table>
      <thead>
      <tr>
          <th>Movie</th>
          <th>Year</th>
          <th>Director</th>
          <th>Image</th>
          <th>Rating</th>
      </tr>
      </thead>
      <tbody>
          {this.MovieList.map((movies, index) => (
           <tr key={index}>
              <td>{movies.movieName}</td>
              <td>{movies.movieYear}</td>
              <td>{movies.director}</td>
              <td>{movies.img}</td>
              <td>{movies.rating}</td>
           </tr>
))}
      </tbody>
    </table>
  
    )
  }


function MovieList() {
    let movies = [
        
        {
          id: 1,
          movieName: "Adaptaion.",
          movieYear: "2002",
          director:"Spike Jonze",
          img: "movie-app/src/components/Images/Adaptation.2002.jpg",
          rating: ""
        },
        {
          id: 2,
          movieName: "Face/Off",
          movieYear: "1997",
          director:"John Woo",
          img: "movie-app/src/components/Images/FaceOff1997.jpg",
          rating: ""
        },
        {
          id: 3,
          movieName: "Grande Isle",
          movieYear: "2019",
          director:"Stephen Campanelli",
          img: "movie-app/src/components/Images/GrandeIsle2019.jpg",
          rating: ""
        },
        {
          id: 4,
          movieName: "Pig",
          movieYear: "2021",
          director:"Michael Sarnoski",
          img: "movie-app/src/components/Images/Pig2021.jpg",
          rating: ""
        },
        {
          id: 5,
          movieName: "Renfield",
          movieYear: "2023",
          director:"Chris McKay",
          img: "movie-app/src/components/Images/Renfield2023.jpg",
          rating: ""
        },
        {
          id: 6,
          movieName: "The Unbearable Weight of Massive Talent",
          movieYear: "2023",
          director:"Tom Gormican",
          img: "movie-app/src/components/Images/TheUnbearableWeightofMassiveTalent2022.jpg",
          rating: ""
        },
        {
          id: 7,
          movieName: "Willie's Wonderland",
          movieYear: "2021",
          director:"Kevin Lewis",
          img: "movie-app/src/components/Images/Willie'sWonderland2021.jpg",
          rating: ""
        }
    ]
    return (
      <>
        <h1>Movie List</h1>
        {movies.map(function (movie){
             return(<MovieData key={movie.id} movieproperties= {movie}/>)
          //I think i can add additional array lines here?  I don't know.

        })} 
{/* Mapping over the array lines additional .jsx can be mapped over below, 
inside element, html 'fragments' */}
      </>
    );
  }
  
  export default MovieList;