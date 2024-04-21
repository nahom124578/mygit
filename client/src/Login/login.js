import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import axios from 'axios';
import Navbar from "../../src/main-page/NavBar";
/**
 * Represents a login form for user authentication.
 * @component
 */
const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [role,setrole]=useState('')
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [errors, setErrors] = useState({});

    /**
     * Handles input changes in the form fields.
     * @param {Event} event - The input change event.
     
    const handleChange = (e) => {
        
      
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    /**
     * Handles form submission and performs validation.
     * Redirects to the dashboard on successful login.
     * @param {Event} event - The form submit event.
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{role, username, password})
        .then(result =>{
            console.log(result) 
        if(result.data=== "yes"){
            navigate('/Patient')
        }
        })
        .catch(err=> console.log(err))
        const newErrors = {};

        if (!formData.role) newErrors.role = '* Role is required';
        if (!formData.username) newErrors.username = '* Username is required';
        if (!formData.password) newErrors.password = '* Password is required';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Proceed with login logic
            navigate('/Patient');
        }
    }

    return (
        <><Navbar/>
        <section className="container">

            <h2 className='text-cneter bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text 
             md:font-bold text-2xl'>Log in</h2>
                     <form onSubmit={handleSubmit} className='form bg-blue-100'>
                <label className = 'text-black md:font-bold'>
                Role<br />
                    <select className = 'select' name='role' value={formData.role} onChange={(e)=> {
                            setrole(e.target.value)
                        }}>
                        <option value="">Please select</option>
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Lab Technician">Lab Technician</option>
                        <option value="Radiologist">Radiologist</option>
                        <option value="Pharmacist">Pharmacist</option>
                        <option value="Receptionist">Receptionsit</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Finance">Finance</option>
                        <option value="Manager">Manager</option>
                        <option value="Content Creator">Content Creator</option>
                    </select><br />
                    {/* {errors.role && <div className="error">{errors.role}</div>} */}
                </label>
                <label className='text-black md:font-bold'>
                    Username<br />
                    <input className = 'input' type='text' name='username' value={formData.username} onChange={(e)=> {
                            setusername(e.target.value)
                        }}/><br />
                    {/* {errors.username && <div className="error">{errors.username}</div>} */}
                </label>
                <label className='label text-black md:font-bold '>
                    Password {" "}
                <input className = 'border border-gray-400 w-64 px-3 py-1  rounded-md focus:outline-none focus:border-blue-500' type='password' name='password' value={formData.password} onChange={(e)=> {
                            setpassword(e.target.value)
                        }}/><br />
                    {/* {errors.password && <div className="error">{errors.password}</div>} */}
                </label>
                <button type='submit' className='button text-gray-800 md:font-bold'>Login</button>
                <h1 className='container-h1 text-gray-300 md:font-bold'>Login to your Account</h1>
            <p className = 'container-p text-blue-500'>Don't have an account? <Link to="/Signup" className='text-black'>Sign Up</Link></p>
   
            </form>
            </section>
            </>
    );
}

export default Login;
