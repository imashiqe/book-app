import React from 'react';

const Forgot_password = () => {
    return (
        <div >
                <div className='bg-blue-900 py-20 '>
                <h2 className='text-center text-3xl font-bold text-white'>Forgot Password Page</h2>
                     <p className='text-center pt-5 text-slate-500'>There are many variations of passages of Lorem Ipsum available, <br></br> have suffered alteration in some form.</p>
                </div>

                   <div className='grid grid-cols-1 bg-yellow-200'>
                
                   <div className='py-20 '>
                   <h2 className='text-center text-3xl text-blue-900'>Password Reset </h2>
                   <p className='text-center'>This page is password Reset. If you are forgot your <br></br> password, enter your register email, we will send reset password<br></br> your email</p>
                   <div className='card place-items-center '>
                         <div className="form-control">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <label className="input-group">
    <span>Email</span>
    <input type="text" placeholder="Type Your Email" className="input input-bordered" />
    <button className='btn bg-blue-900 hover:text-yellow-500 lg:border-none hover:bg-white hover:border-yellow-500 hover:border-2'>Submit</button>
  </label>
</div>
                         </div>
                   </div>
                 
                    </div>  
        </div>
    );
};

export default Forgot_password;