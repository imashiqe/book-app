import { useSpring , animated } from '@react-spring/web';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import author from '../../../../assets/image/about_author.png';
import details from  '../../../../assets/image/Details.png';
import 'react-photo-view/dist/react-photo-view.css';
const About_author = () => {
    const fade =  useSpring({
        from: {
           opacity : 0
        },
        to: {
           opacity: 1
        }
     });
    return (
        
              <animated.div className='my-20 container mx-auto ' style={fade}>
          
            
            <div className='grid grid-cols-1 lg:grid-cols-1'>
                <PhotoProvider>

             
            <div className="card lg:card-side  " >

  <figure data-aos="fade-right">
    <PhotoView src={author}>
    <img src={author} style={{ objectFit: 'cover' }} alt="Album"/>
    </PhotoView>
    </figure>


  <div className=" card-body px-20 " data-aos="fade-left" >
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
       
             <div>
                <PhotoView src={details}>
                <img className='py-20' style={{ objectFit: 'cover' }} src={details}></img>
                </PhotoView>
       
         </div>
         
       
    
   
  </div>
</div>
</PhotoProvider>

            </div>
        </animated.div>
       
    );
};

export default About_author;