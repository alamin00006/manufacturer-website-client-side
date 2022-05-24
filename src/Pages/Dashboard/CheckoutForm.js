import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {

    const stripe = useStripe();
    const elements = useElements();
 const [cardError, setCardError] = useState('')
 const [clientSecret, setClientSecret] = useState('')

 console.log(clientSecret)

 
   const {unitPrice} = data;
   console.log('data',data)
   

   useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ unitPrice })
    })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        });

}, [unitPrice])

    const handleSubmit = async (event) =>{
       event.preventDefault() 

       if(!stripe || !elements){
        return;
       }

       const card = elements.getElement(CardElement);

       if (card === null) {
         return;
       }
       const {error, paymentMethod} = await stripe.createPaymentMethod({
           type: 'card',
           card
       })
      
          setCardError(error?.message || '')
      

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary my-2' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500'>{cardError}</p>
    }
        </>
    );
};

export default CheckoutForm;