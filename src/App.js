import './App.css';
import SearchMovies from './components/searchMovies';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Search Here</h1>
        <h3 className="subtitle">A lot of movies</h3>
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;

// import React, {useState} from "react";

// export default function ShowButtonHover() {
//     const [style, setStyle] = useState({display: 'none'});

//     return (
//         <div className="App">
//             <h2>Hidden Button in the box. Move mouse in the box</h2>
//             <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
//                  onMouseEnter={e => {
//                      setStyle({display: 'block'});
//                  }}
//                  onMouseLeave={e => {
//                      setStyle({display: 'none'})
//                  }}
//             >
//                 <button style={style}>Click</button>
//             </div>
//         </div>
//     );
// }
