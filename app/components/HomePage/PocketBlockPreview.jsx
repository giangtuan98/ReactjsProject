import React from 'react';

import BottomBannerImg from '../../assets/images/homepage/bottom-banner.jpg';
import AppStoreImg from '../../assets/images/homepage/app-store.png';
import PlayStoreImg from '../../assets/images/homepage/play-store.png';
import MobileImg from '../../assets/images/homepage/mobile.png';
function PocketBlockPreview() {
  return (
    <section className="pocket-block-preview">
      <div
        className="pocket-cover-banner"
        style={{ backgroundImage: `url(${BottomBannerImg})` }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="pocket-items">
              <div className="new-heading">
                <h1>Natto in Your Pocket</h1>
              </div>
              <div className="line">
                <img src="images/homepage/line.svg" alt="" />
              </div>
              <p>
                We’ll send you a link, open it on your phone to download the
                app.
              </p>
              <form className="search-form">
                <input
                  type="text"
                  className="send-link"
                  placeholder="Enter your email address"
                />
                <button type="submit" className="pocket-btn">
                  Send Link
                </button>
              </form>
              <div className="download-btns">
                <a href="#">
                  <img src={AppStoreImg} alt="" />
                </a>
                <a href="#">
                  <img src={PlayStoreImg} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="mobile-image">
              <img src={MobileImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PocketBlockPreview;
