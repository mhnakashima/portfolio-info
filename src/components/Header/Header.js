import React from "react";

import logo from './../../assets/images/profile.webp';

const Header = () => {
    return (

        <div className='section'>
            <img src={logo} alt="My personal photo" />
            <h1 className={`mt-1 text-2xl font-bold`}>Michael Nakashima | Naka</h1>
            <h2 className='-mt-2 font-semibold text-lg mb-3'>Front-end Enginner</h2>

            <p className={`mb-3 text font-light `}>
                Front end Engineer with 15 years of experience, used to work with small and bigger teams,
                developing solutions like apps, interfaces, websites, helping colleagues to developer themselves
                helping them with Front end technical knowledge, proven experience developing solutions
                for companies and clients.
            </p>
        </div>

    );
}

export { Header };