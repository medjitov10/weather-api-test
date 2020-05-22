import React, { Component } from 'react';
import { Switch, Route, browserHistory } from 'react-router-dom';
import App from './App';
import FiveDayTemp from './FiveDayTemp';

export const Routes = () => (
  <main>
    <Switch>
     <Route exact path='/' component={App} />
     <Route exact path='/5day' component={FiveDayTemp} />
    </Switch>
  </main>
)
