import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div>
            <h1>Welcome to My Portfolio</h1>
            <h3>Name: Mohammad Al Amin</h3>
            <h3>Email: alaminbamna@gmail.com</h3>
            <h3>My Education : Computer Diploma Engineer</h3>
            </div>
            <div>
                <h1 className='text-primary'>My Web developer Skill :</h1>
                <ul>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaSript</li>
                    <li>React js</li>
                    <li>React Router</li>
                    <li>Firebase Authentication</li>
                    <li>Daisy Ui</li>
                    <li>Mongodb</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                </ul>
                <h1 className='text-secondary '>My Practis Website Link : </h1>
                <a className='text-primary' href="https://my-computer-store-9e4ae.web.app/"> Computer Store</a><br />
                <a className='text-primary' href="https://physical-medicine-specialist.web.app/"> Physical Medecine Specialist</a><br />
                <a className='text-primary' href="https://best-watch-reviews.netlify.app/"> best-watch-reviews</a>

            </div>
        </div>
    );
};

export default MyPortfolio;