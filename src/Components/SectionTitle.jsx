import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className= 'w-3/12 mx-auto text-center my-8'>
            <p className="text-yellow-400 p-2">--- {subHeading} ---</p>
            <h3 className=" text-3xl uppercase border-y-2 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;