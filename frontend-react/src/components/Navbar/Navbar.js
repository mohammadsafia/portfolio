import './Navbar.scss';

import React, {useState} from 'react';
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";
import {images} from "../../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const navs = ['home', 'about', 'contact', 'work', 'testimonials', 'skills'];

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo"/>
            </div>
            <ul className="app__navbar-links">
                {navs.map((item) => (
                    <li className="app__flex p-text" key={`lint-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {navs.map((item) => (
                                <li onClick={() => setToggle(false)} key={item}>
                                    <a href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;