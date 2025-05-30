import { FaBook, FaCalculator, FaHome, FaShopify, FaShoppingCart, FaStreetView, FaUserMinus, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaCableCar } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
   
    //:get isAdmin admin value form the database 
     const [isAdmin]=useAdmin();
    return (
        <div className='flex'>
            {/*dashboard side bar */}
            <div className="w-64 bg-orange-500 min-h-screen">
                <ul className='menu py-4'>
                    {isAdmin ? <>

                        <li>
                            <NavLink to='/dashboard/adminhome'>
                                <FaHome></FaHome>
                                ADMIN HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/additem'>
                                <FaUtensils></FaUtensils>
                                ADD ITEM
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/managebooking'>
                                <FaBook></FaBook>
                                MANAGE BOOKING
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/allusers'>
                                <FaUsers></FaUsers>
                                ALL USERS
                            </NavLink>
                        </li>
                    </>
                        :
                        <>
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
                        </>
                    }
                    <div className="divider text-white"></div>
                    {/* this is shared option conected to the home lyout*/}
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
                    <li>
                        <NavLink to='/shop'>
                            <FaShopify></FaShopify>
                            SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <MdOutlineEmail></MdOutlineEmail>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content*/}
            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;