import React from 'react';
import Navbar from './Navbar/Navbar';
import Explore from './Navbar/Explore/Explore';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Explore></Explore>
        </div>
    );
};

export default Home;