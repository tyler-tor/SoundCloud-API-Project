import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser } from '../../store/session';
// import ImageComponent from '../ImageComponent';
import './SignupForm.css'

const SignupFormPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState([]);
    const currentUser = useSelector(state => state.session.user);


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
        if(password !== confirmPassword) {
            return setErrors(['Passwords do not match, Please try again']);
        }else{
            setValidationErrors([])

            const newUserInfo = {
                username,
                email,
                password,
                firstName,
                lastName,
                image
            };
            // console.log(newUserInfo);
            await dispatch(signUpUser(newUserInfo))
                .catch(async res => {
                    const data = await res.json();
                    data.errors && setErrors(data.errors);
                })

            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setFirstName('');
            setLastName('');
        }
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file)
    }

    if (currentUser) return (
        <Redirect to='/' />
    )

    return (
        <section
        className='signup-section'>
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
            onSubmit={handleSubmit}
            className='signup-form-box'>
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
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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
                <input
                type='file'
                onChange={updateFile}
                />
                <button type='submit'
                    disabled={validationErrors.length > 0}
                >Signup</button>
            </form>
                {/* <ImageComponent setUrl={setUrl} /> */}
        </section>
    )
}


export default SignupFormPage;
