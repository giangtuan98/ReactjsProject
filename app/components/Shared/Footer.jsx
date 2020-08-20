/* eslint-disable react/button-has-type */
import React from 'react';
import CardsImage from '../../images/cards.png';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="subscribe-now line">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-6">
              <div className="subscribe-newsletter">
                <div className="sub-text">
                  <p>Connect with us for update and offers.</p>
                </div>
                <form>
                  <input
                    className="input-subscribe"
                    name="newsletter"
                    type="text"
                    placeholder="Enter your email address"
                  />
                  <div className="subscribe-btn">
                    <div className="s-n-btn">
                      <button className="newsletter-btn btn-link">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="language">
                <form
                  method="post"
                  encType="multipart/form-data"
                  id="form-language"
                >
                  <div className="btn-group open">
                    <button
                      className="lang-btn l-btn-link dropdown-toggle-no-caret"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fas fa-globe" />
                      <span className="hidden-xs">English</span>
                      <i className="fas fa-caret-down" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="javascript:;">English</a>
                      </li>
                      <li>
                        <a href="javascript:;">Spanish</a>
                      </li>
                      <li>
                        <a href="javascript:;">Hindi</a>
                      </li>
                      <li>
                        <a href="javascript:;">Punjabi</a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <div className="img-title">
              <a href="index.html">
                <img src="images/logo-2.svg" alt="" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum leo at finibus ornare. Aliquam gravida condimentum neque,
              vel ultrices purus dignissim a.{' '}
            </p>
          </div>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="link-title">
              <h4>About Natto</h4>
              <ul className="links">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="our_blog.html">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Mobile Apps</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <div className="link-title">
              <h4>Business</h4>
              <ul className="links">
                <li>
                  <a href="add_restaurant.html">Add a Restaurant</a>
                </li>
                <li>
                  <a href="#">Buniess Order Guidelines</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Book</a>
                </li>
                <li>
                  <a href="#">Trace</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <div className="link-title">
              <h4>Partner With Us</h4>
              <ul className="links">
                <li>
                  <a href="add_restaurant.html">For Restaurants</a>
                </li>
                <li>
                  <a href="add_driver.html">For Driver</a>
                </li>
              </ul>
              <div className="social-btns">
                <a href="#">
                  <div className="social-btn soc-btn">
                    <i className="fab fa-facebook-f" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-btn soc-btn">
                    <i className="fab fa-twitter" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-btn soc-btn">
                    <i className="fab fa-instagram" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-btn soc-btn">
                    <i className="fab fa-linkedin-in" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-btn soc-btn">
                    <i className="fab fa-youtube" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="privacy-terms">
                <ul>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="cards">
                <img src={CardsImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="copyright-text">
                <i className="far fa-copyright" />
                Copyright 2019 <a href="index.html">Natto</a> by Gambol. All
                Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
