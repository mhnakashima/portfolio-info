import React from "react";

const PersonalDetails = () => {
    return (
        <div data-testid="personalDetails" className='section mb-4'>
            <h3 className='text-lg font-bold'>Personal Details</h3>

            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>Work Exp.</span>
                    <span className='text-lg font-light'>15 years</span>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>Education.</span>
                    <span className='text-lg font-light'>Pontificia Universidade Católica - PUC - MG</span>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>Current<br />Occupation.</span>
                    <span className='text-lg font-light'>Software Engineer at Ciandt (2022)</span>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>Languages.</span>
                    <div className='text-lg font-light'>
                        <ul className='list-none'>
                            <li>PT-BR: Native</li>
                            <li>English: B2</li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>Date of Birth</span>
                    <span className='text-base font-light'>11/13/1987</span>
                </div>
            </div>
        </div>
    )
};

export default PersonalDetails;