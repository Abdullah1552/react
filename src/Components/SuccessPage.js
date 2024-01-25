import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lottie from 'lottie-react'
import success from '../Images/success.json'
const SuccessPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const u_id = searchParams.get('u_id');

    useEffect(() => {
        // Store u_id in local storage
        localStorage.setItem('u_id', u_id);
    }, [u_id]);

    return (
        <div className='success'>
            <Lottie animationData={success} />
            <h2>Payment Successful</h2>
            <a href="/">Go to Home Page</a>
            {/* <p>u_id: {u_id}</p> */}
        </div>
    );
};

export default SuccessPage;
