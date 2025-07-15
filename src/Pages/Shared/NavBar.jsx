
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provoder/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCard from '../../hooks/useCard';
import { auth } from '../../Firebase/firebase.config';
import useAdmin from '../../hooks/useAdmin';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext)
  const [card] = useCard();
  const [isAdmin] = useAdmin();


  const handleLogOut = () => {
    logOut()
  }
  const NavOption = <>
    <li><Link to='/'>Home</Link></li>

    {/* <li><Link to='/menu'>Menu</Link></li> */}
    <li><Link to='/order/salads'>Order Food</Link></li>
    {/* <li><Link to='/secret'>Secret</Link></li> */}
    {
      user && isAdmin && <li> <Link to='/dashboard/adminhome'>Dashboard</Link></li>
    }
    {
      user && !isAdmin && <li> <Link to='/dashboard/userhome'>Dashboard</Link></li>
    }
    <li><Link to='dashboard/card'>
      <div className='btn'>
        <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">+{card.length}
        </div>
      </div>

    </Link></li>
    <li><Link to='/signup'>SignUp</Link></li>
    {
      user ? <>
        <Link onClick={handleLogOut} className='btn justify-center btn-ghost'>Logout</Link>
      </> :
        <>
          <li><Link to='/login'>Login</Link></li>
        </>
    }
  </>


  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-red-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {NavOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavOption}
        </ul>
      </div>
      <div className="navbar-end">
        <input type="text" placeholder="Search" className="input bg-slate-500 mr-2 w-24 md:w-auto" />
       <button className='btn mr-2'>search</button>
        <a className="btn">{user?.displayName}</a>
      </div>
    </div>
  );
};

export default NavBar;