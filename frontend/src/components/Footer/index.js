import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div
        className='footer'>
            <NavLink to='https://github.com/tyler-tor'>
                My github profile
            </NavLink>
            <NavLink to='linkedin.com/in/derek-torrero-02823018a'>
                My linkedIn profile
            </NavLink>
        </div>
    )
}

export default Footer;
