import React from 'react';
import card from '../../../Assets/Image/Group 3.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Blog</a></li>
      <li><a>About Us</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            En
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
          <li><a>BN</a></li>
          <li><a>PAK</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
    <a className=" normal-case text-xl text-[#396C03]">FoodTime</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Blog</a></li>
      <li><a>About Us</a></li>
      <li tabIndex={0}>
        <a>
          EN
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>BN</a></li>
          <li><a>PAK</a></li>
        </ul>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <div className='mr-5'>
    <a className="btn w-[154px] h-[58px] bg-[#396C03] rounded-full">Login</a>
    </div>
    <div>
    <img src={card}></img>
    </div>
  </div>
</div>
<hr/>
     </div>
    );
};

export default Navbar;