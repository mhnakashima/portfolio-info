import { mdiEmail, mdiGithub, mdiHelpCircleOutline, mdiLinkedin, mdiWebBox } from '@mdi/js';
import React from 'react';
import logo from './assets/images/profile.webp';
import { Badge } from './components/Badge/Badge';
import "./styles.scss";
import Icon from '@mdi/react';
import { Header } from './components/Header/Header';

const App = () => {
    return (
        <aside id="app-menu-info" className={`app-menu-info`}>
            
            <Header />

            <div className='section'>
                <h3 className='font-bold'>Personal Details</h3>

                <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='grid grid-cols-2 items-center mb-4'>
                        <span className='text-sm font-light'>Work Exp.</span>
                        <span className='text-base font-light'>15 years</span>
                    </div>

                    <div className='grid grid-cols-2 items-center mb-4'>
                        <span className='text-sm font-light'>Education.</span>
                        <span className='text-base font-light'>Pontificia Universidade Católica - PUC - MG</span>
                    </div>

                    <div className='grid grid-cols-2 items-center mb-4'>
                        <span className='text-sm font-light'>Current<br />Occupation.</span>
                        <span className='text-base font-light'>Software Engineer at Ciandt (2022)</span>
                    </div>

                    <div className='grid grid-cols-2 items-center mb-4'>
                        <span className='text-sm font-light'>Languages.</span>
                        <p className='text-base font-light'>
                            <ul className='list-none'>
                                <li>PT-BR: Native</li>
                                <li>English: B2</li>
                                <li>Spanish: B1</li>
                            </ul>
                        </p>
                    </div>

                    <div className='grid grid-cols-2 items-center mb-4'>
                        <span className='text-sm font-light'>Date of Birth</span>
                        <span className='text-base font-light'>11/13/1987</span>
                    </div>
                </div>
            </div>

            <div className='section'>
                <h3 className='font-bold'>Contact Details</h3>

                <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    <Badge icon={mdiEmail} label={`Email`} text={`mhnakashima@gmail.com`} />
                    <Badge icon={mdiWebBox} label={`Website`} text={<a href='http://mhnakashima.com' target='_blank'>http://mhnakashima.com</a>} />
                    <Badge icon={mdiLinkedin} label={`Linkedin`} text={<a href='https://www.linkedin.com/in/mhnakashima/' target='_blank'>mhnakashima</a>} />
                    <Badge icon={mdiGithub} label={`Github`} text={<a href='https://github.com/mhnakashima' target='_blank'>/Github</a>} />
                </div>
            </div>

            <div className='section'>
                <h3 className='font-bold'>About the Containers</h3>

                <p className='text text-base font-light'>
                    Hello, HR, Tech or anyone who wants to know some info about this Portfolio that I have created. So,
                    After many tech interviews I wanted to put everything that I am using to work on this website from
                    every single step since the conception to delivery, in some parts of this site, you will able to see a <Icon className='inline' path={mdiHelpCircleOutline} size={`1rem`} aria-label='Interrogation icon' />&nbsp; 
                    which will describe the tech stack info about it.<br /><br />I hope this information helps you to validate
                    any information that you may need.
                </p>

            </div>

        </aside>
    );
};

export default App;
