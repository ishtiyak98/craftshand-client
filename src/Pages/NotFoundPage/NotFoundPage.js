import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../Assets/images/errorIllustration.png";

const NotFoundPage = () => {
    return (
        <div className="h-screen">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 py-10 lg:px-32 h-screen gap-y-2 content-center justify-items-center'>
                <div className='flex items-center order-last lg:order-1'>
                    <div>
                        <h1 className='text-6xl md:text-8xl text-center lg:text-9xl font-bold mb-4'>404 <br /> Error</h1>
                        <button className='block mx-auto'><Link to={"/"} className='btn btn-primary text-xl text-white rounded-none'>Back to home</Link></button>
                    </div>
                </div>
                <div className='lg:order-2'>
                    <img src={error} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;