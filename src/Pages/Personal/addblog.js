import {useState} from "react";
import {useSelector} from "react-redux";
import {selectSignedIn, selectUserData} from "../../Actions/User";
import {useNavigate} from 'react-router-dom'

const Addblog = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Guide")
    const [description, setDescription] = useState('')
    const [image,setImage] = useState("https://kinsta.com/wp-content/uploads/2021/11/click-through-rate.png")
    const [isSending, setIsSending] = useState(false)
    const todaydate = new Date();
    const [month, day, year] = [todaydate.toLocaleString('default', { month: 'long' }), todaydate.getDate(), todaydate.getFullYear()];
    const date = `${month} ${day}, ${year}`
    const userData = useSelector(selectUserData)
    const posted = userData?.name
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, description, category, image, posted, date};
        setIsSending(true)
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsSending(false);
            navigate('/');
        })
    }

    return (
        <div className='blog__page'>
            <div className="header">Add Your Blog</div>
            <div className="header__description">Express yourself</div>
            <form onSubmit={handleSubmit}>
                <div className="addblog">
                    <label>Title *</label>
                    <input className="addblog__input-title"
                           type='text'
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           required/>
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="Guide">Guide</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Security">Security</option>
                    </select>
                    <label>Text *</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required/>
                    {!isSending && <button className="addblog__submit">Add Blog</button>}
                    {isSending && <button className="addblog__submit">Adding...</button>}
                </div>
            </form>
        </div>
    )
}

export default Addblog