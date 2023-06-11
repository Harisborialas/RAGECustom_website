import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const MyProfileSideBar = () => {
    const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };
  return (
    <>
      <div className='MyProfile-Side-Bar'>
        <h1 className="Account-Details-Heading">My Profile</h1>
        <div className='Account-Details-Nav-menu '>
        <nav>
      <ul>
        <li>
          <Link href="/components/MyAccount/AccountDetails/AccountDetails">
            <p className={isActive('/components/MyAccount/AccountDetails/AccountDetails') ? 'active' : ''}>Account Details</p>
          </Link>
        </li>
        <li>
          <Link href="/components/MyAccount/AccountOrders/AccountOrder">
            <p className={isActive('/components/MyAccount/AccountOrders/AccountOrder') ? 'active' : ''}>Orders</p>
          </Link>
        </li>
        <li>
          <Link href="/components/MyAccount/AccountOrders/AccountOrde">
            <p className={isActive('/components/MyAccount/AccountOrders/AccountOrde') ? 'active' : ''}>Wallet</p>
          </Link>
        </li>
        <li>
          <Link href="/components/MyAccount/AccountOrders/AccountOrder">
            <p className={isActive('/components/MyAccount/AccountOrders/AccountOrde') ? 'active' : ''}>Addresses</p>
          </Link>
        </li>
        <li>
          <Link href="/components/MyAccount/AccountOrders/AccountOrder">
            <p className={isActive('/components/MyAccount/AccountOrders/AccountOrde') ? 'active' : ''}>My Favorites</p>
          </Link>
        </li>
        <li>
          <Link href="/components/MyAccount/AccountOrders/AccountOrder">
            <p className={isActive('/components/MyAccount/AccountOrders/AccountOrde') ? 'active' : ''}>Loyalty</p>
          </Link>
        </li>
        <li>
          <Link href="/components/MyAccount/AccountOrders/AccountOrder">
            <p className={isActive('/components/MyAccount/AccountOrders/AccountOrde') ? 'active' : ''}>Logout</p>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
        </div>  
    </>
  )
}

export default MyProfileSideBar
