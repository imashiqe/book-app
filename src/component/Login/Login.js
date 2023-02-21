import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
      
    <div className="card   shadow-2xl bg-base-100">
        <h2 className='text-center py-5 text-3xl font-bold text-blue-900'>Login Now</h2>
      <div className="card-body grid grid-cols-1 lg:grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           
            <Link className="label-text-alt link link-hover" to='/register'>Create Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary  bg-blue-900 border-2 hover:border-yellow-600 hover:bg-white hover:text-blue-900">Login</button>
          <button className="btn btn-primary   border-2 border-yellow-600 hover:bg-white hover:text-blue-900 hover:border-2  bg-white text-blue-900 mt-3 ">Continue With Google </button>
          <button className="btn btn-primary   border-2 border-yellow-600 hover:bg-white hover:text-blue-900 hover:border-2  bg-white text-blue-900 mt-3">Continue With Github</button>
         
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;