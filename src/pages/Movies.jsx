import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import searchFilm from 'servises/fetch_movie';
import { Searchbar } from "components/SearchBar/SearchBar";
import FilmGallery from '../components/FilmGallery/FilmGallery'
import "../styles.css"

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const movieName = searchParams.get("name") ?? "";



  useEffect(() => {
    setFilms([]);
    if (movieName) {
    setIsLoading(true);
    searchFilm(movieName)
      .then(({ data }) => {
        setFilms(data.results);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false)
      })
  }
    }, [movieName])

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '3fr',
        gridGap: '16px',
        paddingBottom: '24px',
        height: '100vh',
        color: '#010101'
       
      }}
    >
      <Searchbar handleSearch={updateQueryString} />
      {movieName && <FilmGallery films={films}
        loading={isLoading}
        error={error}
      />}
    </div>
  );
}

export default Movies
