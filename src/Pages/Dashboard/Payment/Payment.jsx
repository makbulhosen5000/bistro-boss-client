import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../Hooks/useCart';


//TODO:provide published key

const Payment = () => {
  //TODO:provide published key
 const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
 const [cart] =useCart();
 const total = cart.reduce((sum,item)=>sum+item.price,0)
const price = parseFloat(total.toFixed(2));
 return (
    <div>
      <SectionTitle
        subHeading="payment"
        heading="please provide"
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;