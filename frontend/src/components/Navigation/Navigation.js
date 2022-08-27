import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const currUser = useSelector(state => state.session.user);
    let navBarInfo;

    if(currUser){
        navBarInfo = (
            <>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Signup</NavLink>
                </li>
            </>
        )
    }else{
        navBarInfo = (
            <>
            </>
        )
    }
    return (
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
                {navBarInfo}
        </ul>
    )
}


export default Navigation;
