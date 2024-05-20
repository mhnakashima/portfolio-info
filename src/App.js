import React from 'react';
import "./styles.scss";
import logo from './assets/images/profile.webp';

const App = () => {
    return (
        <aside id="app-menu-info" className={`app-menu-info`}>
            <div className='section'>
                <img src={logo} alt="My personal photo" />
                <h1 className={`mt-1 text-2xl font-bold`}>Michael Nakashima | Naka</h1>
                <h2 className='mb-3'>Front-end Enginner</h2>

                <p className={`mb-3 text font-light `}>
                    Front end Engineer with 15 years of experience, used to work with small and bigger teams,
                    developing solutions like apps, interfaces, websites, helping colleagues to developer themselves
                    helping them with Front end technical knowledge, proven experience developing solutions
                    for companies and clients.
                </p>
            </div>

            <div className='section'>
                <h3 className='font-bold'>Contact Details</h3>
            </div>
        </aside>
    );
};

export default App;
