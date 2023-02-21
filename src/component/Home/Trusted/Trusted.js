import React from 'react';
import trustone from '../../../assets/image/trust01.png';
import trusttwo from '../../../assets/image/trust02.png';
import trustthree from '../../../assets/image/trust03.png';
import trustfour from '../../../assets/image/trust04.png';
const Trusted = () => {
    return (
        <div className='my-20'>
        <h2 className='text-center font-bold text-2xl border-b-2 w-96 mx-auto border-yellow-500 pb-3'>Trusted by the Best</h2>
        
        <div className='grid grid-cols-2 py-5 text-center lg:grid-cols-4 container mx-auto mt-5'>
            <div className="card  bg-base-100 ">
  <figure><img src={trustone} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center text-blue-900 text-2xl">Amazen Corp</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>

            <div className="card mx-2 bg-base-100 ">
  <figure><img src={trusttwo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center  text-blue-900 text-2xl">Megan Books</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  
  </div>
</div>

            <div className="card  mx-2 bg-base-100 ">
  <figure><img src={trustthree} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center   text-blue-900 text-2xl">Los Books</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>

            <div className="card  mx-2 bg-base-100 ">
  <figure><img src={trustfour} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center    text-blue-900 text-2xl">Urban Lib</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
        </div>
    </div>
    );
};

export default Trusted;