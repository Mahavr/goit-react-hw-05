import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../api";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import css from './MovieReview.module.css'

export default function MovieReview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovie = await getMovieReview(movieId);
        setReviews(fetchedMovie);
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
      {!loading && reviews.length <= 0 && <p className={css.noReviews}>No reviews</p>}
      {!loading && reviews.length > 0 && (
        <div className={css.wrapper}>
          <h2 className={css.title}>Reviews:</h2>
          <ul className={css.list}>
            {reviews.map((review) => (
              <li key={review.id} className={css.item}>
                <p className={css.text}>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
