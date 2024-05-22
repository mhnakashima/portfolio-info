import React from "react";
import { Trans, useTranslation } from "react-i18next";

const PersonalDetails = () => {
    const { t } = useTranslation();
    const languageItems = t('personal-details.value-languages', { returnObjects: true });

    return (
        <div data-testid="personalDetails" className='section mb-4'>
            <h3 className='text-lg font-bold'>{t('personal-details.lbl-title')}</h3>

            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>{t('personal-details.lbl-work-exp')}</span>
                    <span className='text-lg font-light'>{t('personal-details.value-work-exp')}</span>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>{t('personal-details.lbl-education')}</span>
                    <span className='text-lg font-light'>{t('personal-details.value-education')}</span>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>{t('personal-details.lbl-current-occupation')}</span>
                    <span className='text-lg font-light'>{t('personal-details.value-current-occupation')}</span>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>{t('personal-details.lbl-languages')}</span>
                    <div className='text-lg font-light'>
                        <ul className="list-none">
                            {languageItems.map((item, index) => (
                                <li key={index}>
                                    <Trans>{item}</Trans>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center mb-4'>
                    <span className='text-sm font-light'>{t('personal-details.lbl-date-birth')}</span>
                    <span className='text-lg font-light'>{t('personal-details.value-date-birth')}</span>
                </div>
            </div>
        </div>
    )
};

export default PersonalDetails;