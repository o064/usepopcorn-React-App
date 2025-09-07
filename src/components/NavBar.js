import { useEffect, useRef } from "react"
import { useKey } from "../customHooks/useKey";
export function Logo() {
    return (
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    );
}
export function Search({ query, setQuery }) {
    const inputEle = useRef(null); // create referece
    useKey("Enter", () => {
        if (document.activeElement === inputEle.current)
            return;
        inputEle.current.focus()
        setQuery("")
    })
    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEle} // input is connected to inputEle 
        />
    );
}
export function NumResults({ movies }) {
    return (
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
        </p>
    );
}
export function NavBar({ children }) {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    );
}
