import { useEffect, useState } from "react";
import { getTrending } from "../api";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Loader } from "../components/Loader/Loader";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedTrending = await getTrending({
          abortController: controller,
        });
        setTrending(fetchedTrending);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList trending={trending} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
