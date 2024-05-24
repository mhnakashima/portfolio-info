import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

// import i18n (needs to be bundled ;)) 
import './locales/i18n';

const mount = (el) => {
    if(!el){
        return;
    }

    const root = createRoot(el);
    root.render(<App />);
}

if (process.env.NODE_ENV === 'development') {
    const developmentContainer = document.querySelector('#_app-info');

    if (developmentContainer) {
        mount(developmentContainer);
    }
}

/*
    We need to mount our front component using react
    if we are running on isolation mode, run using
    app_info div else pass a container as a parameter
*/
export { mount };
