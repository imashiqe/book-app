import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import bookcopy from '../../../assets/image/booktea.png';
import 'react-photo-view/dist/react-photo-view.css';
const Book_copy = () => {
    return (
        <div className='my-20 bg-blue-900'>
       
        
        <div className='grid grid-cols-1 lg;grid-cols-2 container py-5 mx-auto'>
        <PhotoProvider>
        <div className="card card-side  ">
  
  <div className="card-body " data-aos="fade-down-right">
    <h2 className="card-title text-4xl text-white font-bold pb-5">Get Book Copy Today!</h2>
    <p className='text-2xl text-white'>This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.</p>
    <div className="card-actions ">
      <button className="btn btn-primary bg-transparent border-2 border-yellow-500 rounded-none hover:bg-white hover:text-blue-900">Order Today</button>
    </div>
  </div>



  <figure data-aos="fade-down-left">
    <PhotoView src={bookcopy}>
    <img src={bookcopy} style={{ objectFit: 'cover' }}  alt="Movie"/>
    </PhotoView>
    </figure>

    
    
</div>
</PhotoProvider>
        </div>
    </div>
    );
};

export default Book_copy;