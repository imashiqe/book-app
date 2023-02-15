import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-blue-900 py-16 px-16'>
             <div className='container mx-auto grid  grid-cols-2'>
                   <div>
                      <h5 className='text-white text-1xl'>Welcome To Our Book Store</h5>
                      <h2 className='py-2 text-6xl font-bold text-white text-shadow-xl'>Books are uniquely
portable magic </h2>
   <p className='py-5 text-white text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

          <div className='flex'>
                 <div>
                 <div className="">
    <a className="btn bg-yellow-500 text-blue-900">Order Today</a>
  </div>
                 </div>
                 <div className='px-10 py-3'>
                     <Link className='text-white border border-b-4 border-white'>Read Free Demo</Link>
                 </div>
          </div>
                   </div>

                   <div>
                      <h2>Two</h2>
                   </div>
             </div>
        </div>
    );
};

export default Banner;