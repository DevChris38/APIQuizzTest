import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [film, setFilm] = useState([])
  const [alea, setAlea] = useState();

  const afficherFilms = (alea) => {
    fetch(`https://api.themoviedb.org/3/movie/${alea}?api_key=d8bedc0b2557b9f57527c89f46531039`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFilm(data)
      })
  }

  useEffect(() => {
    afficherFilms(alea);
    console.log(alea);
    console.log(film.backdrop_path);
  }, [alea]);

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt="" srcset="" />
      <button onClick={() => (setAlea(Math.floor(Math.random() * 1000)))}> Nouveau film ? </button>
    </>
  )
}

export default App
