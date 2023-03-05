
import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLocation ,faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Animation } from 'gsap/gsap-core';

import React from 'react';

const Contact_us = () => {
    return (
        <div >
       
              <div className='pt-20 pb-20 bg-blue-900 text-center'  >



                
                  <h2 className='text-white text-3xl font-bold'> Contact Us</h2>
                  <p  className='text-1xl text-slate-400'>There are many variations of passages of Lorem Ipsum available,  have <br></br> suffered alteration in some form.</p>
              </div>

              <div className='pt-20 pb-20 container mx-auto grid grid-cols-1'>
              <div className="card lg:card-side  ">
      <div className='lg:ml-40'>
           <h2 className='text-3xl font-bold text-blue-900'>Keep in Touch</h2>
           <p className='text-1xl text-slate-400 pt-3'>There are many variations of passages of Lorem Ipsum <br></br>
            available, but the majority have suffered alteration in some <br></br>form, by injected humour,
            or randomised words which don't <br></br>look even slightly believable.</p>
           
              <h5 className='pt-5 text-1xl font-bold text-blue-900'><span><FontAwesomeIcon icon={faLocation} /></span> Visit Us :</h5>
              <p className='pl-5'>No: 09a, Downtown, San Dieago, USA.</p>

              <h5 className='text-1xl font-bold text-blue-900'><span><FontAwesomeIcon icon={faEnvelope} /></span> Drop Us :</h5>
              <p className='pl-5'>support@pages.com</p>

              <h5 className='text-1xl font-bold text-blue-900'><span><FontAwesomeIcon icon={faPhone} /></span> Call Us :</h5>
              <p className='pl-5'>Call: 1-800-123-9999</p>
              
      </div>
  <div className="card-body lg:ml-20  ">
        <div >
        <div className="form-control">

  <label className="input-group">
    <span><FontAwesomeIcon icon={faUser} /></span>
    <input type="text" placeholder="Type Your Name" className="input input-bordered w-96" />
  </label>

  <label className="input-group pt-3">
    <span><FontAwesomeIcon icon={faEnvelope}/></span>
    <input type="email" placeholder="info@site.com" className="input input-bordered w-96" />
  </label>
  <label className="input-group pt-3">
    <span><FontAwesomeIcon icon={faPhone} /></span>
    <input type="phone" placeholder="Type Your Phone Number" className="input input-bordered w-96" />
  </label>

  <label className="input-group pt-3 ">
    <span><FontAwesomeIcon icon={faMessage} /></span>
  
   <textarea className='w-96' placeholder='Type Your Message'></textarea>
  </label>

  <button className='btn mt-5 w-96 bg-yellow-600 lg:border-none'>Submit</button>
</div>
        </div>
  </div>
</div>
              </div>
        </div>
    );
};

export default Contact_us;