import React, {useState} from "react";
import Blogcomponent from "../BlogComponent/blogcomponent";
import {data} from "../Data/data"
import './userblogs.css'

const Blog = () => {
    const header = 'Community Blog'
    const headerDescription = 'Share your knowledge'
    const [blogs, setBlogs] = useState(data);
    const handleDelete = (id) => {
        const afterDelete = blogs.filter(blog => blog.id !== id);
        setBlogs(afterDelete);
    }

    return (
        <Blogcomponent blogs={blogs} header={header} headerDescription={headerDescription} handleDelete={handleDelete}/>
    );
};


export default Blog;