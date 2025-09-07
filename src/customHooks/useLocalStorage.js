import { useState, useEffect } from "react";
export function useLocalStorage(intitalState, key) {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem("watched")
        return storedData ? JSON.parse(storedData) : intitalState;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])
    return [value, setValue]
}