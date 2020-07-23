import React from 'react';
import { NavLink } from 'react-router-dom';

export const SignedOutLinks = () => (
    <ul>
        <li><NavLink to='/'>login</NavLink></li>
        <li><NavLink to='/'>sign up</NavLink></li>
    </ul>
)