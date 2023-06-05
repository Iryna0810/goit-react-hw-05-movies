import Loader from 'components/Loader/Loader';
import FilmGalleryItem from '../FilmGalleryItem/FilmGalleryItem';
import { useLocation } from 'react-router-dom';


const FilmGallery = ({ films, error, loading }) => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <ul className="FilmGallery">
            {loading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}
            {films && films.map((film) => <FilmGalleryItem className='FilmGalleryItem' key={film.id} film={film} state={{ from: location.pathname }} />)}
        </ul>)
};

export default FilmGallery