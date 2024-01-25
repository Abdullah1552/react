import dollar from '../Images/dollar.png'
import list from '../Images/list.png'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const StripePaymentForm = ({ clientSecret, setShowCheckOut }) => {
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmitPayment = async (e) => {
        e.preventDefault();


        if (!stripe || !elements) {
            return;
        }


        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        
        });

        if (error) {
            console.error(error);
        } else {
            // Payment succeeded, handle success
            console.log('Payment succeeded:', paymentIntent);
            setShowCheckOut(false); // Close the Stripe modal
        }
    };

    const handleModalClose = () => {
        setShowCheckOut(false);
    };
    const appearance = {
        theme: 'stripe', // Specify the theme
        // Customize theme colors
        variables: {
            colorPrimary: '#6bc9a8',
            colorBackground: '#ffffff',
            colorText: '#000000',
        },
    };
    // const elements = stripe.elements({clientSecret, appearance});
    return (
        <form onSubmit={handleSubmitPayment}>
            {/* <div className="">
                <div className="">
                    <button className="" onClick={handleModalClose}>
                        x
                    </button>
                    <div className=""> */}
                        <CardElement />
                        <button type="submit">Pay Now</button>
                    {/* </div>
                </div>
            </div> */}
        </form >
    );
};


export default StripePaymentForm;