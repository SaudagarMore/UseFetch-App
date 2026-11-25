import { useState, useEffect, useCallback } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = useCallback(async (signal) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, { signal });
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            console.error("API Fetch Error:", err);
            if (err.name !== "AbortError") {
                setError(
                    err.message || "Something went wrong while fetching data"
                );
            }
        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }
    }, [url]);
    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal);
        return () => {
            controller.abort();
        };
    }, [fetchData]);
    return { data, loading, error };
};
export default useFetch;