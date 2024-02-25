import { BackLink } from "../BackLink/BackLink";
import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import css from "./MovieDetails.module.css";
export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  return (
    <div className={css.wrapper}>
      <BackLink href={backLinkRef.current ?? "/movies"}>
        Back to movies
      </BackLink>

      <div className={css.derailsWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title}`}
          className={css.img}
        />

        <div className={css.details}>
          <div className={css.titles}>
            <h2 className={css.detailsTitle}>{movie.title}</h2>
            <h3>{movie.original_title}</h3>
          </div>
          <div className={css.rating}>
            <h3 className={css.detailsTitle}>Rating:</h3>
            <p>{movie.vote_average}</p>
          </div>
          <div className={css.release}>
            <h3 className={css.detailsTitle}>Release date</h3>
            <p>{movie.release_date}</p>
          </div>
          <div className={css.overview}>
            <h3 className={css.detailsTitle}>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div className={css.genres}>
            <h3 className={css.detailsTitle}>Genres</h3>
            <ul>
              {movie.genres?.map((genre) => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              )) ?? []}
            </ul>
          </div>
        </div>
      </div>

      <div className={css.linkWrapper}>
          <NavLink className={css.cast} to="cast">
            Cast
          </NavLink>
          <NavLink className={css.reviews} to="reviews">
            Review
          </NavLink>
      </div>
    </div>
  );
};
