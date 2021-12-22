import React, {useState} from "react";
import './userblogs.css'

const Userblog = () => {
    const [userblogs, setUserblogs] = useState([
        {
            id: 1,
            title: "A Complete Guide to Cache Misses (and How to Reduce Them)",
            description: "A cache miss happens periodically, it is just a part of online life. Read more about how to reduce a cache miss in this easy-to-follow guide",
            category: "Guide",
            image: "https://kinsta.com/wp-content/uploads/2021/12/cache-miss.png",
            posted: "Kinsta",
            date: "December 17, 2021",
        },
        {
            id: 2,
            title: "Guide to Becoming a Frontend Developer: Job Skills and Responsibilities",
            description: "This easy-to-follow guide will take you through everything it requires to become a successful frontend developer",
            category: "Guide",
            image: "https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png",
            posted: "Salman Ravoof",
            date: "December 13, 2021",
        },
        {
            id: 3,
            title: "How To Edit the Hosts File in Windows 10",
            description: "Tired of stumbling around the hosts file? Learn how to edit the hosts file in Windows 10 using these easy-to-follow instructions",
            category: "Security",
            image: "https://kinsta.com/wp-content/uploads/2021/11/windows-10-hosts-file.jpg",
            posted: "Kinsta",
            date: "November 17, 2021",
        },
        {
            id: 4,
            title: "What Is Cached Data? Explore 3 Easy Ways to Clear It",
            description: "A cache miss happens periodically, it is just a part of online life. Read more about how to reduce a cache miss in this easy-to-follow guide",
            category: "Maintenance",
            image: "https://kinsta.com/wp-content/uploads/2021/11/what-is-cached-data.jpg",
            posted: "Jeremy Holcombe",
            date: "November 15, 2021",
        },
        {
            id: 5,
            title: "How to Scan WordPress for Malware in 4 Easy Steps",
            description: "Malware is a serious threat. Here are 4 ways to scan for Malware in WordPress so that you can find it and get rid of it",
            category: "Guide",
            image: "https://kinsta.com/wp-content/uploads/2021/10/scan-wordpress-for-malware.jpg",
            posted: "Jeremy Holcombe",
            date: "November 13, 2021",
        },
        {
            id: 6,
            title: "Managed WordPress Hosting for Publishers",
            description: "With industry-leading speed, performance, and global CDN, Managed WordPress Hosting for Publishers can't be beaten",
            category: "Maintenance",
            image: "https://kinsta.com/wp-content/uploads/2020/04/wordpress-seo-1.jpg",
            posted: "Kinsta",
            date: "November 10, 2021",
        },
        {
            id: 7,
            title: "A Complete Guide to Cache Misses (and How to Reduce Them)",
            description: "A cache miss happens periodically, it is just a part of online life. Read more about how to reduce a cache miss in this easy-to-follow guide",
            category: "Guide",
            image: "https://kinsta.com/wp-content/uploads/2021/12/cache-miss.png",
            posted: "Kinsta",
            date: "December 17, 2021",
        },
        {
            id: 8,
            title: "Guide to Becoming a Frontend Developer: Job Skills and Responsibilities",
            description: "This easy-to-follow guide will take you through everything it requires to become a successful frontend developer",
            category: "Guide",
            image: "https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png",
            posted: "Salman Ravoof",
            date: "December 13, 2021",
        },
        {
            id: 9,
            title: "How To Edit the Hosts File in Windows 10",
            description: "Tired of stumbling around the hosts file? Learn how to edit the hosts file in Windows 10 using these easy-to-follow instructions",
            category: "Security",
            image: "https://kinsta.com/wp-content/uploads/2021/11/windows-10-hosts-file.jpg",
            posted: "Kinsta",
            date: "November 17, 2021",
        },
        {
            id: 10,
            title: "What Is Cached Data? Explore 3 Easy Ways to Clear It",
            description: "A cache miss happens periodically, it is just a part of online life. Read more about how to reduce a cache miss in this easy-to-follow guide",
            category: "Maintenance",
            image: "https://kinsta.com/wp-content/uploads/2021/11/what-is-cached-data.jpg",
            posted: "Jeremy Holcombe",
            date: "November 15, 2021",
        },
        {
            id: 11,
            title: "How to Scan WordPress for Malware in 4 Easy Steps",
            description: "Malware is a serious threat. Here are 4 ways to scan for Malware in WordPress so that you can find it and get rid of it",
            category: "Guide",
            image: "https://kinsta.com/wp-content/uploads/2021/10/scan-wordpress-for-malware.jpg",
            posted: "Jeremy Holcombe",
            date: "November 13, 2021",
        },
        {
            id: 12,
            title: "Managed WordPress Hosting for Publishers",
            description: "With industry-leading speed, performance, and global CDN, Managed WordPress Hosting for Publishers can't be beaten",
            category: "Maintenance",
            image: "https://kinsta.com/wp-content/uploads/2020/04/wordpress-seo-1.jpg",
            posted: "Kinsta",
            date: "November 10, 2021",
        }
    ]);

    return (
        <div className="blog__page">
            <div className="header">Community Blog</div>
            <div className="header__description">Share your knowledge</div>
            <div className="blogs">
                {userblogs?.map((blog) => (
                    <article className="blog" key={blog.id}>
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
};


export default Userblog;