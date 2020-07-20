import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { HomePage } from '../HomePage';
import { GamePage } from '../GamePage';
import { StreamerPage } from '../StreamerPage';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/game" component={GamePage} />
      <Route path="/streamers" component={StreamerPage} />
    </Switch>
  </BrowserRouter>
);

export default App;

// Home Page
// Streamer Page
// Gaming Page
// Adding Firebase
//
