import React from 'react'
import plus from '../Images/plus(1).png';
function Ticket() {
    return (
        <>
                <section className='main1'>
                <h1 className='first-heading'>24 / 7 Support</h1>
                <p style={{ color: 'black' }}>We are here to help you.</p>
                <div className="forms">
                    <div className="form1">
                        <div className="parent-flex">
                            <div className="flex">
                                <img src={plus} alt="" />
                                <h3><a href="/">Add New Ticket </a></h3>
                            </div>
                            <div className="flex">
                                <img src={plus} alt="" />
                                <h3><a href="/">Ticket History </a></h3>
                            </div>
                        </div>
                        {/* <label htmlFor="">Subject :</label> <br />
                        <input type="number" placeholder='Choose Subject' /> */}
                        <div className="flex1">
                            {/* <img src={list} alt="" /> */}
                            <label htmlFor="">Subject : </label>
                        </div>
                        <select name="" id="" placeholder='Choose Subject'>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                        </select>
                        {/* <label htmlFor="">Admin Username :</label> <br />
                        <input type="number" placeholder='Username' />
                        <label htmlFor="">Admin Password :</label> <br />
                        <input type="text" placeholder='Password' />
                        <label htmlFor="">Price Per Month :</label> <br />
                        <input type="text" disabled placeholder='$ 20.00' /> */}
                        <button>Submit</button>
                    </div>
                    <div className="form2">
                        <h2>Ticket Faqs :</h2>
                        <div className="aa">
                            <div className="bb">
                                <input type="checkbox" className="toggle-accord" id="toggle" name="toggle" />
                                <label for="toggle">Orders</label>
                                <div className="content">
                                    <p>If You have a problem with your order,Open The ticket and Explain your problem First of all Select the order in the subject after this Fill in the Order ID in the provided space Then choose your Request and click the submit button Our Team will check it And will reply to you as soon as possible</p>
                                </div>
                            </div>
                            <div className="bb">
                                <input type="checkbox" className="toggle-accord" id="toggle1" name="toggle" />
                                <label for="toggle1">Payments</label>
                                <div className="content">
                                    <p>If you have sent the Payment but its not added in to your account,Open the ticket and Choose Subject as Payment Then select Payment Method, Write the transaction Id,Email Id,Payment ammount,And your Message(if any have)And click the submit button our Payment department will Confirm your payment and add it as soon as possible into your account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ticket