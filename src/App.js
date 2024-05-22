import { mdiHelpCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { Header } from './components/Header/Header';
import "./styles.scss";

import ContactDetails from './components/ContactDetails/ContactDetails';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';

const App = () => {
    return (
        <aside id="app-menu-info" className={`app-menu-info`}>

            <Header />

            <PersonalDetails />

            <ContactDetails />           

        </aside>
    );
};

export default App;
