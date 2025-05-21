
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provoder/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCard from '../../hooks/useCard';
import { auth } from '../../Firebase/firebase.config';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext)
  const [card] = useCard();

  const handleLogOut = () => {
    logOut()
  }
  const NavOption = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/order/salads'>Order Food</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li><Link to='/signup'>SignUp</Link></li>
    <li><Link to='dashboard/card'>
      <div className='btn'>
        <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">+{card.length}
        </div>
      </div>

    </Link></li>
    {
      user ? <>
        <button onClick={handleLogOut} className='btn justify-center btn-ghost'>Logout</button>
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
        </div>
        <a className="btn btn-ghost text-xl">Bistro boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavOption}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">{user?.displayName}</a>
      </div>
    </div>
  );
};

export default NavBar;