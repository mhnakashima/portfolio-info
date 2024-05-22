import React from "react";

import logo from './../../assets/images/profile.webp';

import './Header.scss';
import { useTranslation } from "react-i18next";

const Header = () => {

    const { t, i18n } = useTranslation();

    return (

        <div className='porfolio-info--header section mb-4'>
            <img src={logo} alt="My personal photo" />
            <h1 className={`title mt-1 text-2xl font-bold`}>Michael Nakashima | Naka</h1>
            <h2 className='subtitle -mt-2 font-semibold text-lg mb-4'>Front-end Enginner</h2>

            <p className={`text mb-4 text-base font-light `}>
               {t('header.description')}
            </p>
        </div>

    );
}

export { Header };