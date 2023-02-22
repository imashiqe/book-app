import React from 'react';
import About_author from './Banner/About_author/About_author';
import Banner from './Banner/Banner';
import Book_copy from './Book_copy/Book_copy';
import Book_include from './Book_include/Book_include';
import Chapter_include from './Chapter_include/Chapter_include';
import Trusted from './Trusted/Trusted';
import What_learn from './What_learn/What_learn';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Book_include></Book_include>
            <About_author></About_author>
            <Trusted></Trusted>
            <Book_copy></Book_copy>
            <What_learn></What_learn>
            <Chapter_include></Chapter_include>
        </div>
    );
};

export default Home;