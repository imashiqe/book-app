import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import fourzero from '../../assets/image/errorpage.png';
import './Error404.css';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen backg"  >
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
       <img src={fourzero} />
       <h2 className='py-5 text-2xl text-blue-900'>Page not Found!!!</h2>
      <p className="mb-5 text-blue-700">The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
      
      <Link className="btn btn-primary    bg-yellow-500 text-blue-900 hover:bg-white hover:border-2 hover:border-yellow-600" to='/'>Back to Home</Link>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Error404;