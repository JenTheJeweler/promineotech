// -Stars: a one to five-star rating component that allows users to rate something
// (movies in this case, but remember that components are reusable, so you could use it elsewhere!)

import React,{useState} from 'react';
import {FaStar} from "react-icons/fa";
//ok, i installed npm react-icons and I can see it in my top node-modules folder, 
//but still getting an error that it can't resolve it, I don't understand why.

const StarRating = () => {
const [rating, setRating] = useState(null);
const [hover, setHover] = useState(null);


 return (
    <div> 
    {[...Array(5)].map((star, i)  => {
const ratingValue = i + 1;


       return (
       <label> 
        <input 
        type= "radio" 
        name="rating" 
        value={ratingValue} 
        onClick={() => setRating(ratingValue)}
        
        />
        <FaStar className="star" 
        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
        size={100} 
        onMouseEnter={() => setHover(ratingValue)}
        onMouseOut={() => setHover(null)}
        
        />
        </label>
       );
       })}
       <p>The rating is: {rating} </p>
    </div>
);
  };

export default StarRating

// Source for this file of code is from here: https://www.youtube.com/watch?v=eDw46GYAIDQ&t=56s
//it doesn't work.  But that's where I got it. 