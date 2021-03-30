import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;