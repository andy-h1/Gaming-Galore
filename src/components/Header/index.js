import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div>
    <Link to="/">home</Link>
    <Link to="/game">games</Link>
    <Link to="/streamers">streamers</Link>
  </div>
);
