import React from 'react'
import gif from '../Images/Profile.json';
import dollar from '../Images/dollar.json';
import wallet from '../Images/wallet.json';
import cart from '../Images/cart.json';
import cart1 from '../Images/add-to-cart.png'
import list from '../Images/list.png'
import Lottie from 'lottie-react'
import { NavLink } from 'react-router-dom';
function Mass() {
    return (
        <>
            <section className='main'>
                <h1 className='first-heading'>Mass Order</h1>
                <p style={{ color: 'white' }}>All you want about Social Media</p>
                <div className="row">
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={gif} />
                        </div>
                        <div className="heading">
                            <p>Account Status</p>
                            <h1>New</h1>
                            <p>Want to know more?</p>
                            <a href="/">Click Here</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={dollar} />
                        </div>
                        <div className="heading">
                            <p>Total Orders</p>
                            <h1>32131</h1>
                            <p>10+ years experience!</p>
                            <a href="/">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={wallet} />
                        </div>
                        <div className="heading">
                            <p>Total Balance</p>
                            <h1>$ 0</h1>
                            <p>You have currently <b>$0.00</b>.</p>
                            <a href="/">Deposit more here</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <Lottie animationData={cart} />
                        </div>
                        <div className="heading">
                            <p>Total Spending</p>
                            <h1>$ 0</h1>
                            <p>Payment You Spend</p>
                            <a href="/">See Your History</a>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form1">
                        <div className="parent-flex">

                            <div className="flex">
                                <img src={cart1} alt="" />
                                <h3><NavLink to="/">New Order </NavLink></h3>
                            </div>
                            <div className="flex">
                                <img src={cart1} alt="" />
                                <h3><NavLink to="/massorder">Mass Order </NavLink></h3>
                            </div>
                        </div>
                        <div className="flex1">
                            <img src={list} alt="" />
                            <label htmlFor="">One order per line in format :</label>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='service_id | link | quantity'></textarea> <br />
                        <button>Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mass