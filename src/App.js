import React, { useState } from 'react';
import './App.css';
import Player from './components/Player/Player.js';
import Food from './components/Food/Food.js';
import './gameLogic/controls.js';
import constants from './gameLogic/constants';

function App() {
  const [foodsCollected, setFoodsCollected] = useState(0);
  let foods = [];

  for (let i = 0; i < constants.AMOUNT_OF_FOOD; i++) {
    foods.push(<Food id={"food-" + i} key={i} />);
  }

  let checkIfEaten = setInterval(() => {
    let player = document.getElementById("playerHead");
    let renderedFoods = document.getElementsByClassName("food");
    let playerPosition = {
      bottom: getComputedStyle(player).bottom,
      left: getComputedStyle(player).left
    };
    let foodPosition;
    for (let i = 0; i < renderedFoods.length; i++) {
      foodPosition = {
        bottom: getComputedStyle(renderedFoods[i]).bottom,
        left: getComputedStyle(renderedFoods[i]).left
      };
      if (Number.parseFloat(playerPosition.bottom) > Number.parseFloat(foodPosition.bottom) - Number.parseFloat(constants.FOOD_SIZE) && 
        Number.parseFloat(playerPosition.bottom) < Number.parseFloat(foodPosition.bottom) + Number.parseFloat(constants.FOOD_SIZE) && 
        Number.parseFloat(playerPosition.left) > Number.parseFloat(foodPosition.left) - Number.parseFloat(constants.FOOD_SIZE) && 
        Number.parseFloat(playerPosition.left) < Number.parseFloat(foodPosition.left) + Number.parseFloat(constants.FOOD_SIZE)) {
        renderedFoods[i].style.display = "none";
      }
    }
  }, 100);

  return (
    <div id={"app"}>
      <header id={"topBar"}>
        <h3 className={"title"}>{foodsCollected}</h3>
      </header>
      <div id={"gameArea"}>
        <Player foodsCollected={foodsCollected} />
        {foods.map((element) => element)}
      </div>
      <footer id="appFooter"></footer>
    </div>
  );
}

export default App;
