import { SearchBox } from "../components/SerchBox/SearchBox";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../api";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loader } from "../components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import { MoviesList } from "../components/MoviesList/MoviesList";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";

  const searchMovie = (newQuery) => {
    params.set("query", newQuery);
    setParams(params);
  };
  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await getMovieSearch(query);
        setMovie(fetchedData);

        if (fetchedData.length === 0) {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBox onSubmit={searchMovie} />
      {error && <ErrorMessage />}
      {loading && <Loader />}

      {movie.length > 0 && <MoviesList trending={movie} />}
      <Toaster position="bottom-center" />
    </div>
  );
}
