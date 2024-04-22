// replace this with the actual patient dashboard
// sensitive info should be rendered by requesting the server (server should check the role and username before providing)
// here, example for PatientInfo 
import axios from 'axios';
import { useEffect, useState } from 'react';

const PatientDashboard = () => {
    const [ profile, setProfile ] = useState({});
    const [ error, setError ] = useState();
    const [ authorized, setAuthorized ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const requestProfile = async () => {
            try {
                const response = await axios.get('/dashboard/patient');
                setProfile(response.data);
                setAuthorized(true);
            } catch(err) {
                setError(err.response.data);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        requestProfile();
    }, []);

    if (loading) {
        return <div></div>
    } else if (!authorized) {
        return <div>{error}</div>
    }
    return (
        <ul>
            <li>Name: {profile.Name.firstName} {profile.Name.lastName}</li>
            <li>dateOfBirth: {profile.dateOfBirth}</li>
            <li>list continues</li>
        </ul>
   );

};

export default PatientDashboard;

