/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import BlockView from '../../components/HomePage/BlockView';
import BrowsePlace from '../../components/HomePage/BrowsePlace';
import HowToWork from '../../components/HomePage/HowToWork';
import NewRestaurantsBookNow from '../../components/HomePage/NewRestaurantsBookNow';
import OrderFoodOnline from '../../components/HomePage/OrderFoodOnline';
import ExploreRecipes from '../../components/HomePage/ExploreRecipes';
import PocketBlockPreview from '../../components/HomePage/PocketBlockPreview';
import makeSelectLoginPage from '../LoginPage/selectors';

function HomePage({ loginPage }) {
  const { isAuthenticate } = loginPage;
  return !isAuthenticate ? (
    <Redirect to="/login" />
  ) : (
    <>
      <BlockView />
      {/* <BrowsePlace /> */}
      <HowToWork />
      {/* <NewRestaurantsBookNow /> */}
      <OrderFoodOnline />
      <ExploreRecipes />
      <PocketBlockPreview />
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(HomePage);
