import './App.scss';

import React from 'react';
import {Work, About, Header, Skills, Footer, Testimonials} from './container'
import {Navbar} from "./components";

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default App;