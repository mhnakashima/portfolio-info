import React from "react";

import logo from './../../assets/images/profile.webp';

import './Header.scss';

const Header = () => {
    return (

        <div className='porfolio-info--header section mb-4'>
            <img src={logo} alt="My personal photo" />
            <h1 className={`title mt-1 text-2xl font-bold`}>Michael Nakashima | Naka</h1>
            <h2 className='subtitle -mt-2 font-semibold text-lg mb-4'>Front-end Enginner</h2>

            <p className={`text mb-4 text-base font-light `}>
                Front end Engineer with 15 years of experience, used to work with small and bigger teams,
                developing solutions like apps, interfaces, websites, helping colleagues to developer themselves
                helping them with Front end technical knowledge, proven experience developing solutions
                for companies and clients.
            </p>
        </div>

    );
}

export { Header };