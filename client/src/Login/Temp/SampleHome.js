import { Link, Navigate } from 'react-router-dom';
import useAuthorization from '../Hooks/useAuthorization';


const Home = () => {
    const { authorized, loading, role } = useAuthorization();

    if (loading) {
        return <div></div>
    } else if (authorized) {
        const roleUrl = `/dashboard/${role}`;
        return <Navigate to={roleUrl} />;
    }
    return (
        <div>
            <h1>Welcome to HMS</h1>
            <p>Please login or sign up to continue</p>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
        </div>
    );
}

export default Home;