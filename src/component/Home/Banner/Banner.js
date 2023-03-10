import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring  } from '@react-spring/web';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import book from '../../../assets/image/book_banner.png';
import 'react-photo-view/dist/react-photo-view.css';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
   
   


    const fade = useSpring({
       from: {
          opacity : 0
       },
       to: {
          opacity: 1
       }
    });
    return (

        <div className='bg-blue-900 py-16 px-16  ' >
             <div className='container mx-auto grid  grid-cols-1 lg:grid-cols-2'>
                   <div data-aos="fade-up-right">
                      <h5 className='text-white text-1xl'>Welcome To Our Book Store</h5>
                      <h2  className='py-2 text-4xl lg:text-6xl font-bold text-white text-shadow-xl '>
                        
                        Books are 



<span className='text-yellow-400'>
<TypeAnimation sequence={[
        'Uniquely', // Types 'One'
        1000, // Waits 1s
        'Portable ', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Magic ', // Types 'Three' without deleting 'Two'
        () => {
         // console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="h2"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4xl'   }}>

   </TypeAnimation>
</span>
</h2>
  

   <p className='py-5 text-white lg:text-lg '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
  
          <div className='flex'>
                 <div>
                 <div className="">
    <a className="btn bg-yellow-500 text-blue-900 hover:bg-white hover:border-2 hover:border-yellow-600 rounded-none">Order Today</a>
  </div>
                 </div>
                 <div className='px-10 py-3'>
                     <Link className='text-white border border-t-0 border-r-0 border-l-0 border-b-2 border-white ' to='#'>Read Free Demo</Link>
                 </div>
          </div>

          

             <div className='grid grid-cols-3 py-5' >
                 <div >
                    <h2 className='text-white'><span > <FontAwesomeIcon icon={faCircle} className="text-yellow-500" /> </span>Pages:</h2>
                    <p className='text-slate-400 '>586 Pages</p>
                 </div>
                 <div >
                 <h2 className='text-white'> <span > <FontAwesomeIcon icon={faCircle} className="text-yellow-500" /> </span>Length</h2>
                    <p className='text-slate-400'>10 Hours</p>
                 </div>
                 <div >
                 <h2 className='text-white'> <span > <FontAwesomeIcon icon={faCircle} className="text-yellow-500" /></span> Ratings :</h2>
                    <p className='text-slate-400'>4.5/5 (305 ratings)</p>
                 </div>
             </div>
                   </div>

                   <div>
                   <PhotoProvider >
                   <div className="card   " data-aos="fade-up-left">
  <figure>

  
 
  <PhotoView src={book}>
  <img src={book} style={{ objectFit: 'cover' }} alt="" />
</PhotoView>


  </figure>

</div>
</PhotoProvider>
                   </div>
             </div>
        </div>
    );
};

export default Banner;
