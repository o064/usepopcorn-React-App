import { useState, useEffect, useRef } from "react";
import { KEY } from "../customHooks/useMovies";
import { Loader } from "./Loader";
import StarRating from "./StarRating";
import { useKey } from "../customHooks/useKey";

export function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
    const [movie, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState("");

    const countRef = useRef(0)
    const isWatched = watched.map(movie => movie.imdbID).includes(selectedId)
    const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;
    const {
        Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre,
    } = movie;
    useEffect(() => {
        async function fecthMovieDetails() {
            setIsLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setMovieDetails(data);
            setIsLoading(false);
        }
        fecthMovieDetails();
    }, [selectedId]);
    useKey("Escape", onCloseMovie)
    useEffect(() => {
        if (!title) return
        document.title = `Movie | ${title}`;
        return function () {
            document.title = "usePopcorn"
        }
    }, [title]);
    useEffect(() => {
        if (userRating) countRef.current += 1
    }, [userRating])
    function handleAdd() {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            userRating,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(" ").at(0)),
            countRatingDescisions: countRef
        }
        onAddWatched(newWatchedMovie)
        onCloseMovie()
    }

    return (
        <div className="details">
            {isLoading ? <Loader /> :
                <>
                    <header>
                        <button className="btn-back" onClick={onCloseMovie}>
                            &larr;
                        </button>
                        <img src={poster} alt={`Poster of ${movie} movie`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐️</span>
                                {imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className="rating">
                            {
                                !isWatched ?
                                    <>
                                        <StarRating
                                            maxRating={10}
                                            size={24}
                                            onSetRating={setUserRating}
                                        />
                                        {
                                            userRating > 0 &&
                                            <button className="btn-add" onClick={handleAdd}>
                                                + Add to list
                                            </button>
                                        }
                                    </> :
                                    <p>You Rated this Movie {watchedUserRating} <span>🌟</span></p>
                            }
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>}
        </div>
    );
}
