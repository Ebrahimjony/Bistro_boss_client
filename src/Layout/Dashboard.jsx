import React from 'react';
import { FaCalculator, FaHome, FaShoppingCart, FaStreetView, FaUserMinus } from 'react-icons/fa';
import { FaCableCar } from 'react-icons/fa6';
import { SiFacebookgaming } from 'react-icons/si';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            {/*dashboard side bar */}
            <div className="w-64 bg-orange-500 min-h-screen">
                <ul className='menu py-4'>
                    <li>
                        <NavLink to='/dashboard/home'>
                            <FaHome></FaHome>
                            USER HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/resevation'>
                            <FaCableCar></FaCableCar>
                            RESERVATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <FaCalculator></FaCalculator>
                            PAYMENT HISTORY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/card'>
                            <FaShoppingCart></FaShoppingCart>
                            MY CARD
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <FaStreetView></FaStreetView>
                            ADD REVIEW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'>
                            <SiFacebookgaming></SiFacebookgaming>
                            MY BOOKIMG
                        </NavLink>
                    </li>
                    <div className="divider text-white"></div>
                     <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            HOME
                        </NavLink>
                    </li>
                      <li>
                        <NavLink to='/menu'>
                            <FaUserMinus></FaUserMinus>
                            MENU
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;