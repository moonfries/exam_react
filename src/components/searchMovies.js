import "./searchMovies.css";
import MovieCards from "./movieCards";
import { useState } from "react";

export default function SearchMovies() {

    const [input, setInput] = useState('')
    // const [query, setQuery] = useState('');
    const [page, setPage] = useState(1)
    const [x, setX] =useState(1)
    const [movies, setMovies] = useState([]);

    let pageUrl = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${input}&page=${page+1}&include_adult=false`;

    const searchMovies = async (e) => {
      if (input.length === 0) return null
        
          e.preventDefault()
          try {
              const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${input}&page=1&include_adult=false`)
              const data = await res.json()
              // console.log(data.results);
              if(data.total_results===0 && page ===1){
                  setX(0)
              }
             else {
                  setMovies(data.results)
                  setPage(1)
                  setX(1)
              }
             
          }
          catch (err) {
              console.log(err);
          }
          
  
  }

    const searchNextPage =  async() => {
          
      try {
          const res = await fetch(pageUrl)
          const data = await res.json()
          // console.log(data.results);
          setMovies(data.results)
          setPage(page+1)
      }
      catch (err) {
          console.log(err);
      }

  }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movies</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={input} onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">

                {movies.filter(movie => movie.poster_path).map(movie => (
                    // <div className="card" key={movie.id}>
                    //     <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'} className="card--image" />
                    //     <div className="card--content">
                    //         <h3 className="card--title">{movie.title}</h3>
                    //         <p><small>RELEASE DATE: {movie.release_date}</small></p>
                    //         <p><small>RATING: {movie.vote_average}</small></p>
                    //         <p className="card--desc">{movie.overview}</p>
                    //     </div>
                    // </div>
                    <MovieCards movie={movie} key={movie.id} />
                ))}
            </div>
            <div><br />
                {movies.length > 0 && x!==0 && <button className='submit' type='button' onClick={searchNextPage}><a href={'/#'} style={{textDecoration:'none',color:'green',transition:'500ms'}}>Next Page</a></button>}
                <hr style={{border:'black'}} />       
            </div>
        </>


    )
}