import React from 'react';
import About_author from './Banner/About_author/About_author';
import Banner from './Banner/Banner';
import Book_include from './Book_include/Book_include';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Book_include></Book_include>
            <About_author></About_author>
        </div>
    );
};

export default Home;