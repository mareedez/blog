import React from "react";
import {useSelector} from "react-redux";
import {selectSignedIn} from "../Actions/User";
import {Link} from "react-router-dom";

const Blogcomponent = ({blogs, header, headerDescription}) => {
    const isSignedIn = useSelector(selectSignedIn);
    const handleDelete = value => () => {
        fetch('http://localhost:3001/blogs/' + value, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload()
        })
    }

    return (
        <div className="blog__page">
            <div className="header">{header}</div>
            <div className="header__description">{headerDescription}</div>
            <div className="blogs">
                {blogs?.map((blog) => (
                    <article className="blog" key={blog.id}>
                        {isSignedIn ? (
                            <span onClick={handleDelete(blog.id)} className="fas fa-times-circle" title="delete blog"></span>
                        ) : ("")}
                            <img src={blog.image}  alt="user content"/>
                            <div className="blog__content">
                                <Link className="blog__redirect" to={`/${blog.category}`}>
                                    <div className="sourceName">
                                        <span><div className='dot'></div> {blog.category}</span>
                                    </div>
                                </Link>
                                <div className="blog__data">
                                    By <span className='blog__data-author'>{blog.posted}</span>
                                    <span className='blog__data-divider'>&#9675;</span>
                                    <span className='blog__data-datetime'>{blog.date}</span>
                                </div>
                                <Link className="blog__redirect" to={`blogs/${blog.id}`}>
                                    <h1 className="blog__title">{blog.title}</h1>
                                    <div className="blog__desc">{blog.description}</div>
                                </Link>
                            </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Blogcomponent;