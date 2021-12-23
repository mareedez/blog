import React, {useState} from "react";
import Blogcomponent from "../../BlogComponent/blogcomponent";
import {data} from "../../Data/data"


const Guide = () => {
    const header = 'User Guides'
    const headerDescription = 'Step by step'
    const [blogs, setBlogs] = useState(data);
    const handleDelete = (id) => {
        const afterDelete = blogs.filter(blog => blog.id !== id);
        setBlogs(afterDelete);
    }

    return (
        <Blogcomponent blogs={blogs.filter((blog) => blog.category==="Guide")} header={header} headerDescription={headerDescription} handleDelete={handleDelete}/>
    );
};


export default Guide;