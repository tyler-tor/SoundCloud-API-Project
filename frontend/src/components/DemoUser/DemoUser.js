import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/session';

const DemoUser = () => {
    const [credential] = useState('Demo-lition');
    const [password] = useState('password');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        const user = {
            credential,
            password
        }
        dispatch(loginUser(user))
    }

    return (
        <button
        className='demo-user-btn'
        onClick={handleClick}>
            Demo-User Login
        </button>
    )
}

export default DemoUser;
