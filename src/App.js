import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import Deals from './components/Deals/Deals';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { NavBar } from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
export const ProductsContext = createContext();

const App = () => {
  const [loggedUser, setLoggedUser] = useState({})

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
        <BrowserRouter>
          <NavBar />
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
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/deals">
              <Deals />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;