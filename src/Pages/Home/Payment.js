import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise=loadStripe('pk_test_51L2SF2APuqOzXrGiuYKCMJAZ8I0Zu6eikoKxiBIWxUPxSEMBxhcY1BJR7LsrbaN4w93VfSFDlGDlnbQNBsSi9lEr004wTuFzUs');
const Payment = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/parts/${id}`;
    const {data, isLoading} = useQuery(['parts', id], ()=> fetch(url, {
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
    }).then(res=>res.json()))
    console.log(data)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
           <div class="card w-96 bg-base-100 shadow-xl my-12">
  <div class="card-body">
    <h2 class="card-title">{data.name}</h2>
        <div class="card-actions justify-end">
        <p>Please Pay : ${data.unitPrice}</p>
      
    </div>
  </div>
</div>
           <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
   
  <Elements stripe={stripePromise}>
      <CheckoutForm data={data} />
    </Elements>
    </div>
  </div>
</div>
        
    );
};

export default Payment;