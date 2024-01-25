import React from 'react'
import dollar from '../Images/dollar.png'
import list from '../Images/list.png'
function Child() {
    return (
        <>
            <section className='main1'>
                <h1 className='first-heading'>Want To Earn Money</h1>
                <p style={{ color: 'black' }}>Best Chance to earn money with Child panel</p>
                <div className="row">
                    <div className="card">
                        <div className="gif">
                            <h1>01</h1>
                        </div>
                        <div className="heading">
                            <h1>Step 1</h1>
                            <p>Enter Your Domain</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <h1>02</h1>
                        </div>
                        <div className="heading">
                            <h1>Step 2</h1>
                            <p>Select Your Currency</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <h1>03</h1>
                        </div>
                        <div className="heading">
                            <h1>Step 3</h1>
                            <p>Enter your username</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <h1>04</h1>
                        </div>
                        <div className="heading">
                            <h1>Step 4</h1>
                            <p>Enter Your Password</p>
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form1">
                        <label htmlFor="">Enter Domain :</label> <br />
                        <input type="number" placeholder='Domain Link' />
                        <div className="flex1">
                            {/* <img src={list} alt="" /> */}
                            <label htmlFor="">Currency : </label>
                        </div>
                        <select name="" id="" placeholder='Select A Category'>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                        </select>
                        <label htmlFor="">Admin Username :</label> <br />
                        <input type="number" placeholder='Username' />
                        <label htmlFor="">Admin Password :</label> <br />
                        <input type="text" placeholder='Password' />
                        <label htmlFor="">Price Per Month :</label> <br />
                        <input type="text" disabled placeholder='$ 20.00' />
                        <button>Submit</button>
                    </div>
                    <div className="form2">
                        <h2>ChildPanel Faqs :</h2>
                        <div className="aa">
                            <div className="bb">
                                <input type="checkbox" className="toggle-accord" id="toggle" name="toggle" />
                                <label for="toggle">What is a child panel?</label>
                                <div className="content">
                                    <p>In a child panel, you can sell our services with a percentage of profit

                                        If You purchase a child panel you will be able to earn a lot of money

                                        We will make a 10% discount on each service</p>
                                </div>
                            </div>
                            <div className="bb">
                                <input type="checkbox" className="toggle-accord" id="toggle1" name="toggle" />
                                <label for="toggle1">How to buy a child panel?</label>
                                <div className="content">
                                    <p>1-Simply you need a domain

                                        2-Add 20$ to your account and make an order for the child panel

                                        3-Place an order for child panel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Child