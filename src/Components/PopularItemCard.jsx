import React from 'react';

const PopularItemCard = ({item}) => {
    const{image,name,recipe,price,}=item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image}alt="" />
            <div>
                <h3 className="text-xl">{name}_________</h3>
                <p className="">{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
            
        </div>
    );
};

export default PopularItemCard;