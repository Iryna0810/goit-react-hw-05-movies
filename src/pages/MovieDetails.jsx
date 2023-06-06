import { useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Suspense } from "react";
import Loader from '../components/Loader/Loader'
import { LinkPage, List } from 'components/styled'
import currentFilmInfo from 'servises/fetch_movie_current';
import "../styles.css"

const IMG_URL = `https://image.tmdb.org/t/p/original`

const MovieDetails = () => {
    const { movieId } = useParams();
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();

    const bankLinkLocationRef = useRef(location.state?.from ?? '/');

    console.log(bankLinkLocationRef);
    console.log(location.state);


    const setLocalStorage = (movieId) => {
        window.localStorage.setItem('movieIdKey', JSON.stringify(movieId));
    }

    useEffect(() => {
        setLocalStorage(movieId);
        setIsLoading(true);
        setFilms([]);
        currentFilmInfo(movieId)
            .then(({ data }) => {
                setFilms(data);
            })
            .catch((error) => setError(error))
            .finally(() => {
                setIsLoading(false)
            })
    }, [movieId])
   
    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}
                
            <div key={movieId} className="ImageGalleryItem">
                <div>
                    <LinkPage to={bankLinkLocationRef.current}>Go Back</LinkPage>
                    <img
                        src={`${IMG_URL}/${films.backdrop_path}`}
                        alt={films.title} />
                    <h3>{films.title}</h3>
                    <p>{films.overview}</p>
                </div>
            </div>
            <List>
                <li>
                    <LinkPage to="cast" state={movieId}>Cast</LinkPage>
                </li>
                <li>
                    <LinkPage to="reviews" state={movieId}>Reviews</LinkPage>
                </li>
            </List>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
};

export default MovieDetails
