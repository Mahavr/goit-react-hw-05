import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Suspense, lazy } from "react";
import { Loader } from "./Loader/Loader";
import MovieCast from "./MovieCast/MovieCast";
import MovieReview from "./MovieReview/MovieReview";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
