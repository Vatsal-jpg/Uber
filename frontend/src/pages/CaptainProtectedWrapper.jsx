import React,{ useContext, useEffect, useState } from 'react'

import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CaptainProtectedWrapper = ({children}) => {
    const token= localStorage.getItem('token');
    const navigate = useNavigate();
    const{captain, setCaptain} = useContext(CaptainDataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!token) {
      navigate('/captain-login');
    }
  }, [token, navigate]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if (response.status === 200) {  
        setCaptain(response.data.captain);
        setLoading(false);
        }
  }).catch(error => {
    console.error('Error fetching captain profile:', error);
    localStorage.removeItem('token');
    navigate('/captain-login');
    })


    if(loading){
        return( <div>Loading...</div>)
    }


  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectedWrapper