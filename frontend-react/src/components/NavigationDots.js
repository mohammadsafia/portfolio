import React from 'react';

const NavigationDots = ({active}) => {
    const navs = ['home', 'about', 'contact', 'work', 'testimonials', 'skills'];
    return (
        <div className="app__navigation">
            {navs.map((item, index) => (
                <a
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: '#313BAC'} : {}}
                    key={`item${index}`}
                    href={`#${item}`}
                />
            ))}
        </div>
    );
};

export default NavigationDots;