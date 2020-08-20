/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import BlockView from '../../components/HomePage/BlockView';
import BrowsePlace from '../../components/HomePage/BrowsePlace';
import HowToWork from '../../components/HomePage/HowToWork';
import NewRestaurantsBookNow from '../../components/HomePage/NewRestaurantsBookNow';
import OrderFoodOnline from '../../components/HomePage/OrderFoodOnline';
import ExploreRecipes from '../../components/HomePage/ExploreRecipes';
import PocketBlockPreview from '../../components/HomePage/PocketBlockPreview';

export default function HomePage() {
  return (
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
