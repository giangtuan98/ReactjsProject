import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

// import " assets/css/mega.menu.css";
function Header() {
  return (
    <header id="header" className="default">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="topbar-left text-center text-md-left">
                <ul className="list-inline">
                  <li>
                    {' '}
                    <a href="contact.html"> Contact </a>
                  </li>
                  <li>
                    {' '}
                    <a href="about.html"> About Us </a>
                  </li>
                  <li>
                    {' '}
                    <a href="our_blog.html"> Blog </a>
                  </li>
                  <li>
                    {' '}
                    <a href="partner_with_us.html"> Become a Partner </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="topbar-right text-center text-md-right">
                <ul className="list-inline">
                  <li>
                    <a href="#">
                      <i className="far fa-calendar-alt" />
                      Table Bookings
                    </a>{' '}
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-bookmark" />
                      Bookmarks <span className="badge badge-secondary">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" />
                      Food Orders{' '}
                      <span className="badge badge-secondary">3</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="dropdown-toggle-no-caret"
                      id="accountDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="/login"
                    >
                      <i className="fas fa-user-circle" />
                      Login <i className="fas fa-caret-down" />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="accountDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href="my_profile_dashbord.html"
                      >
                        {' '}
                        My Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        {' '}
                        Bookmarks
                      </a>
                      <a className="dropdown-item" href="#">
                        {' '}
                        Booking Tables
                      </a>
                      <a className="dropdown-item" href="#">
                        {' '}
                        Find Friends
                      </a>
                      <a className="dropdown-item" href="setting.html">
                        {' '}
                        Setting
                      </a>
                      <a className="dropdown-item" href="signin.html">
                        {' '}
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
