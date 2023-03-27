// ReactJS
import { useState, useEffect } from "react";

// Axios
import axios from "axios";

export function useFetch(url: string) {
    // States
    const [data, setData] = useState({ results: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Effects
    useEffect(() => {
        axios(url)
            .then((res) => setData(res?.data))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Cancelled request");
                } else {
                    setError(error);
                }
            })
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
