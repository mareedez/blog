import {useEffect, useState} from "react";

    const useFetch = (url) => {
        const [blogs, setBlogs] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetch(url)
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
                    setLoading(false);
                    setError(error.message);
                })
        }, [url]);

        return {blogs, loading, error}
}

export default useFetch;