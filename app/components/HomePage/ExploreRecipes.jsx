import React from 'react';
import Recipe01Img from '../../assets/images/homepage/recipes/recipe_01.jpg';
import Recipe02Img from '../../assets/images/homepage/recipes/recipe_02.jpg';
import Recipe03Img from '../../assets/images/homepage/recipes/recipe_03.jpg';
import Recipe04Img from '../../assets/images/homepage/recipes/recipe_04.jpg';
import Recipe05Img from '../../assets/images/homepage/recipes/recipe_05.jpg';
import Recipe06Img from '../../assets/images/homepage/recipes/recipe_06.jpg';

function ExploreRecipes() {
  return (
    <section className="explore-recipes">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="new-heading">
              <h1> Explore Your Favorite Recipes </h1>
            </div>
          </div>
        </div>
        <div className="b-recipes">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <a href="#">
                <div className="recipe-item">
                  <img src={Recipe01Img} alt="" />
                  <div className="overlay">
                    <div className="recipes-title">
                      <h6>North Indian</h6>
                      <p>75 Videos</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="#">
                <div className="recipe-item">
                  <img src={Recipe02Img} alt="" />
                  <div className="overlay">
                    <div className="recipes-title">
                      <h6>Fast Food</h6>
                      <p>105 Videos</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="#">
                <div className="recipe-item">
                  <img src={Recipe03Img} alt="" />
                  <div className="overlay">
                    <div className="recipes-title">
                      <h6>Italian Food</h6>
                      <p>35 Videos</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="#">
                <div className="recipe-item">
                  <img src={Recipe04Img} alt="" />
                  <div className="overlay">
                    <div className="recipes-title">
                      <h6>Chinese Food</h6>
                      <p>60 Videos</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="#">
                <div className="recipe-item">
                  <img src={Recipe05Img} alt="" />
                  <div className="overlay">
                    <div className="recipes-title">
                      <h6>Street Food</h6>
                      <p>45 Videos</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <a href="#">
                <div className="recipe-item">
                  <img src={Recipe06Img} alt="" />
                  <div className="overlay">
                    <div className="recipes-title">
                      <h6>Bakery</h6>
                      <p>20 Videos</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="meal-btn">
          <a href="#" className="m-btn btn-link">
            Show All
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExploreRecipes;
