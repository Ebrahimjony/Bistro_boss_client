import React from 'react';
import Bannar from './Bannar';
import Category from './Category';
import PopularItem from './PopularItem';
import Featured from './Featured';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Category></Category>
           <PopularItem></PopularItem>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;