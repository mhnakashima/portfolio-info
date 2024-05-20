import React from 'react';
import ReactDom from 'react-dom';

const mount = (el) => {
    ReactDom.render(<h1>Porfolio Info</h1>, el);
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
