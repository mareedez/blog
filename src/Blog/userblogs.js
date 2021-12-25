import Blogcomponent from "../BlogComponent/blogcomponent";
import useFetch from "../fetcher";
import './userblogs.css'


const Blogpage = () => {
    const header = 'Community Blog'
    const headerDescription = 'Share your knowledge'
    const {blogs, loading, error} = useFetch('http://localhost:3001/blogs');
    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div className="loader"><div className='loading'></div></div>}
            {blogs && <Blogcomponent blogs={blogs} header={header} headerDescription={headerDescription}/>}
        </div>
    );
}

export default Blogpage;