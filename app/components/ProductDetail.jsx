/* eslint-disable react/button-has-type */
import React from 'react';

function ProductDetail() {
  return (
    <section className="all-partners">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div id="sync1" className="owl-carousel owl-theme">
              <div className="item">
                <img src="images/meal-detail/img-1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="right-side">
              <div className="new-heading t-bottom">
                <h1>Toasty Buns Burgers</h1>
              </div>
              <div className="about-meal">
                <h4> Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  malesuada libero ex, scelerisque suscipit orci tincidunt non.
                  Nulla magna urna, accumsan ac turpis eget, tempor scelerisque
                  sapien. Vivamus porttitor a enim id mattis. Duis volutpat
                  felis sed massa dignissim luctus. Pellentesque a elit quis
                  lacus finibus pellentesque.
                </p>
                <button>See All</button>
              </div>
              <div className="price">
                <span>$11.00</span>
              </div>
              <div className="dt-detail">
                <ul>
                  <li>
                    <div className="delivery">
                      <i className="fas fa-shopping-cart" />
                      Delivery Free : Free
                    </div>
                  </li>
                  <li>
                    <div className="time">
                      <i className="far fa-clock" />
                      Delivery Time : 30 Min
                    </div>
                  </li>
                </ul>
              </div>
              <div className="Extra-option">
                <h4>
                  {' '}
                  Extras - <ins>(Please select any option)</ins>
                </h4>
                <div className="non-veg">
                  <h6>Non Vegetarian</h6>
                  <ul className="food-bootom">
                    <li>
                      <p className="food-left">
                        <input type="checkbox" id="c1" name="cb" />
                        <label htmlFor="c1">Non Veg Tikki</label>
                      </p>
                      <span>$2.00</span>
                    </li>
                  </ul>
                </div>
                <div className="non-veg j-top">
                  <h6>Vegetarian</h6>
                  <ul className="food-bootom">
                    <li>
                      <p className="food-left">
                        <input type="checkbox" id="c2" name="cb" />
                        <label htmlFor="c2">Double Allu Tikki</label>
                      </p>
                      <span>$2.00</span>
                    </li>
                    <li>
                      <p className="food-left">
                        <input type="checkbox" id="c3" name="cb" />
                        <label htmlFor="c3">Double Cheese</label>
                      </p>
                      <span>$2.00</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Qty">
                <h4> Qty</h4>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button className="minus-btn btn-sm" id="minus-btn">
                      <i className="fas fa-minus-square" />
                    </button>
                  </div>
                  <input
                    type="number"
                    id="qty_input"
                    className="qty-control"
                    value="1"
                    min="1"
                  />
                  <div className="input-group-prepend">
                    <button className="add-btn btn-sm" id="plus-btn">
                      <i className="fas fa-plus-square" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="total-cost">
                <div className="total-text">
                  <h5>Total</h5>
                </div>
                <div className="total-price">
                  <p>$17.00</p>
                </div>
              </div>
              <div className="order-now-check">
                <button className="on-btn btn-link" onClick="">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
