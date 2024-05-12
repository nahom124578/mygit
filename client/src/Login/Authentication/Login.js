import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuthorization from '../Hooks/useAuthorization';
import './form.css';


const Login = () => {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errors, setErrors ] = useState({});
    const [ errorFromServer, setErrorFromServer ] = useState('');
    const { authorized, loading, role } = useAuthorization();

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
        setErrors({ ...errors, [username]: '' });
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, [password]: '' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!username) newErrors.username = '* Username is required';
        if (!password) newErrors.password = '* Password is required';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post( '/api/login', { username: username, password: password });
                const role = response.data.role;
                const roleUrl = `/${role}`;
                navigate(roleUrl);
            } catch (err) {
                console.error(err);
                setErrorFromServer('Username or password is incorrect');
            }

        }
    };

    if (loading) {
        return <div></div>;
    } else if (authorized) {
        const roleUrl = `/${role}`;
        return navigate(roleUrl);
    }
    return (
        <section className="container">
            <h1>Login to your Account</h1>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            {errorFromServer && <div className='error'>{errorFromServer}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username<br />
                    <input type='text' name='username' value={username}
                    onChange={handleChangeUsername} /><br />
                    {errors.username && <div className="error">{errors.username}</div>}
                </label>
                <label>
                    Password<br />
                    <input type='password' name='password' value={password}
                    onChange={handleChangePassword} /><br />
                    {errors.password && <div className="error">{errors.password}</div>}
                </label>
                <button type='submit'>Login</button>
            </form>
            <Link to="/forgotPassword" >Forgot Password?</Link>
        </section>
    );
};

export default Login;
