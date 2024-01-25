import React, { useState } from 'react';
import plus from '../Images/plus.png';
import list from '../Images/list.png';
import deposit from '../Images/deposit.png';
import baby from '../Images/baby-boy.png';
import app from '../Images/app.png';
import setting from '../Images/settings.png';
import sun from '../Images/sun.png';
import logoutpng from '../Images/logout.png';
import user from '../Images/user.png';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import History from './History';
import menu from '../Images/menu.png'
import down from '../Images/down.png'
import Deposit from './Deposit';
import Account from './Account';
import close from '../Images/close.png';
import Child from './Child';
import Ticket from './Ticket';
import Updates from './Updates';
import Affiliates from './Affiliates';
import Terms from './Terms';
import Contact from './Contact';
import Mass from './Mass';
import Login from './Login';
import AuthUser from './AuthUser';
import { useEffect } from 'react';
import SuccessPage from './SuccessPage';
import CancelPage from './CancelPage';
function Navbar() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    function togglemenu() {
        setIsMenuActive((prevState) => !prevState);
        const menutoggle = document.querySelector('.menu');
        menutoggle.classList.toggle('active');
        const navigation = document.querySelector('.nav');
        navigation.classList.toggle('active');
    }
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token != undefined) {
            logout();
        }
    }
    return (
        <div>
            <>
                <header>
                    <div className="logo">
                        <h1><NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>BulkFollows</NavLink></h1>
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><NavLink to="/" onClick={togglemenu}><img src={plus} alt='' />New Order</NavLink></li>
                            <li><NavLink to="/services" onClick={togglemenu}><img src={list} alt='' />Services</NavLink></li>
                            <li><NavLink to="/history" onClick={togglemenu}><img src={list} alt='' />Orders</NavLink></li>
                            <li><NavLink to="/deposit" onClick={togglemenu}><img src={deposit} alt='' />Deposit</NavLink></li>
                            <li><NavLink to="/child-panel" onClick={togglemenu}><img src={baby} alt='' />Child Panel</NavLink></li>
                            <li><a href="#"><img src={down} alt='' />More</a>
                                <ul>
                                    <li><NavLink to="/massorder" onClick={togglemenu}>Mass Order</NavLink></li>
                                    <li><NavLink to="/tickets" onClick={togglemenu}>Tickets</NavLink></li>
                                    <li><NavLink to="/updates" onClick={togglemenu}>Updates</NavLink></li>
                                    <li><NavLink to="/affiliates" onClick={togglemenu}>Affiliates</NavLink></li>
                                    <li><NavLink to="/terms" onClick={togglemenu}>Terms</NavLink></li>
                                    <li><NavLink to="/contact" onClick={togglemenu}>Contact Us</NavLink></li>
                                    <li><NavLink to="/account" onClick={togglemenu}>Account Setting</NavLink></li>
                                    {/* <li><NavLink to="/#">Sub Menu 4</NavLink></li> */}
                                </ul>
                            </li>
                            {/* <li><a href="/"><img src={plus} alt=''/>More</a></li> */}
                        </ul>
                    </div>
                    <div className="right">
                        <div className="images">
                            <NavLink to="/login"><img src={sun} alt="" /></NavLink>
                            <NavLink to="/account"><img src={setting} alt="" /></NavLink>
                            {/* <NavLink to="/account"><img src={logout} alt="" /></NavLink> */}
                            {/* <NavLink to="/"><img src={logout} alt="" /></NavLink> */}
                            <a href="/" onClick={(e) => { e.preventDefault(); logoutUser(); }}>
                                <img src={logoutpng} alt="" />
                            </a>
                            <NavLink to="/account"><img src={user} alt="" /></NavLink>
                           
                            {/* <button className='menu' onClick={togglemenu}><img src={menu} alt="" /></button>
                            <button className='menu' onClick={togglemenu}><img src={close} alt="" /></button> */}
                            <button className={`menu ${isMenuActive ? 'active' : ''}`} onClick={togglemenu}>
                                <img src={isMenuActive ? close : menu} alt={isMenuActive ? 'Close Menu' : 'Open Menu'} />
                            </button>
                        </div>
                    </div>
                </header>
            </>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/history' element={<History />} />
                <Route path='/deposit' element={<Deposit />} />
                <Route path='/account' element={<Account />} />
                <Route path='/child-panel' element={<Child />} />
                <Route path='/tickets' element={<Ticket />} />
                <Route path='/updates' element={<Updates />} />
                <Route path='/affiliates' element={<Affiliates />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/massorder' element={<Mass />} />
                <Route path='/login' element={<Login />} />
                <Route path='/success' element={<SuccessPage />} />
                <Route path='/cancel' element={<CancelPage />} />
            </Routes>
        </div>
    )
}

export default Navbar