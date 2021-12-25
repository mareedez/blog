import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectUserInput} from "./Actions/User";

    const useFetch = (url) => {
        const [blogs, setBlogs] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const searchInput = useSelector(selectUserInput);

        useEffect(() => {
            const control = new AbortController();

            fetch(url, {signal: control.signal})
                .then(res => {
                    if(!res.ok) {
                        throw Error('Failed fetching')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                    setError(null)
                })
                .catch(error => {
                    if (error.name === 'AbortError') {
                        console.log('aborted')
                    } else {
                        setLoading(false);
                        setError(error.message);
                    }
                })
            return () => control.abort()
        }, [url, searchInput]);

        return {blogs, loading, error}
}

export default useFetch;