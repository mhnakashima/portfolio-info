import Icon from '@mdi/react';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import { mdiReload } from '@mdi/js';

import './badge.scss';

const Badge = ({ icon, label, text }) => {
    return (
        <div className='items flex mb-4 items-center' data-testid="badge">
            <Avatar>
                <Icon path={icon ?? mdiReload} size={`1rem`} />
            </Avatar>
            <div className='ml-2 description'>
                <span className='bagde--label font-light text-sm'>{label ?? ''}</span>
                <h4 className='bagde--text font-semibold -mt-1'>{text ?? ''}</h4>
            </div>
        </div>
    )
}

export { Badge };
