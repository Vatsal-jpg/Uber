import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
    const token = localStorage.getItem('token');
    
    const navigate = useNavigate();

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.status === 200) {
            alert('Captain logged out successfully');
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
    })
    .catch(error => {
        console.error('Error during logout:', error);
    });
    
  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout