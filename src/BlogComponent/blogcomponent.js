import React from "react";
import {useSelector} from "react-redux";
import {selectSignedIn} from "../Actions/User";

const Blogcomponent = ({blogs, header, headerDescription, handleDelete}) => {
    const isSignedIn = useSelector(selectSignedIn);
    return (
        <div className="blog__page">
            <div className="header">{header}</div>
            <div className="header__description">{headerDescription}</div>
            <div className="blogs">
                {blogs?.map((blog) => (
                    <article className="blog" key={blog.id}>
                        {isSignedIn ? (
                            <span onClick={() => handleDelete(blog.id)} className="fas fa-times-circle" title="delete blog"></span>
                        ) : ("")}
                            <img src={blog.image}  alt="user content"/>
                        <div className="blog__content">
                            <div className="sourceName">
                                <span><div className='dot'></div> {blog.category}</span>
                            </div>
                            <div className="blog__data">
                                By <span className='blog__data-author'>{blog.posted}</span>
                                <span className='blog__data-divider'>&#9675;</span>
                                <span className='blog__data-datetime'>{blog.date}</span>
                            </div>
                            <h1>{blog.title}</h1>
                            <div className="blog__desc">{blog.description}</div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Blogcomponent;