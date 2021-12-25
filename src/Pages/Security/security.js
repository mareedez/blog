import Blogcomponent from "../../BlogComponent/blogcomponent";
import useFetch from "../../fetcher";


const Maintenance = () => {
    const header = 'Security'
    const headerDescription = 'Stay safe'
    const {blogs, loading, error} = useFetch('http://localhost:3001/blogs');
    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div className="loader"><div className='loading'></div></div>}
            {blogs && <Blogcomponent blogs={blogs.filter((blog) => blog.category==="Security")} header={header} headerDescription={headerDescription}/>}
        </div>
    );
}

export default Maintenance;