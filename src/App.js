import { useState } from "react";
import { NavBar, Search, NumResults } from "./components/NavBar";
import { WatchedMoviesList } from "./components/WatchedMoviesList.1";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import { WatchedSummary } from "./components/WatchedSummary";
import { Box } from "./components/Box";
import { Error } from "./components/Error";
import { Loader } from "./components/Loader";
import { Main } from "./components/Main";
import { useMovies } from "./customHooks/useMovies";
import { useLocalStorage } from "./customHooks/useLocalStorage";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
export default function App() {
  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useLocalStorage([], "watched")
  const { error, isLoading, movies } = useMovies(query);

  function handleSelectMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatchedMovie(movie) {
    setWatched(prevMovies => [...prevMovies, movie])
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box >
          {error && <Error error={error} />}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
        </Box>
        <Box >
          {
            selectedId ?
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatchedMovie}
                watched={watched} /> :
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList
                  watched={watched}
                  onDeleteWatched={handleDeleteWatched}
                />
              </>
          }
        </Box>
      </Main>
    </>
  );
}
