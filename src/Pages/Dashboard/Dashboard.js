import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-dashbaord" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h1 className='text-primary text-3xl text-bold'>Your Dashboard</h1>
      <Outlet></Outlet>
    
  </div> 
  <div class="drawer-side">
    <label for="my-dashbaord" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='dashboard'>My Orders</Link></li>
      <li><Link to='/dashboard/review'>Add a Review</Link></li>
      <li><Link to='/dashboard/profile'>My Profile</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;