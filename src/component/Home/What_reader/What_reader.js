import React from 'react';
import readerone from '../../../assets/image/readerimgone.jpg';
import readertwo  from  '../../../assets/image/readerimgtwo.png';
import  readerthree from '../../../assets/image/readerthree.png';
const What_reader = () => {
    return (
        <div className='py-20'>
            <div className='grid grid-cols-1  lg:grid-cols-2   container mx-auto'>
            <div className="card  ">
 
  <div className="card-body " data-aos="flip-left">
    <h2 className="card-title text-4xl text-blue-900">What Readers <br></br> Say About the <br></br> Book</h2>
    <p className='text-1xl text-slate-400'>If you are going to use a passage of Lorem <br></br> Ipsum, you need to be sure there isn't anything <br></br> embarrassing hidden in the middle of text. <br></br> All the Lorem Ipsum generators.</p>
    <div className="rating rating-lg">
  <input type="radio" name="rating-9" className="rating-hidden " />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" checked />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
  <span className='text-3xl'>(4.8/5)</span>
</div>
  <h5>Overall Customer Ratings</h5>
  </div>
</div>

  <div className='grid grid-cols-2 '>
  <div className="card  text-primary-content bg-blue-900">
  <div className="card-body" data-aos="flip-right">
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={readerone} />
  </div>

  <div>
     
  </div>
</div>
        </div>
        <div>
            <h2 className='text-1xl'>Martin Philips</h2>
            <div className="rating rating-sm">
  <input type="radio" name="rating-9" className="rating-hidden " />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" checked />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
 
</div>
        </div>
    </div>

    <h2 className="card-title">“ Awesome Impact ”</h2>
    <p>All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.</p>
 
  </div>
</div>

<div className="card  text-primary-content bg-blue-900 ml-5  ">
  <div className="card-body" data-aos="flip-right">
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={readertwo}/>
  </div>

  <div>
     
  </div>
</div>
        </div>
        <div>
            <h2 className='text-1xl'>Christina Louis</h2>
            <div className="rating rating-sm">
  <input type="radio" name="rating-9" className="rating-hidden " />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" checked />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
 
</div>
        </div>
    </div>

    <h2 className="card-title">“ Great Books Collections ”</h2>
    <p>All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.</p>
 
  </div>
</div>

<div className="card  text-primary-content bg-blue-900 mt-5">
  <div className="card-body" data-aos="flip-right">
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
        <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={readerthree} />
  </div>

  <div>
     
  </div>
</div>
        </div>
        <div>
            <h2 className='text-1xl'>James Anderson</h2>
            <div className="rating rating-sm">
  <input type="radio" name="rating-9" className="rating-hidden " />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" checked />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-9" className="mask mask-star-2" />
 
</div>
        </div>
    </div>

    <h2 className="card-title">“ Mind Blowing Words ”</h2>
    <p>All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.</p>
 
  </div>
</div>


  </div>
            </div>
        </div>
    );
};

export default What_reader;