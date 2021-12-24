import Blogcomponent from "../../BlogComponent/blogcomponent";
import useFetch from "../../fetch";

const Guide = () => {
    const header = 'Maintenance'
    const headerDescription = 'Keep it healthy'
    const {blogs, loading, error} = useFetch('http://localhost:3001/blogs');
    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div className="loader"><div className='loading'></div></div>}
            {blogs && <Blogcomponent blogs={blogs.filter((blog) => blog.category==="Maintenance")} header={header} headerDescription={headerDescription}/>}
        </div>
    );
};

export default Guide;