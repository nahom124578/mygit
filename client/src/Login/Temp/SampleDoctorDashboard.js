// replace this with the actual doctor dashboard
// sensitive info should be rendered by requesting the server (server should check the role and username before providing)
// here, example for DoctorInfo
import axios from 'axios';
import { useState, useEffect } from 'react';

const DoctorDashboard = () => {
    const [profile, setProfile] = useState({});
    const [error, setError] = useState();
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestProfile = async () => {
            try {
                const response = await axios.get('/dashboard/doctor');
                setProfile(response.data);
                setAuthorized(true);
            } catch (err) {
                setError(err.response.data);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        requestProfile();
    }, []);

    if (loading) {
        return <div></div>;
    } else if (!authorized) {
        return <div>{error}</div>;
    }
    return (
        <ul>
            <li>Name: {profile.Name.firstName} {profile.Name.lastName}</li>
            <li>dateOfBirth: {profile.dateOfBirth}</li>
            <li>list continues</li>
        </ul>
    );
};

export default DoctorDashboard;
