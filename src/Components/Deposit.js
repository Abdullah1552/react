// import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import dollar from '../Images/dollar.png'
import list from '../Images/list.png'
import StripePaymentForm from './StripePaymentForm'; // Adjust the path based on your file structure
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NJsn1BU7H0QUesxfw3EnTihRzpZw0NYd8fyD09p1EstDJpGlaEPPHVWKBP3OAebMeV7gHAjaiG4PZV04I6EE2ER00wFdt2WbR'); // Replace with your Stripe publishable key

// const Deposit = () => {
//     const [clientSecret, setclientSecret] = useState(null);
//     const [showCheckOut, setshowCheckOut] = useState(false);
//     const handlePayment = (paymentIntent) => {0
//         // Handle successful payment, e.g., update UI, show success message, etc.
//         console.log('Payment succeeded:', paymentIntent);
//     };
//     const options = {
//         clientSecret
//     };
//     return (
//         <Elements stripe={stripePromise} options={options} setclientSecret={setclientSecret} >
//             <StripePaymentForm handlePayment={handlePayment} />
//         </Elements>

//     );
// };
const Deposit = () => {
    const [clientSecret, setClientSecret] = useState(null);
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [uId, setUId] = useState('');

    // const handleOnSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formdata = new FormData(e.target);
    //         const data = {
    //             amount: formdata.get('amount'),
    //             u_id: userId,
    //         };

    //         const response = await fetch('http://localhost:8000/api/stripe', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         const responseData = await response.json();
    //         setClientSecret(responseData.clientSecret);
    //         setShowCheckOut(true);
    //         // window.location.href = "http://localhost:3000/payment";
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const userInfoString = sessionStorage.getItem('user');
    const userInfo = JSON.parse(userInfoString);
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    // const handleOnSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // const formdata = new FormData(e.target);
    //         // const data = {
    //         //     amount: formdata.get('amount'),
    //         //     // u_id: userId,
    //         // };

    //         // Make an API call to create a Stripe Checkout session
    //         const response = await fetch('http://localhost:8000/api/stripe', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: userInfo.id,
    //                 quantity: parseInt(quantity),
    //             }),
    //         });

    //         // const responseData = await response.json();
    //         // const sessionId = responseData.sessionId;

    //         // Construct the prebuilt Stripe Checkout page URL
    //         // const checkoutUrl = `https://buy.stripe.com/test_7sI6q624I3RB95C9AA`;

    //                     window.location.href = checkoutUrl;
    //         // window.location.href = responseData.checkoutUrl;

    //         // Redirect the user to the Stripe Checkout page
    //         window.location.href = checkoutUrl;
    //     } catch (error) {
    //         console.error(error);
    //     }
        
        
    // };
    const handleOnSubmit = async () => {
        if (userInfo && userInfo.id && quantity) {
            // Make an API call to create a Stripe Checkout session
            const response = await fetch('http://localhost:8000/api/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userInfo.id,
                    quantity: parseInt(quantity),
                }),
            });

            const responseData = await response.json();
            // sessionStorage.setItem('u_id', userInfo.id);
            const checkoutUrl = responseData.checkoutUrl;

            // // Redirect to the modified checkout URL
            // window.location.href = checkoutUrl;
            // const checkoutUrl = `https://buy.stripe.com/test_7sI6q624I3RB95C9AA`;
            window.location.href = checkoutUrl;
            window.location.href = responseData.checkoutUrl;
        } else {
            console.error('User info, user id, or quantity is missing');
        }
    };

    return (
        //     <Elements stripe={stripePromise}>
        //     <div>
        //         {!showCheckOut ? (
        //             <form onSubmit={handleOnSubmit} className='space-y-6 mt-8 mb-5'>
        //                 <input type="number" placeholder='Enter Amount' name="amount" />
        //                 <button type="submit">Checkout</button>
        //             </form>
        //         ) : (
        //             <StripePaymentForm
        //                 clientSecret={clientSecret}
        //                 setShowCheckOut={setShowCheckOut}
        //             />
        //         )}
        //     </div>
        // </Elements>
        <>
            <section className='main1'>
                <h1 className='first-heading'>Add funds to your account</h1>
                <p style={{ color: 'black' }}>Most Trusted Money transfer methods</p>
                <div className="row">
                    <div className="card">
                        <div className="gif">
                            <h1>01</h1>
                        </div>
                        <div className="heading">
                            <p>Currently Balance</p>
                            <h1>0 $</h1>
                            <p>Add More</p>
                            {/* <a href="/">Click Here</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <h1>02</h1>
                        </div>
                        <div className="heading">
                            <p>Payments Methods</p>
                            <h1>5</h1>
                            <p>Most Trusted Methods</p>
                            {/* <a href="/">Learn More</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <h1>03</h1>
                        </div>
                        <div className="heading">
                            <p>Your Payments History</p>
                            <h1>$ 0</h1>
                            <p>You have currently <b>$0.00</b>.</p>
                            {/* <a href="/">Deposit more here</a> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="gif">
                            <h1>04</h1>
                        </div>
                        <div className="heading">
                            <p>Total Spending</p>
                            <h1>$ 0</h1>
                            <p>Payment You Spend</p>
                            {/* <a href="/">See Your History</a> */}
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form1">
                        {/* <form onSubmit={handleOnSubmit} className='space-y-6 mt-8 mb-5'> */}
                        <div className="parent-flex">

                            <div className="flex">
                                <img src={dollar} alt="" />
                                <h3><a href="/">Add Funds </a></h3>
                            </div>
                            <div className="flex">
                                <img src={dollar} alt="" />
                                <h3><a href="/">Prev Funds </a></h3>
                            </div>
                        </div>
                        <div className="flex1">
                            <img src={list} alt="" />
                            <label htmlFor="">Enter An Amount : </label>
                        </div>
                        {/* <input type="number" placeholder='Enter Amount' name="amount" />
                            <button type="submit">Checkout</button> */}
                         <form className='space-y-6 mt-8 mb-5'>
                <input
                    type="number"
                    placeholder="Enter Quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                    step="0.01"
                />
                <button type="button" onClick={handleOnSubmit}>Checkout</button>
            </form>
                        {/* <Elements stripe={stripePromise}>
                                <div>
                                    {!showCheckOut ? (
                                        <form onSubmit={handleOnSubmit} className='space-y-6 mt-8 mb-5'>
                                            <input type="number" placeholder='Enter Amount' name="amount" required/>
                                            <button type="submit">Checkout</button>
                                        </form>
                                    ) : (
                                        <StripePaymentForm
                                            clientSecret={clientSecret}
                                            setShowCheckOut={setShowCheckOut}
                                        />
                                    )}
                                </div>
                            </Elements> */}
                        {/* {showCheckOut && (
                                <form onSubmit={handleSubmitPayment}>
                                    <div className="payment-modal-overlay">
                                        <div className="payment-modal">
                                            <button className="close-button" onClick={handleModalClose}>
                                                X
                                            </button>
                                            <div className="modal-content">
                                                <CardElement />
                                                <button type="submit" className="pay-now-button">Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )} */}
                        {/* {showCheckOut && (
                                <div className="payment-modal-overlay">
                                    <div className="payment-modal">
                                        <div className="modal-content">
                                            <Elements>
                                                <form onSubmit={handleSubmitPayment}>
                                                    <CardElement className="card-element" />
                                                    <button type="submit" className="pay-now-button">Pay Now</button>
                                                </form>
                                            </Elements>
                                        </div>
                                    </div>
                                </div>
                            )} */}
                        {/* </form> */}
                        {/* <select name="" id="" placeholder='Select A Category'>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                            <option value="0">Select 1</option>
                        </select> */}
                        {/* <label htmlFor="">Amount :</label> <br /> */}
                        {/* <label htmlFor="">Extra Free :</label> <br /> */}
                        {/* <input type="text" disabled placeholder='Charges' /> */}
                        {/* <label htmlFor="">Total :</label> <br /> */}
                        {/* <input type="text" disabled placeholder='Total Amount' /> */}
                    </div>
                    <div className="form2">
                        <h2>Details About Each Bank :</h2>
                        <div className="form-detail">
                            <div className="col">
                                <h1>Easypaisa</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae in quis necessitatibus cupiditate itaque sed consequuntur amet quaerat vitae odio?</p>
                            </div>
                            <div className="col">
                                <h1>Jazz Cash</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae in quis necessitatibus cupiditate itaque sed consequuntur amet quaerat vitae odio?</p>
                            </div>
                            <div className="col">
                                <h1>Master Card</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae in quis necessitatibus cupiditate itaque sed consequuntur amet quaerat vitae odio?</p>
                            </div>
                            <div className="col">
                                <h1>Paypal</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae in quis necessitatibus cupiditate itaque sed consequuntur amet quaerat vitae odio?</p>
                            </div>
                            <div className="col">
                                <h1>Sada Pay</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae in quis necessitatibus cupiditate itaque sed consequuntur amet quaerat vitae odio?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Deposit;