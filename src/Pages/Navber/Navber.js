import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {
  const [user] = useAuthState(auth);


  const logOut = () =>{
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
    const menuver = <>
    <li className='text-xl'> <NavLink to ='/'>Home</NavLink> </li>
      {user && <li className='text-xl'> <NavLink to ='/dashboard'>Dashboard</NavLink> </li>}
    <li className='text-xl'> <NavLink to ='/blog'>Blog</NavLink> </li>
    <li className='text-xl'> {user?<button onClick={logOut}>Logout</button> : <NavLink to ='/login'>Login</NavLink>} </li>
    </>
    return (
        <div class="navbar bg-black justify-between text-white">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuver}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost  text-2xl uppercase">Machins Repair Parts</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {menuver}
          </ul>
        </div>
        <div className="navbar-end">
        <label for="my-dashbaord" tabindex="1" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        
        </div>
      </div>
    );
};

export default Navber;