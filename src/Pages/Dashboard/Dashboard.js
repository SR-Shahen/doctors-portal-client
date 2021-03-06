import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-purple-500 my-6 text-2xl font-bold'> Welcome to      Your Dashboard</h1>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Appointment</Link></li>
                    <li><Link to='/dashboard/review'>Reviews</Link></li>
                    <li><Link to='/dashboard/user'>Users</Link></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;