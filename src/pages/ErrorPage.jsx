import React from 'react';
import logo from '../assets/images/404 error with portals-rafiki.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='md:flex items-center gap-5'>
            <div className='md:w-3/5'>
            <img src={logo} alt="" />
            </div>
            <div className='space-y-4 md:space-y-6'>
                <p className='text-7xl'>Oops, <br /><span className='text-purple-700'>Noting</span> here....</p>
            <Link to ='/'><button className='text-2xl mt-3 md:mt-5 px-6 py-4 bg-purple-700 text-white'>Go Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;