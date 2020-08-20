import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-12 col-xs-12">
            <div className="menu-left text-center text-md-left">
              <div className="logo-box">
                <a href="index.html">
                  <img src="images/logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-sm-12 col-xs-12">
            <div className="menu-items">
              <nav className="navbar navbar-expand-lg navbar-light bg-light menu-right">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto nav-text">
                    <li className="nav-item active">
                      <Link to="/" className="nav-link" href="index.html">
                        Home{' '}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="how_to_orders.html">
                        How To Orders?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="recipes.html">
                        Recipes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="partners.html">
                        Partners
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle-no-caret"
                        href="#"
                        id="megaDropdown1"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {' '}
                        Pages <i className="fas fa-caret-down" />
                      </a>
                      <div className="dropdown-menu mega-menu dropdown-menu-right">
                        <div className="row">
                          <div className="col-md-3">
                            <a className="dropdown-item" href="about.html">
                              {' '}
                              About us
                            </a>
                            <a
                              className="dropdown-item"
                              href="recipe_details.html"
                            >
                              {' '}
                              Recipes Detail View
                            </a>
                            <a
                              className="dropdown-item"
                              href="upload_recipe.html"
                            >
                              {' '}
                              Upload Recipe
                            </a>
                            <a className="dropdown-item" href="partners.html">
                              {' '}
                              Partners
                            </a>
                            <a
                              className="dropdown-item"
                              href="restaurant_detail.html"
                            >
                              {' '}
                              Restaurant Detail View
                            </a>
                            <a
                              className="dropdown-item"
                              href="partner_with_us.html"
                            >
                              {' '}
                              Become a Partner
                            </a>
                            <a
                              className="dropdown-item"
                              href="add_restaurant.html"
                            >
                              {' '}
                              Add Restaurant
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a className="dropdown-item" href="add_driver.html">
                              {' '}
                              Add Driver
                            </a>
                            <a className="dropdown-item" href="meals.html">
                              {' '}
                              Meals
                            </a>
                            <a
                              className="dropdown-item"
                              href="meal_detail.html"
                            >
                              {' '}
                              Meal Detail View
                            </a>
                            <a className="dropdown-item" href="checkout.html">
                              {' '}
                              Checkout
                            </a>
                            <a className="dropdown-item" href="bill_slip.html">
                              {' '}
                              Bill Slip
                            </a>
                            <a
                              className="dropdown-item"
                              href="browse_places.html"
                            >
                              {' '}
                              Browse Places
                            </a>
                            <a
                              className="dropdown-item"
                              href="places_nearby.html"
                            >
                              {' '}
                              Near Places
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a
                              className="dropdown-item"
                              href="places_cafes.html"
                            >
                              {' '}
                              Cafes & More
                            </a>
                            <a
                              className="dropdown-item"
                              href="upcoming_events.html"
                            >
                              {' '}
                              Upcoming Events
                            </a>
                            <a
                              className="dropdown-item"
                              href="event_detail.html"
                            >
                              {' '}
                              Event Detail View
                            </a>
                            <a
                              className="dropdown-item"
                              href="user_profile_view.html"
                            >
                              {' '}
                              User Profile View
                            </a>
                            <a
                              className="dropdown-item"
                              href="my_profile_dashbord.html"
                            >
                              {' '}
                              My Order Dashboard
                            </a>
                            <a
                              className="dropdown-item"
                              href="restaurant_partner_dashbord.html"
                            >
                              {' '}
                              Restaurant Partner Dashboard
                            </a>
                            <a
                              className="dropdown-item"
                              href="driver_partner_dashbord.html"
                            >
                              {' '}
                              Driver Partner Dashboard
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a className="dropdown-item" href="setting.html">
                              {' '}
                              My Setting
                            </a>
                            <a className="dropdown-item" href="error_404.html">
                              {' '}
                              Error 404
                            </a>
                            <a className="dropdown-item" href="signin.html">
                              {' '}
                              Login Now
                            </a>
                            <a className="dropdown-item" href="faq.html">
                              {' '}
                              FAQ
                            </a>
                            <a className="dropdown-item" href="our_blog.html">
                              {' '}
                              Our Blog
                            </a>
                            <a
                              className="dropdown-item"
                              href="blog_detail.html"
                            >
                              {' '}
                              Single Blog Detail View
                            </a>
                            <a className="dropdown-item" href="contact.html">
                              {' '}
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="browse_places.html">
                        Browse Places
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="icons-set">
                <ul className="list-inline">
                  <li className="icon-items nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle-no-caret"
                      href="#"
                      id="navbarDropdown1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown1"
                    >
                      <div className="notification-item">
                        <div className="search-details">
                          <form className="form-inline">
                            <input
                              className="form-control "
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />
                            <button className="s-btn btn-link " type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="icon-items nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle-no-caret"
                      href="#"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown2"
                    >
                      <div className="notification-item">
                        <div className="property">
                          <ul>
                            <li>
                              <div className="setting">
                                <a href="#">Setting</a>
                              </div>
                            </li>
                            <li>
                              <div className="clear">
                                <a href="#">Clear</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="notification-details">
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img
                                  src="images/notification-img-2.png"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">Jassica William</h4>
                              <p>comment on your Video.</p>
                              <div className="comment-date">10 min ago</div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img
                                  src="images/notification-img-3.png"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                Congratulations!
                              </h4>
                              <p>Your Order is Accepted.</p>
                              <div className="comment-date">15 min ago</div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img
                                  src="images/notification-img-4.png"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="media-body">
                              <h4 className="media-heading">
                                Order Delivered!
                              </h4>
                              <p>Your Order is Delivered.</p>
                              <div className="comment-date">20 min ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </li>
                  <li className="partner-btn">
                    <a href="partner_with_us.html" className="b-btn btn-link">
                      Become a Partner
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
