import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import DishDetailPage from "../Pages/DishDetailPage";

import Navbar from "../Components/Navbar";
import foodImg from "../images/foodImg.png";
import burgerImg from "../images/BurgerImg.jpg";
import MacroonImg from "../images/MacroonImg.jpg"
import ShakeImg from "../images/ShakeImg.jpg";
import PizzaImg from "../images/PizzaSalamiImg.jpg"
import DumplingImg from "../images/DumplingImg.jpg";
import ShrimpNoddlesImg from "../images/ShrimpNoddlesImg.jpg";
import CrispyChickenImg from "../images/CrispyChickenImg.jpg";
import FriedBall from "../images/FriedBallImg.jpg";
import { FaHeart } from "react-icons/fa";


function HomePage() {
  return (
    <>
      <Navbar />
      <div className="heroSection">
        <div className="heroDetail">
          <div className="leftDetail">
            <h4># Rank 1 in India</h4>
            <h1>
              Welcome to the Food best website for Recipes of Unique Food and
              Dishes
            </h1>
            <p className="DetailPara">
              Explore your Favourite Recipe and Save it for your future
            </p>
            <button>Explore Recipes</button>
          </div>
          <div className="rightDetail">
            <img src={foodImg} />
          </div>
        </div>
      </div>

      <div className="recipeSection">
        <div className="recipeContainer">
          <div className="RecipeHeading">
          <h2>Trending Recipes</h2>
          <p className="ExtraContent">View More</p>
          </div>
          <div className="foodFilter">
            <select>
              <option>Select Categories</option>
              <option>Asian</option>
              <option>Mediterrean</option>
              <option>South American</option>
            </select>
          </div>
          <div className="recipeCards">
            <div className="RecipeCard">
              <img src={ShakeImg} />
              
                <h2 className="recipeHeading">
                 Hot Chocolate Shake <FaHeart className="favIcon" />
              </h2>
             
             

              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <Link to ="/DishDetailPage">
              <button className="primaryButton">Explore Recipe</button>
              </Link>
            </div>
            <div className="RecipeCard">
              <img src={burgerImg} />
              <h2 className="recipeHeading">
              Cheesy Burger <FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <Link to ="/DishDetailPage">
              <button className="primaryButton">Explore Recipe</button>
              </Link>
            </div>

            <div className="RecipeCard">
              <img src={MacroonImg} />

              <h2 className="recipeHeading">
              Pink Maccroon <FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <button className="primaryButton">Explore Recipe</button>
            </div>
            <div className="RecipeCard">
              <img src={PizzaImg} />
              <h2 className="recipeHeading">
               Pizza Salami<FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <Link to ="/DishDetailPage">
              <button className="primaryButton">Explore Recipe</button>
              </Link>
            </div>
            <div className="RecipeCard">
              <img src={DumplingImg} />
              <h2 className="recipeHeading">
                Sizzling Dumplings <FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <Link to ="/DishDetailPage">
              <button className="primaryButton">Explore Recipe</button>
              </Link>
            </div>
            <div className="RecipeCard">
              <img src={CrispyChickenImg} />
              <h2 className="recipeHeading">
               Crispy Chicken <FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <button className="primaryButton">Explore Recipe</button>
            </div>
            <div className="RecipeCard">
              <img src={ShrimpNoddlesImg} />
              <h2 className="recipeHeading">
                Shrimp Noodles <FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <Link to ="/DishDetailPage">
              <button className="primaryButton">Explore Recipe</button>
              </Link>
            </div>
            <div className="RecipeCard">
              <img src={FriedBall} />
              <h2 className="recipeHeading">
                Vegan Fried Ball <FaHeart className="favIcon" />
              </h2>
              <p className="foodDetail">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, quasi aspernatur odio magni ea maxime fuga quisquam
                deserunt quidem sint repudiandae delectus culpa odit sapiente
                iusto consequatur a, repellat officia....
              </p>
              <Link to ="/DishDetailPage">
              <button className="primaryButton">Explore Recipe</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default HomePage;
