/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ProductDetail from 'containers/ProductDetail/Loadable';

import Header from '../../components/Shared/Header';
import GlobalStyle from '../../global-styles';
import Footer from '../../components/Shared/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/products/detail" component={ProductDetail} />
      </Switch>
      <GlobalStyle />
      <Footer />
    </div>
  );
}
