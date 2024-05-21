import Icon from '@mdi/react';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import { mdiReload } from '@mdi/js';

const Badge = ({ icon, label, text }) => {
    return (
        <div className='items flex'>
            <Avatar>
                <Icon path={icon ?? mdiReload} size={`1rem`} />
            </Avatar>
            <div className='ml-3 description'>
                <span className='bagde--label'>{label ?? ''}</span>
                <h4 className='bagde--text text-base font-bold'>{text ?? ''}</h4>
            </div>
        </div>
    )
}

export { Badge };
