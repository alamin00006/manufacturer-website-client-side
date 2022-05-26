import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {
 
    const stripe = useStripe();
    const elements = useElements();
 const [cardError, setCardError] = useState('')
 const [clientSecret, setClientSecret] = useState('')
 const [success, setSuccess] = useState('');

 const [transactionId, setTransactionId] = useState('');
 
   const {_id,price, customerName,customer} = data;
   

   useEffect(() => {
    fetch('https://secure-anchorage-88576.herokuapp.com/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ price })
    })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        });

}, [price])

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
          setSuccess('');
       

          const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                       name:customerName,
                       email: customer
                    },
                },
            },
        );
        if (intentError) {
          setCardError(intentError?.message);
          
      }
      else {
          setCardError('');
        
          setTransactionId(paymentIntent.id)
          console.log(paymentIntent);
          setSuccess('Congratulation! Your payment is completed.')
          
          
          const payment = {
              ProductId: _id,
              transactionId: paymentIntent.id,
              status: 'pending'

          }

          fetch(`https://secure-anchorage-88576.herokuapp.com/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
               
                console.log(data);
            })

        }
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
    {
       success && <div className='text-red-500'>
        <p className='text-green-500'> {success}</p>
        <p className='text-yellow-500'> Your Transaction Id : {transactionId}</p>
       </div>
    }
        </>
    );
};

export default CheckoutForm;