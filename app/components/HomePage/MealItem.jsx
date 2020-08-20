import React from 'react';

import { Link } from 'react-router-dom';
import MealImg from '../../assets/images/homepage/meals/img-1.jpg';

function MealItem(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <div className="all-meal">
        <div className="top">
          <Link to="/products/detail">
            <div className="bg-gradient" />
          </Link>
          <div className="top-img">
            <img src={MealImg} alt="" />
          </div>
          <div className="logo-img">
            <img src="images/homepage/meals/logo-1.jpg" alt="" />
          </div>
          <div className="top-text">
            <div className="heading">
              <h4>
                <a href="meal_detail.html">Bonn Burgur</a>
              </h4>
            </div>
            <div className="sub-heading">
              <h5>
                <a href="restaurant_detail.html">Rooster</a>
              </h5>
              <p>$5.00</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-text">
            <div className="delivery">
              <i className="fas fa-shopping-cart" />
              Delivery Free : Free
            </div>
            <div className="time">
              <i className="far fa-clock" />
              Delivery Time : 30 Min
            </div>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <span>4.5</span>
              <div className="comments">
                <a href="#">
                  <i className="fas fa-comment-alt" />
                  05
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
