import {Link} from "react-router-dom";

const Header = () => {
    return <>
    <Link to="/">Home</Link>&nbsp;|&nbsp;
    <Link to="userlist/12/shishir">List User</Link>&nbsp;|&nbsp;
    <Link to="userregister">Register</Link>
    </>
}

export default Header;