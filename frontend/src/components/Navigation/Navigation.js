import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import './Navigation.css'

const Navigation = ({ isLoaded }) => {
    const currUser = useSelector(state => state.session.user);
    let sessionLinks

    if (!currUser) {
        sessionLinks = (
            <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </>
        )
    } else {
        sessionLinks = (
            <ProfileButton user={currUser} />
        );
    }
    return (
        <div className="navbar-div">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    )
}


export default Navigation;
