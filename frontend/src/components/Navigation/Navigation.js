import { useSelector } from "react-redux";
import React from 'react';
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import DemoUser from "../DemoUser/DemoUser";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import './Navigation.css'

const Navigation = ({ isLoaded }) => {
    const currUser = useSelector(state => state.session.user);
    let sessionLinks;

    if (!currUser) {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to='/signup'
                className='link'>Signup</NavLink>
                <DemoUser />
            </>
        )
    } else {
        sessionLinks = (
            <div
            className="profile-btn-div">
                <ProfileButton user={currUser} />
            </div>
        );
    }
    return (
        <div className="navbar-div">
            <div className="navbar-links">
                    <NavLink to='/'
                    className='link'>Home</NavLink>
                    <NavLink to='/songs'
                    className='link'>Songs</NavLink>
                    <NavLink to='/albums'
                    className='link'>Albums</NavLink>
                    {isLoaded && sessionLinks}
            </div>
        </div>
    )
}


export default Navigation;
