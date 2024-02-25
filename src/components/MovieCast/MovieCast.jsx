import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovie = await getMovieCast(movieId);
        setCast(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {!loading && cast.length <= 0 && <p>No information</p>}
      {!loading && cast.length > 0 && (
        <div>
          <ul className={css.list}>
            {cast.map((actor) => (
              <li key={actor.id} className={css.item}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={`${actor.name}`}
                  className={css.img}
                />
                <div className={css.textWrapper}>
                  <p className={css.text}>{actor.name}</p>
                  <p className={css.textCharacter}>{actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
