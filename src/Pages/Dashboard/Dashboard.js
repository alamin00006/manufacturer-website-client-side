import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading/Loading';
const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if(loading|| adminLoading){
        <Loading></Loading>
    }
    return (
        <div class="drawer drawer-mobile">
  <input id="my-dashbaord" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h1 className='text-primary text-3xl text-bold'>Your Dashboard</h1>
      <Outlet></Outlet>
    
  </div> 
  <div class="drawer-side">
    <label for="my-dashbaord" class="drawer-overlay"></label> 
    <ul class="menu overflow-y-auto  bg-base-100 text-base-content">
     
      
         <li><Link to='/dashboard'>My Profile</Link></li>
          <li><Link to='/dashboard/portfolio'>My Portfolio</Link></li>
      
      {
          !admin && <li><Link to='/dashboard/review'>Add a Review</Link></li>
      }
      { !admin && <li><Link to='/dashboard/myOrders'>My Orders</Link></li>}
      {
          admin && <li><Link to='/dashboard/users'>Make Admin</Link></li>
      }
      {
          admin && <li><Link to='/dashboard/allorders'>Manage All Orders</Link></li>
      }
      {
          admin && <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
      }
      {
          admin && <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;