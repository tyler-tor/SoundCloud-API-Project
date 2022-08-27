import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../store/session';
import './LoginForm.css';

const LoginFormPage = () => {
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        const errors = [];

        if (credential.length < 1) errors.push('Username or Email field cannot be empty');
        if (password.length < 1) errors.push('Password field cannot be empty');

        setValidationErrors(errors);
    }, [credential, password]);

    if (currentUser) return (
        <Redirect path='/' />
    )


    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([])

        const user = {
            credential,
            password
        };

        await dispatch(loginUser(user))
            .catch(async res => {
                const data = await res.json();
                data.errors && setErrors(data.errors);
            })

        setCredential('');
        setPassword('');

    };

    return (
        <section className='login-form-box'>
            <ul className='error-list'>
                {errors.map(err => {
                    return (
                        <li
                            key={err}>
                            {err}
                        </li>
                    )
                })}
            </ul>
            <form
                onSubmit={handleSubmit}
                className='login-form'>
                <input
                    type='text'
                    placeholder='Username or Email'
                    value={credential}
                    onChange={e => setCredential(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type='submit'
                    disabled={validationErrors.length > 0}
                >Login</button>
            </form>
        </section>
    )
}


export default LoginFormPage;
