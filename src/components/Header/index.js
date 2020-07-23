import React from 'react';
import { NavLink } from 'react-router-dom';
import { SignedInLinks } from '../SignedInLinks';
import { SignedOutLinks } from '../SignedOutLinks';
import * as S from './styles';

export const Header = () => (
  <S.Header>
    <NavLink to="/">Gaming Galore</NavLink>
    <SignedInLinks />
    <SignedOutLinks />
  </S.Header>
);
