import { NavLink, useLocation } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import css from "./MoviesList.module.css";

export const MoviesList = ({ trending }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {trending.map((trend) => (
        <li key={trend.id} className={css.item}>
          <NavLink
            to={`/movies/${trend.id}`}
            element={MovieDetailsPage}
            state={location}
          >
            <div className={css.wrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                alt={`${trend.title}`}
                className={css.img}
              />
              <p className={css.ovarlay}>{trend.title}</p>
            </div>
            <p className={css.title}>{trend.title}</p>
            <p className={css.subtitle}>Release: {trend.release_date}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
