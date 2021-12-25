import {useParams} from "react-router-dom";
import useFetch from "../fetcher";
import React from "react";

const BlogMain = () => {
    const {id} = useParams()
    const {blogs: blog, loading, error} = useFetch('http://localhost:3001/blogs/' + id);

    return (
        <div className='blog__page'>
            {error && <div>{error}</div>}
            {loading && <div className="loader"><div className='loading'></div></div>}
            { blog && (
                <article className="blog__article">
                    <div className='blog__header'>{blog.title}</div>
                    <div className="blog__data">
                        By <span className='blog__data-author'>{blog.posted}</span>
                        <span className='blog__data-divider'>&#9675;</span>
                        <span className='blog__data-datetime'>{blog.date}</span>
                    </div>
                    <div className="blog__body">
                        <div>
                            <p>
                                {blog.description}.
                                Before we look at what a cache missis, it’s important to first understand how caching
                                works and the purpose it serves. In a nutshell, caching is the process of saving site
                                data to the cache so that it can easily be accessed without having to retrieve all of
                                that information from the server. Instead, the site content is loaded as a static
                                version. This results in a faster loading time for your pages.
                            </p>
                            <blockquote cite="Tim Berners-Lee">
                                The Semantic Web is not a separate Web but an extension of the current one, in which
                                information is given well-defined meaning, better enabling computers and people to work
                                in cooperation.
                            </blockquote>
                            <h2>What Happens During a Cache Miss</h2>
                            <p>
                                When a cache miss occurs, the system or application will try a second time to find the
                                data. However, when it’s not able to locate it in the cache memory on the first attempt,
                                the next step is to check the main database. If the data is found, it’s usually copied
                                and saved to the cache with the assumption that there will be another request for it in
                                the future. Checking the main database for the data takes more time, which leads to
                                latency. In other words, it can hamper the speed and performance of your site. The more
                                cache misses that occur, the longer the latency.
                            </p>
                            <h2>How to Reduce Cache Misses</h2>
                            <p>
                                The good news is that there are a few strategies you can use to increase the likelihood
                                that the requested data will be found in the cache memory. Ultimately, the goal is to
                                minimize how often your data has to be written into the memory. Let’s take a look at
                                three tips you can use to reduce cache misses.
                            </p>
                            <h2>Conclusion</h2>
                            <hr />
                            <p>
                                In a nutshell, applying a combination of the above policies can help reduce cache misses
                                even when you’re unable to increase the size of your cache. The policies tell the
                                caching system which data to delete first in order to make room for new data.
                                If you want to try this out, you may want to contact your hosting provider for assistance.
                            </p>
                        </div>
                    </div>
                </article>
            )}
        </div>
    )
}

export default BlogMain