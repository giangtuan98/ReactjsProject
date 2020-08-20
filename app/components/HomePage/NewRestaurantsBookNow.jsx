import React from 'react';
import RestoBook01Img from '../../assets/images/homepage/resto-book/img_1.jpg';
import RestoBook02Img from '../../assets/images/homepage/resto-book/img_2.jpg';
import RestoBook03Img from '../../assets/images/homepage/resto-book/img_3.jpg';
import RestoBook04Img from '../../assets/images/homepage/resto-book/img_4.jpg';
import RestoBook05Img from '../../assets/images/homepage/resto-book/img_5.jpg';

function NewRestaurantsBookNow() {
  return (
    <section className="new-restaurants-book-now">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="new-heading">
              <h1> Discover New Restaurants & Book Now </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="new-resto">
              <div className="large-12 columns">
                <div className="owl-carousel dis-owl owl-theme">
                  <div className="item">
                    <a href="#">
                      <img src={RestoBook01Img} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={RestoBook02Img} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={RestoBook03Img} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={RestoBook04Img} alt="" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={RestoBook05Img} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewRestaurantsBookNow;
