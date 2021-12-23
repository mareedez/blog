import React, {useState} from "react";
import Blogcomponent from "../../BlogComponent/blogcomponent";
import {data} from "../../Data/data"

const Guide = () => {
    const header = 'User Guides'
    const headerDescription = 'Step by step'
    const [blogs, setBlogs] = useState(data);

    return (
        <Blogcomponent blogs={blogs.filter((blog) => blog.category==="Maintenance")} header={header} headerDescription={headerDescription}/>
    );
};


export default Guide;