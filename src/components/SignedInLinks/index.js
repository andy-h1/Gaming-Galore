import React from 'react';
import {NavLink} from 'react-router-dom';

export const SignedInLinks = () => (
    <ul>
        <li><NavLink to='/games'>games</NavLink></li>
        <li><NavLink to='/streamers'>streamers</NavLink></li>
        <li><NavLink to='/'>log out</NavLink></li>
    </ul>
)