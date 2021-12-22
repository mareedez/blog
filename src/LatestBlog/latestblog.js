import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectUserInput, setBlogData} from "../Actions/User";
import "./latestblog.css"

const Blogs = () => {
    const searchInput = useSelector(selectUserInput);
    const blog_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=xKELjqGULkJmNrigEeasARIGfGlRwjKo`;
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(blog_url)
            .then((response) => {
                dispatch(setBlogData(response.data.response.docs.slice(0, 6)));
                setBlogs(response.data.response.docs.slice(0, 6));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [blog_url, dispatch, searchInput]);

    return (
        <div className="blog__page">
            <div className="header">Popular News</div>
            <div className="header__description">What's trending today</div>
            {loading ? <h1 className="loading">Loading...</h1> : ""}
            <div className="blogs">
                {blogs?.map((blog) => (
                    <a className="blog" target="_blank" rel='noreferrer' href={blog.url}>
                        <img src={blog.multimedia[0]?.url ?
                            `https://nytimes.com/${blog.multimedia[0].url}`:
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                        }  alt="news"/>
                        <div className="blog__content">
                            <div className="sourceName">
                                <span><div className='dot'>""</div> {blog.news_desk}</span>
                            </div>
                            <div className="blog__data">
                                By <span className='blog__data-author'>{blog.byline?.person[0]?.lastname ? blog.byline?.person[0]?.lastname : 'NYTimes'}</span>
                                <span className='blog__data-divider'>&#9675;</span>
                                <span className='blog__data-datetime'>{blog.pub_date.slice(0, 10)}</span>
                            </div>
                            <h1>{blog.headline.main}</h1>
                            <div className="blog__desc">{blog.snippet}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Blogs;