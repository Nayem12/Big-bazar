import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navlogo from '../../Assets/navlogo.png'
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { ImCross } from 'react-icons/im';
import './Navbar.css'
import { AuthContext } from '../../AuthContexts/Contexts/AuthProvider';
import toast from 'react-hot-toast';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [backgroundnav, setBackgroundNav] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBackgroundNav(true);
    }
    else {
      setBackgroundNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  const menuItems = <>
    <li>
      <NavLink to='/' className={({ isActive }) => isActive ? 'newnav_active' : 'p-1 mr-3 font-medium'}>Home</NavLink>
    </li>
    <li>
      <NavLink to='/blog' className={({ isActive }) => isActive ? 'newnav_active' : 'p-1 mr-3 font-medium'}>Blog</NavLink>
    </li>
    {
      user?.email ?
        <>

          <button className='text-white bg-emerald-900 border-[#f5f8f613] border px-2 rounded-md py-0.5  ' onClick={handleLogOut}>Log Out</button>
          <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white' : 'p-1 mr-3 font-medium'}>Dashboard</NavLink>

        </>
        :
        <ul>
          <li><NavLink to='/login' className={({ isActive }) => isActive ? 'p-1 mr-3 font-medium bg-opacity-90 bg-orange-600 text-white rounded-md' : 'p-1 mr-3 font-medium'}>Log-In</NavLink></li>

        </ul>
    }
  </>

  return (
    <div>
      <div className={`w-full flex transparent  ${backgroundnav ? 'newnavbar ' : 'bg-transparent'} py-2 justify-between items-center navbar`}>
        <div className='w-[98%] mx-auto'>

          <Link to='/'>
            {/* <img src={navlogo} alt="" className='w-[100px] h-[50px]  px-2' /> */}
          </Link>
          <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-10  '>


            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? 'newnav_active' : 'newnav'}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/blog' className={({ isActive }) => isActive ? 'newnav_active' : 'newnav'}>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/products' className={({ isActive }) => isActive ? 'newnav_active' : 'newnav'}>Products</NavLink>
            </li>
            <li>
              <NavLink to='/reviews' className={({ isActive }) => isActive ? 'newnav_active' : 'newnav'}>reviews</NavLink>
            </li>
            {user?.email && <li><NavLink className={({ isActive }) => isActive ? 'newnav_active' : 'newnav'} to='/dashboard'>Dashboard</NavLink></li>}


          </ul>

          <ul className='list-none sm:flex hidden  justify-end items-center  gap-3 mr-10 '>


            {
              user ? <button
                onClick={handleLogOut}
                className='text-white bg-emerald-900 border-[#f5f8f613] border px-2 rounded-md py-0.5  '>Log Out</button> :
                <li className='text-white bg-emerald-900 border-[#f5f8f613] border px-2 rounded-md py-0.5 '><Link to='/login'>Sign In</Link></li>
            }

          </ul>

          <div className='sm:hidden  flex flex-1 justify-end items-center'>
            <button
              onClick={() => setToggle((prev) => !prev)}
              className='w-[28px] h-[28px]'>{toggle ? < ImCross className='text-white text-3xl' /> : <TbAdjustmentsHorizontal className='text-white text-3xl' />}</button>
            <div className={`${toggle ? 'flex' : 'hidden mt-100'} p-6 bg-gradient-to-r from-[#e47d28] to-[#444553] absolute  top-20 right-0 mx-4 px-28 z-10  py-10 my-2 min-w[140px] rounded-xl menu `}>

              {/* mobile menu list */}



              {menuItems}




            </div>
          </div>


        </div>





        {/* auth */}


      </div >

    </div>
  );
};

export default Navbar;