import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Header = () => (
  <S.Header>
    <Link to="/">home</Link>
    <Link to="/game">games</Link>
    <Link to="/streamers">streamers</Link>
  </S.Header>
);
