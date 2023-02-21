import React from 'react';
import { Link } from 'react-router-dom';
import book from '../../../assets/image/book_banner.png';
const Banner = () => {
    return (
        <div className='bg-blue-900 py-16 px-16'>
             <div className='container mx-auto grid  grid-cols-1 lg:grid-cols-2'>
                   <div>
                      <h5 className='text-white text-1xl'>Welcome To Our Book Store</h5>
                      <h2 className='py-2 text-4xl lg:text-6xl font-bold text-white text-shadow-xl'>Books are uniquely
portable magic </h2>
   <p className='py-5 text-white lg:text-lg '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

          <div className='flex'>
                 <div>
                 <div className="">
    <a className="btn bg-yellow-500 text-blue-900">Order Today</a>
  </div>
                 </div>
                 <div className='px-10 py-3'>
                     <Link className='text-white border border-t-0 border-r-0 border-l-0 border-b-2 border-white ' to='#'>Read Free Demo</Link>
                 </div>
          </div>

             <div className='grid grid-cols-3 py-5' >
                 <div >
                    <h2 className='text-white'>Pages:</h2>
                    <p className='text-slate-400 '>586 Pages</p>
                 </div>
                 <div >
                 <h2 className='text-white'>Length</h2>
                    <p className='text-slate-400'>10 Hours</p>
                 </div>
                 <div >
                 <h2 className='text-white'>Ratings :</h2>
                    <p className='text-slate-400'>4.5/5 (305 ratings)</p>
                 </div>
             </div>
                   </div>

                   <div>
                   <div className="card   ">
  <figure><img src={book} alt="Album"/></figure>

</div>
                   </div>
             </div>
        </div>
    );
};

export default Banner;