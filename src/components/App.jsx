import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
// import Home from '../pages/Home'
// import SharedLayout from './SharedLayout/SharedLayout'
// import Movies from "pages/Movies";
// import MovieDetails from '../pages/MovieDetails'
// import Reviews from '../components/Reviews/Reviews'
// import Cast from '../components/Cast/Cast'
import '../styles.css'

const Home = lazy(() => import('../pages/Home'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));

export const App = () => {
  return ( 
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/:movieId' element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='movies' element={<Movies/>} />
        <Route path='movies/:movieId'
          element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      </Routes>
  );
};


