import React from 'react';
import author from '../../../../assets/image/about_author.png';
import details from  '../../../../assets/image/Details.png';
const About_author = () => {
    return (
        
              <div className='my-20 container mx-auto'>
          
            
            <div className='grid grid-cols-1 lg:grid-cols-1'>
            <div className="card lg:card-side ">
  <figure><img src={author} alt="Album"/></figure>
  <div className=" card-body px-20">
    <h2 className="card-title text-2xl">About Author</h2>
    <p>All the Lorem Ipsum generators on the Internet tend to repeated <br></br> predefined chunks as necessary, 
        making this the first true value <br></br> generator on the Internet. It uses a dictionary of over 200 Latin <br></br> words,
         combined with a handful.</p>

         <div className='grid grid-cols-3'>
             <div className='border-r-2 border-yellow-500'>
                 <h2 className='text-indigo-900 text-3xl font-bold'>02</h2>
                 <p>Books Published</p>
             </div>
             <div className='px-5 '>
             <h2 className='text-indigo-900 text-3xl font-bold'>02</h2>
                 <p>Books Published</p>
             </div>
             <div className='border-l-2 border-yellow-500 px-5'>
             <h2 className='text-indigo-900 text-3xl font-bold'>02</h2>
                 <p>Books Published</p>
             </div>
         </div>


         <img className='py-20' src={details}></img>
   
  </div>
</div>
            </div>
        </div>
       
    );
};

export default About_author;