import React,{ useEffect } from 'react'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({children}) => {
    const token= localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!token) {
      navigate('/user-login');
    }
  }, [token, navigate]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
    headers: {  
        Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if (response.status === 200) {
        setUser(response.data.user);
        setLoading(false);
    }
  }).catch(error => {
    console.error('Error fetching user profile:', error);
    localStorage.removeItem('token');
    navigate('/user-login');
  });

  if(loading){
        return( <div>Loading...</div>)
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper