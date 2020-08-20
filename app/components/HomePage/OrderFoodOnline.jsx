/* eslint-disable react/button-has-type */
import React from 'react';
import ListMealItem from './ListMealItem';

function OrderFoodOnline(props) {
  return (
    <section className="order-food-online">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="new-heading">
              <h1> Order Food Online In Your Area </h1>
            </div>
            <div className="your-location">
              <span>
                <i className="fas fa-map-marker-alt" />
                New York
              </span>
              Change Location
            </div>
            <div className="all-items">
              <div className="search col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <form>
                  <input
                    className="search-location"
                    name="search"
                    type="search"
                    placeholder="Enter Your Location"
                  />
                  <div className="icon-btn">
                    <div className="cross-icon">
                      <i className="fas fa-crosshairs" />
                    </div>
                    <div className="s-m-btn">
                      <button className="search-meal-btn btn-link">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ListMealItem />
        <div className="meal-btn">
          <a href="#" className="m-btn btn-link">
            Show All
          </a>
        </div>
      </div>
    </section>
  );
}

export default OrderFoodOnline;
