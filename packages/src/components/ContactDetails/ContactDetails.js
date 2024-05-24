import React from "react";
import { Badge } from "../Badge/Badge";
import { mdiEmail, mdiGithub, mdiLinkedin, mdiWebBox } from "@mdi/js";
import { useTranslation } from "react-i18next";

const ContactDetails = () => {
    const { t } = useTranslation();

    return (
        <div className='section mb-4' data-testid="contactDetails">
            <h3 className='text-lg font-bold'>{t('contact-details.lbl-title')}</h3>

            <div className='mt-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'>
                <Badge icon={mdiEmail} label={`Email`} text={`mhnakashima@gmail.com`} />
                <Badge icon={mdiWebBox} label={`Website`} text={<a href='http://mhnakashima.com' target='_blank'>http://mhnakashima.com</a>} />
                <Badge icon={mdiLinkedin} label={`Linkedin`} text={<a href='https://www.linkedin.com/in/mhnakashima/' target='_blank'>mhnakashima</a>} />
                <Badge icon={mdiGithub} label={`Github`} text={<a href='https://github.com/mhnakashima' target='_blank'>/Github</a>} />
            </div>
        </div>
    );
}

export default ContactDetails;