import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Chapter_include = () => {
    return (
        <div className='my-20'>
        <h2 className='text-center font-bold text-2xl border-b-2 w-96 mx-auto border-yellow-500 pb-3'>The Chapter Includes</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto pt-20'>
        <div className="card   shadow-xl">
  <div className="card-body" data-aos="fade-down-right">
    <h2 className="card-title text-blue-900">Chapter- 01  <span className='text-blue-700'>Get Started Intro</span> </h2>
    <p className='text-slate-500'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
    <div className='grid grid-cols-2'>
        <div>
            <h2 className='text-blue-900 text-1xl font-bold'><FontAwesomeIcon icon={faCircle} className="text-yellow-500" />  Pages : <span className='text-slate-500 '>85pages</span></h2>
        </div>
        <div>
        <h2 className='text-blue-900 text-1xl font-bold'><FontAwesomeIcon icon={faCircle} className="text-yellow-500" />  Length : <span className='text-slate-500 '>1 Hour 15 mins</span></h2>
        </div>
    </div>
  </div>
</div>

    
<div className="card   shadow-xl lg:ml-5">
  <div className="card-body" data-aos="fade-down-right">
    <h2 className="card-title text-blue-900">Chapter- 02   <span className='text-blue-700'>Create a Massive Content</span></h2>
    <p className='text-slate-500'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
    <div className='grid grid-cols-2'>
        <div>
            <h2 className='text-blue-900 text-1xl font-bold'> <FontAwesomeIcon icon={faCircle} className="text-yellow-500" /> Pages : <span className='text-slate-500 '>85pages</span></h2>
        </div>
        <div>
        <h2 className='text-blue-900 text-1xl font-bold'> <FontAwesomeIcon icon={faCircle} className="text-yellow-500" /> Length : <span className='text-slate-500 '>1 Hour 15 mins</span></h2>
        </div>
    </div>
  </div>
</div>

<div className="card   shadow-xl">
  <div className="card-body" data-aos="fade-down-right">
    <h2 className="card-title text-blue-900">Chapter- 03   <span className='text-blue-700'>Maintaining the Creative Arcs</span></h2>
    <p className='text-slate-500'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
    <div className='grid grid-cols-2'>
        <div>
            <h2 className='text-blue-900 text-1xl font-bold'><FontAwesomeIcon icon={faCircle} className="text-yellow-500" />  Pages : <span className='text-slate-500 '>85pages</span></h2>
        </div>
        <div>
        <h2 className='text-blue-900 text-1xl font-bold'><FontAwesomeIcon icon={faCircle} className="text-yellow-500" />  Length : <span className='text-slate-500 '>1 Hour 15 mins</span></h2>
        </div>
    </div>
  </div>
</div>

<div className="card   shadow-xl lg:ml-5">
  <div className="card-body" data-aos="fade-down-right">
    <h2 className="card-title text-blue-900">Chapter- 04   <span className='text-blue-700'>The Conclusion</span></h2>
    <p className='text-slate-500'>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
    <div className='grid grid-cols-2'>
        <div>
            <h2 className='text-blue-900 text-1xl font-bold'> <FontAwesomeIcon icon={faCircle} className="text-yellow-500" /> Pages : <span className='text-slate-500 '>85pages</span></h2>
        </div>
        <div>
        <h2 className='text-blue-900 text-1xl font-bold'> <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />  Length : <span  className='text-slate-500 '>1 Hour 15 mins</span></h2>
        </div>
    </div>
  </div>
</div>




        </div>

        <div className='mx-auto flex flex-col items-center container text-center'>
    
    <Link className='btn mt-20 bg-yellow-600 border-none rounded-none '>Start a 15-Days Free Trail</Link>

    <p className='pt-5 text-slate-500'>Short description about each chapter <br></br>
<Link className='underline text-blue-900'>Have any questions?</Link> Contact us</p>
</div>
    </div>
    );
};

export default Chapter_include;