import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { HomePage } from '../HomePage';
import { GamePage } from '../GamePage';
import { StreamerPage } from '../StreamerPage';
import * as S from './styles';

const App = () => (
  <S.Wrapper>
    <BrowserRouter>
      <S.GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/games" component={GamePage} />
        <Route path="/streamers" component={StreamerPage} />
      </Switch>
    </BrowserRouter>
  </S.Wrapper>
);

export default App;

// Home Page
// Streamer Page
// Gaming Page
// Adding Firebase
//
