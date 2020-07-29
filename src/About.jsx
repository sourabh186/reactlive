import React from 'react';
import Common from './Common';
import { NavLink } from 'react-router-dom';
import web from '../src/images/s2.svg';

const About = () => {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
}

export default About;