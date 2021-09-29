import "./searchMovies.css";
import { useState } from "react";

export default function MovieCards({ movie }) {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const onClick1 = () => setShowText(false);

   const Text = () => <p className="card--desc">{movie.overview}</p>;
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} className="card--image" />
            <div className="card--content" >
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                {showText ? 
                  <Text /> : null}
               <button onClick={onClick}>Show Details</button>
               <button onClick={onClick1}>Hide Details</button>
            </div>             
        </div>
    )
}