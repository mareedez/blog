import Addblog from "./addblog";
import {useSelector} from "react-redux";
import {selectSignedIn} from "../../Actions/User";

const Personal = () => {
    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div>
            {isSignedIn ? (
                <Addblog />
                ) : (
                <div className="blog__page">
                    <div className="header">Log in to add blogs</div>
                </div>
            )}
        </div>
    )
}


export default Personal