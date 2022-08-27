import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../store/session';
import './SignupForm.css'

const SignupFormPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const errs = [];

        if(username.length < 1) errs.push('Username field requires a input');
        if(email.length < 1) errs.push('Email field requires a input');
        if(password.length < 1) errs.push('Password field requires a input');

        setValidationErrors(errs);

    }, [username, email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([])

        const newUserInfo = {
            username,
            email,
            password
        };

        await dispatch(signUpUser(newUserInfo))
            .catch(async res => {
                const data = await res.json();
                data.errors && setErrors(data.errors);
            })

        setUsername('');
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <section className='signup-form-box'>
            <ul>
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
            onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <input
                type='text'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <input
                type='text'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <input
                type='text'
                placeholder='Optional FirstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                />
                <input
                type='text'
                placeholder='Optional LastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                />
                <button type='submit'
                    disabled={validationErrors.length > 0}
                >Signup</button>
            </form>
        </section>
    )
}


export default SignupFormPage;
