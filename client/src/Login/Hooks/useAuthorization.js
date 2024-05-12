import { useEffect, useState } from 'react';
import axios from 'axios';


/*
 * Check for active session by talking to the server and set states accordingly 
 */
const useAuthorization = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [role, setRole] = useState('');

  useEffect( () => {
    const checkAuthorization = async () => {
      try {
        const response = await axios.get('/api/checkSession');

        if (response.data.loginStatus) {
          setAuthorized(true);
          setRole(response.data.role);
        } else {
          setAuthorized(false);
        }
      } catch (err) {
        console.log(err);
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthorization();
  }, []);

  return { authorized, loading, role };
};

export default useAuthorization;
