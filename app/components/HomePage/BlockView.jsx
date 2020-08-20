import React from 'react';
import BannerImage from '../../images/banner.jpg';

function BlockView(props) {
  return (
    <section className="block-preview">
      <div
        className="cover-banner"
        style={{ backgroundImage: `url(${BannerImage})` }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="left-text-b">
              <h1 className="title">Choose, Order and Checkout</h1>
              <h6 className="exeption">
                Specify your address to suggest you the fast delivery
              </h6>
              <p>Get our services from 24 hours.</p>
              <a className="bnr-btn btn-link" href="#">
                Go To Meal
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <form>
              <div className="form-box">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                </div>
                <input
                  className="find-address skills"
                  name="search"
                  type="text"
                  placeholder="Choose your location"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text-1">
                    <i className="fas fa-utensils" />
                  </div>
                </div>
                <input
                  className="find-resto skills"
                  name="search"
                  type="text"
                  placeholder="Choose restaurant"
                />
                <button className="search-btn btn-link" type="button">
                  Find Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockView;
