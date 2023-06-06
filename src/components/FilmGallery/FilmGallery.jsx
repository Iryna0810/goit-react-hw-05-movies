import Loader from 'components/Loader/Loader';
import FilmGalleryItem from '../FilmGalleryItem/FilmGalleryItem';
import { useLocation } from 'react-router-dom';


const FilmGallery = ({ films, error, loading }) => {
    const location = useLocation();
    return (
        <ul className="FilmGallery">
            {loading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}
            {films && films.map((film) => <FilmGalleryItem className='FilmGalleryItem' key={film.id} film={film} location={location} />)}
        </ul>)
};

export default FilmGallery