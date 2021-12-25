import {useParams} from "react-router-dom";
import useFetch from "../fetch";

const BlogMain = () => {
    const {id} = useParams()
    const {blogs: blog, loading, error} = useFetch('http://localhost:3001/blogs/' + id);

    return (
        <div className='blog__page'>
            {error && <div>{error}</div>}
            {loading && <div className="loader"><div className='loading'></div></div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.description}</div>
                </article>
            )}
        </div>
    )
}

export default BlogMain