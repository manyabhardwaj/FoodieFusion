import React from "react";
import foodImg from "../images/foodImg.png";
import burgerImg from "../images/BurgerImg.jpg";
import MacroonImg from "../images/MacroonImg.jpg"
import ShakeImg from "../images/ShakeImg.jpg";
import PizzaImg from "../images/PizzaSalamiImg.jpg"
import DumplingImg from "../images/DumplingImg.jpg";
import ShrimpNoddlesImg from "../images/ShrimpNoddlesImg.jpg";
import CrispyChickenImg from "../images/CrispyChickenImg.jpg";
import FriedBall from "../images/FriedBallImg.jpg";

function DishDetailPage() {
  return (
    <>
      <div className="mainContainer">
      <h1>Recipe of the Dish</h1>
        <div className="recipeTipsContent">
           
       
          <img src={burgerImg} width={360} height={200} alt="burgerImg"/>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            consequuntur odio mollitia placeat alias doloribus, sed, porro
            obcaecati soluta, nulla accusamus tempore itaque! Enim neque, minima
            officia et porro magni, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            consequuntur odio mollitia placeat alias doloribus, sed, porro
            obcaecati soluta, nulla accusamus tempore itaque! Enim neque, minima
            officia et porro magni.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            consequuntur odio mollitia placeat alias doloribus, sed, porro
            obcaecati soluta, nulla accusamus tempore itaque! Enim neque, minima
            officia et porro magni.
          </p>
        
        </div>
        <h2>Ingredients</h2>
      </div>
    </>
  );
}

export default DishDetailPage;
