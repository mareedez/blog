import React, {useState} from "react";
import Blogcomponent from "../../BlogComponent/blogcomponent";
import {data} from "../../Data/data"

const Guide = () => {
    const header = 'Maintenance'
    const headerDescription = 'Keep it healthy'
    const [blogs, setBlogs] = useState(data);
    const handleDelete = (id) => {
        const afterDelete = blogs.filter(blog => blog.id !== id);
        setBlogs(afterDelete);
    }

    return (
        <Blogcomponent blogs={blogs.filter((blog) => blog.category==="Maintenance")} header={header} headerDescription={headerDescription} handleDelete={handleDelete}/>
    );
};


export default Guide;