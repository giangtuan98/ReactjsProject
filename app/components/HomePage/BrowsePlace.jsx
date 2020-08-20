import React from 'react';
import BrowsePlace01Image from '../../images/homepage/browse_places/01.svg';
import BrowsePlace02Image from '../../images/homepage/browse_places/02.svg';
import BrowsePlace03Image from '../../images/homepage/browse_places/03.svg';
import BrowsePlace04Image from '../../images/homepage/browse_places/04.svg';
import BrowsePlace05Image from '../../images/homepage/browse_places/05.svg';

function BrowsePlace(props) {
  return (
    <section className="browse-places">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="browse-heading">
              <h6> Browse Places </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="owl-carousel browse-owl owl-theme">
              <div className="item">
                <div className="places">
                  <a href="places_nearby.html">
                    <div className="b-icon">
                      <img src={BrowsePlace01Image} alt="" />
                    </div>
                    <div className="b-text">Near by</div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="places">
                  <a href="places_cafes.html">
                    <div className="b-icon">
                      <img src={BrowsePlace02Image} alt="" />
                    </div>
                    <div className="b-text">Cafes & More</div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="places">
                  <a href="places_cafes.html">
                    <div className="b-icon">
                      <img src={BrowsePlace03Image} alt="" />
                    </div>
                    <div className="b-text">Drinks & Nightkise</div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="places">
                  <a href="places_cafes.html">
                    <div className="b-icon">
                      <img src={BrowsePlace04Image} alt="" />
                    </div>
                    <div className="b-text">Desserts & Bakes</div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="places">
                  <a href="upcoming_events.html">
                    <div className="b-icon">
                      <img src={BrowsePlace05Image} alt="" />
                    </div>
                    <div className="b-text">Upcoming Events</div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="places">
                  <a href="places_cafes.html">
                    <div className="b-icon">
                      <img src="images/homepage/browse_places/06.svg" alt="" />
                    </div>
                    <div className="b-text">Newly Opened</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowsePlace;
