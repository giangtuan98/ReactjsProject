import React from 'react';
import HowToWork01Img from '../../assets/images/homepage/how-to-work/img_1.svg';
import HowToWork02Img from '../../assets/images/homepage/how-to-work/img_2.svg';
import HowToWork03Img from '../../assets/images/homepage/how-to-work/img_3.svg';

function HowToWork() {
  return (
    <section className="how-to-work">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="work-item">
              <div className="work-img">
                <img src={HowToWork01Img} alt="" />
              </div>
              <div className="work-text">
                <h4>Choose Your Area Restaurant</h4>
                <p>
                  Donec et tellus sed lorem condimentum maximus. Sed tempor, leo
                  tempus condimentum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="work-item">
              <div className="work-img">
                <img src={HowToWork02Img} alt="" />
              </div>
              <div className="work-text">
                <h4>Choose Food</h4>
                <p>
                  Donec et tellus sed lorem condimentum maximus. Sed tempor, leo
                  tempus condimentum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="work-item">
              <div className="work-img">
                <img src={HowToWork03Img} alt="" />
              </div>
              <div className="work-text">
                <h4>Delivery</h4>
                <p>
                  Donec et tellus sed lorem condimentum maximus. Sed tempor, leo
                  tempus condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToWork;
