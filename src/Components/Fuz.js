import dollar from '../Images/dollar.png'
import list from '../Images/list.png'
import { CardElement, useStripe, useElements, PaymentElement , } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
const stripePromise = loadStripe('pk_test_51NJsn1BU7H0QUesxfw3EnTihRzpZw0NYd8fyD09p1EstDJpGlaEPPHVWKBP3OAebMeV7gHAjaiG4PZV04I6EE2ER00wFdt2WbR');

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
        // const { paymentIntent, error } = await stripe.confirmPayment(clientSecret, {
        //     payment_method: {
        //         card: elements.getElement(PaymentElement),
        //     },

        // });
        // const { paymentIntent, error } = await stripe.confirmPayment({
        //     elements,
        //     redirect: 'if_required',
        //     confirmParams: {
        //         return_url: "http://localhost:3000",
        //     },
        // });


        if (error) {
            console.error(error);
        } else {
            // Payment succeeded, handle success
            console.log('Payment succeeded:', paymentIntent);
            setShowCheckOut(false); // Close the Stripe modal
        }
    };

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#6bc9a8',
            colorBackground: '#ffffff',
            colorText: '#000000',
        },

    };

    const options = {
        appearance,
        clientSecret
    };
    // const handleModalClose = () => {
    //     setShowCheckOut(false);
    // };
    const paymentElementOptions = {
        layout: "tabs"
    }
    return (

        <Elements stripe={stripePromise} options={options} >
            <form onSubmit={handleSubmitPayment}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                
                <button type='submit'>Pay Now</button>
            </form>
        </Elements>

    );
};


export default StripePaymentForm;