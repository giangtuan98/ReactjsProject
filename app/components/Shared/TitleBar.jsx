import React from 'react';

function TitleBar() {
  return (
    <section className="title-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-title-text">
              <h3>Login Now</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-title-text">
              <ul>
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Login Now
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitleBar;
