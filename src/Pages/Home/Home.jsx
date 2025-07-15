import React from 'react';
import Bannar from './Bannar';
import Category from './Category';
import PopularItem from './PopularItem';
import Featured from './Featured';
import Testimonial from './Testimonial';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Menu></Menu>
           {/* <Category></Category>
           <PopularItem></PopularItem>
           <Featured></Featured> */}
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;