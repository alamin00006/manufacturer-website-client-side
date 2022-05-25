import React from 'react';

const Subscribe = () => {
    return (
        <div class=" bg-black py-14 text-center">
            <div className='text-base-100 text-center '> <h1 className='text-3xl text-secondary-focus my-4' >Our New Product Get Offers info Your Email?</h1>
            <h1 className='text-primary text-5xl my-4'> Please Subscribe Now</h1>
            </div>
            <input type="Name" placeholder="Enter Your Name" class="input w-96 my-2 input-bordered max-w-xs" />
            <br />
            <input type="email" placeholder="Enter Your Email" class="input w-96 my-2 input-bordered max-w-xs" />
            <br />
            <input type="text" placeholder="Your Phone Number" class="input w-96 input-bordered my-2 max-w-xs" />
            <br />
            <textarea class="textarea w-96  textarea-primary" placeholder="Typing here"></textarea><br />
            <button class="btn btn-secondary">Submit</button>

</div>
    );
};

export default Subscribe;