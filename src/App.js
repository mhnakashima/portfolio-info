import React from 'react';
import "./styles.scss";
import logo from './assets/images/profile.webp';
import Avatar from './components/Avatar/Avatar';
import Icon from '@mdi/react';
import { mdiEmail, mdiWebBox, mdiLinkedin, mdiGithub } from '@mdi/js';
import { Badge } from './components/Badge/Badge';

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

                <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Badge icon={mdiEmail} label={`Email`} text={`mhnakashima@gmail.com`} />
                    
                    <div className='items flex'>
                        <Avatar>
                            <Icon path={mdiWebBox} size={`1rem`} />
                        </Avatar>
                        <div className='ml-3 description'>
                            <span>Website</span>
                            <h4 className='text-base font-bold'><a href='http://mhnakashima.com' target='_blank'>http://mhnakashima.com</a></h4>
                        </div>
                    </div>

                    <div className='items flex'>
                        <Avatar>
                            <Icon path={mdiLinkedin} size={`1rem`} />
                        </Avatar>
                        <div className='ml-3 description'>
                            <span>Linkedin</span>
                            <h4 className='text-base font-bold'><a href='https://www.linkedin.com/in/mhnakashima/' target='_blank'>/mhnakashima</a></h4>
                        </div>
                    </div>

                    <div className='items flex'>
                        <Avatar>
                            <Icon path={mdiGithub} size={`1rem`} />
                        </Avatar>
                        <div className='ml-3 description'>
                            <span>Github</span>
                            <h4 className='text-base font-bold'><a href='https://github.com/mhnakashima' target='_blank'>/Github</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default App;
