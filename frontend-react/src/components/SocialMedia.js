import React from 'react';
import {BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://wa.me/+962780812426?lang=en" target="_blank">
                <BsWhatsapp/>
            </a>
            <a href="https://www.facebook.com/mohamad.safia.3/" target="_blank">
                <FaFacebookF/>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-safia/" target="_blank">
                <BsLinkedin/>
            </a>
        </div>
    );
};

export default SocialMedia;