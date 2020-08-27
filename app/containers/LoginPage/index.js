/* eslint-disable react/button-has-type */
/**
 *
 * LoginPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Redirect } from 'react-router-dom';
import { checkLoginAction } from './actions';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import TitleBar from '../../components/Shared/TitleBar';

// console.log(LoginActions);
export function LoginPage({ checkLogin, loginPage }) {
  const [auth, setAuth] = useState({ email: '', password: '' });
  const [errors, setError] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    checkLogin(auth);
  };

  const handleInput = e => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    setAuth({
      ...auth,
      [targetName]: e.target.value,
    });
    console.log(targetName);
    if (
      targetName === 'email' &&
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(targetValue)
    ) {
      // console.log(targetName);
      setError({
        ...errors,
        [targetName]: `Email khong dung dinh dang`,
      });
      return;
    }

    if (!e.target.value) {
      setError({
        ...errors,
        [targetName]: `Nhập hộ cái ${targetName}`,
      });
    } else {
      setError({
        ...errors,
        [targetName]: '',
      });
    }
  };

  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div>
      {loginPage.isAuthenticate && <Redirect to="/" />}
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <TitleBar />
      <section className="login_register">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h1>Login Now</h1>
              <div className="login-container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <form onSubmit={handleSubmit}>
                      <div className="login-form">
                        <div className="login-logo">
                          <a href="index.html">
                            <img src="images/login-register/logo.svg" alt="" />
                          </a>
                        </div>
                        <div className="social-btns">
                          <button className="facebook-btn">
                            <i className="fab fa-facebook-f" />
                            Continue with facebook
                          </button>
                          <button className="google-btn">
                            <i className="fab fa-google" />
                            Continue with Google
                          </button>
                        </div>
                        <div className="or">
                          <p> Or </p>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="video-form"
                            id="email"
                            name="email"
                            onChange={handleInput}
                            placeholder="Type Email"
                            autoComplete="off"
                          />
                          {errors.email && (
                            <p
                              style={{
                                color: 'red',
                                textAlign: 'left',
                                fontSize: '12px',
                              }}
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="video-form"
                            id="password"
                            name="password"
                            onChange={handleInput}
                            placeholder="Password"
                            autoComplete="off"
                          />
                          {errors.password && (
                            <p
                              style={{
                                color: 'red',
                                textAlign: 'left',
                                fontSize: '12px',
                              }}
                            >
                              {errors.password}
                            </p>
                          )}
                        </div>
                        <button type="submit" className="login-btn btn-link">
                          Login Now
                        </button>
                        <div className="forgot-password">
                          <a href="#">Forgot Password?</a>
                          <p>
                            Don’t have an account?{' '}
                            <a href="signup.html">
                              <span style={{ color: '#ffa803' }}>
                                - Register Now
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkLogin: auth => dispatch(checkLoginAction(auth)),
  };
}

// const mapDispatchToProps = dispatch => ({
//   fetchUser: () =>
//     dispatch({
//       type: 'USER_FETCH_REQUESTED',
//     }),
// });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
