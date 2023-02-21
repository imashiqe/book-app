import React from 'react';
import About_author from './Banner/About_author/About_author';
import Banner from './Banner/Banner';
import Book_copy from './Book_copy/Book_copy';
import Book_include from './Book_include/Book_include';
import Trusted from './Trusted/Trusted';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Book_include></Book_include>
            <About_author></About_author>
            <Trusted></Trusted>
            <Book_copy></Book_copy>
        </div>
    );
};

export default Home;