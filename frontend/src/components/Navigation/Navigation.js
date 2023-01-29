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
                <div className="navbar-item">
                    <LoginFormModal />
                </div>
                <div className="navbar-item">
                    <NavLink to='/signup'
                        className='link'>Signup</NavLink>
                </div>
                <div className="navbar-item">
                    <DemoUser />
                </div>
            </>
        )
    } else {
        sessionLinks = (
            <>
                <div className="navbar-item">
                    <NavLink to='/'
                        className='link'>
                        Home
                    </NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to='/songs'
                        className='link'>
                        Songs
                    </NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to='/albums'
                        className='link'>
                        Albums
                    </NavLink>
                </div>
                <div className="navbar-item">
                    <NavLink to='/playlists'
                        className='link'>Playlists
                    </NavLink>
                </div>
            </>
        );
    }
    return (
        <div className="navbar-div">
            <div className="navbar-links">
                {isLoaded && sessionLinks}
                <div className='social-links'>
                    {currUser && (
                        <div
                            className="profile-btn-div">
                            <ProfileButton user={currUser} />
                        </div>
                    )}
                    <a href='https://github.com/tyler-tor'
                        target='_blank'
                        rel="noreferrer"
                        className='social-icon-link github'
                        aria-label='GitHub'>
                        <i className='fab fa-github fa-lg'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/derek-torrero-02823018a/'
                        target='_blank'
                        rel="noreferrer"
                        className='social-icon-link linkedin'
                        aria-label='Linkedin'>
                        <i className='fab fa-linkedin fa-lg'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Navigation;
