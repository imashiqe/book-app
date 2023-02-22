import React from 'react';
import  whatlearn from '../../../assets/image/whatlearn.png';
const What_learn = () => {
    return (
        <div className='my-20'>
                  <h2 className='text-center font-bold text-2xl border-b-2 w-96 mx-auto border-yellow-500 pb-3'>What will you learn?</h2>
            <div className='container mx-auto '>
            <div className=" py-20 grid grid-cols-1 lg:grid-cols-2">
 
  <div className="card-body grid grid-cols-2">
  <div className="card   shadow-xl">
  <div className="card-body">
    <h2 className="card-title bg-yellow-500 rounded-full p-2 mr-10 lg:mr-40 pl-5">01</h2>
    <p className='text-1xl pt-5 text-blue-900'>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
   
  </div>
</div>

<div className="card   shadow-xl">
  <div className="card-body">
    <h2 className="card-title  bg-yellow-500 rounded-full p-2 mr-10 lg:mr-40 pl-5">02</h2>
    <p className='text-1xl pt-5 text-blue-900'>Consume streaming data using Spark Streaming, Flink, and Storm.</p>
   
  </div>
</div>

<div className="card   shadow-xl">
  <div className="card-body">
    <h2 className="card-title   bg-yellow-500 rounded-full p-2 mr-10 lg:mr-40 pl-5">03</h2>
    <p className='text-1xl pt-5 text-blue-900'>Choose an appropriate data storage technology for your application</p>
   
  </div>
</div>

<div className="card   shadow-xl">
  <div className="card-body">
    <h2 className="card-title    bg-yellow-500 rounded-full p-2 mr-10 lg:mr-40 pl-5">04</h2>
    <p  className='text-1xl pt-5 text-blue-900'>Analyze non-relational data using HBase, Cassandra, and MongoDB.</p>

  </div>
</div>


  </div>

  <figure className='px-5'><img src={whatlearn} alt="Album"/></figure>
</div>
            </div>
            
        </div>
    );
};

export default What_learn;