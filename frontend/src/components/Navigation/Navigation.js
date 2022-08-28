import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import './Navigation.css'

const Navigation = () => {
    const currUser = useSelector(state => state.session.user);
    let navBarLoginSignup;
    let navBarUserProfile;

    if(!currUser.id){
        navBarLoginSignup = <>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Signup</NavLink>
                </li>
            </>

    }else{
        navBarUserProfile = <ProfileButton />

    }
    return (
        <div className="navbar-div">
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
                {navBarLoginSignup}
        </ul>
                {navBarUserProfile}
        </div>
    )
}


export default Navigation;
