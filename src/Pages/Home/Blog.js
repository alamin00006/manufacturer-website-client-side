import React from 'react';

const Blog = () => {
    return (
        <div className='mx-16'>
            <h1 className='text-3xl text-primary'>How will you improve the performance of a React Application?</h1>
           <ul>
               <li>যেখানে প্রয়োজন সেখানে Component রাখা যায়।</li>
               <li> React components to prevent unnecessary re-renders</li>
               <li>অপ্রয়োজনীয় রি-রেন্ডার বন্ধ করার জন্য React components Memoizing করা।</li>
               <li>Code-splitting in React.js using dynamic import()</li>
               <li>Windowing or list virtualization in React.</li>
               <li>Lazy loading images in React.</li>
               
           </ul>
        <h1 className='text-3xl text-primary'>What are the different ways to manage a state in a React application?</h1>
           <ul>
               <li>There are four main types of state you need to properly manage in your React apps :</li>
               <li>Local state</li>
               <li>Global state</li>
               <li>Server state
</li>
               <li>URL state
</li>

           </ul>

           <ul>
               <h1 className=' text-3xl text-primary'>How does prototypical inheritance work? : </h1>
               <p>প্রোটোটাইপ্যাল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি feature  যা methods and properties যোগ করতে ব্যবহৃত হয়। এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি object  অন্য object  এর  feature এবং method, Inheritance হতে পারে। Traditionally একটি object Prototypপেতে এবং সেট করার জন্য, আমরা অবজেক্ট ব্যবহার করি। getPrototypeOf এবং Object</p>
           </ul>

           <ul>
               <h1 className=' text-3xl text-primary'>What is a unit test? Why should write unit tests?</h1>
               <p>
               Unit tests are typically automated tests written and run by software developers to ensure that a section of an application , meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
               </p>
           </ul>
           <h1 className='text-3xl text-primary '>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? :</h1>
           <p>
               On this array use map.filter()
           </p>
        </div>
    );
};

export default Blog;