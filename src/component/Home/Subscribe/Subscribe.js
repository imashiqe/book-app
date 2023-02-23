import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className='grid grid-cols-1 bg-yellow-200 container mx-auto mb-20'>
                
                <div className='py-20 '>
                <h2 className='text-center text-3xl text-blue-900'>Read a free chapter</h2>
                <p className='text-center'>Making this the first true value generator on the Internet. It of over 200  <br></br>Latin words, combined with a handful.</p>
                <div className='card place-items-center '>
                      <div className="form-control">
<label className="label">
 <span className="label-text">Your Email</span>
</label>
<label className="input-group">
 <span>Email</span>
 <input type="text" placeholder="Type Your Email" className="input input-bordered" />
 <button className='btn bg-blue-900 hover:text-yellow-500 lg:border-none hover:bg-white hover:border-yellow-500 hover:border-2 ml-2'>Submit</button>
</label>
</div>
                      </div>
                </div>
              
                 </div>  
        </div>
    );
};

export default Subscribe;