import React, { useState, useContext } from 'react';
import './App.css';
import Player from './components/Player/Player.js';
import Food from './components/Food/Food.js';
import './gameLogic/controls.js';
import constants from './gameLogic/constants';
import CollectedContext from './components/context';

function App() {
  const theContext = useContext(CollectedContext);

  const collect = () => {
    setCollectedContext({
      collected: collectedContext.collected + 1,
      setCollected: collect
    });
    
    console.log(collectedContext.collected);
  };

  const [ collectedContext, setCollectedContext ] = useState({
      collected: 0,
      setCollected: collect
  });

  // let foods = [];

  // for (let i = 0; i < constants.AMOUNT_OF_FOOD; i++) {
  //   foods.push(<Food id={"food-" + i} collect={collect} key={i} />);
  // }

  // const checkCollected = setInterval(() => {

  // }, 1000);

  // let checkIfEaten = setInterval(() => {
  //   let player = document.getElementById("playerHead");
  //   let renderedFoods = document.getElementsByClassName("food");
  //   let playerPosition = {
  //     bottom: getComputedStyle(player).bottom,
  //     left: getComputedStyle(player).left
  //   };
  //   let foodPosition;
  //   for (let i = 0; i < renderedFoods.length; i++) {
  //     foodPosition = {
  //       bottom: getComputedStyle(renderedFoods[i]).bottom,
  //       left: getComputedStyle(renderedFoods[i]).left
  //     };
  //     if (Number.parseFloat(playerPosition.bottom) > Number.parseFloat(foodPosition.bottom) - Number.parseFloat(constants.FOOD_SIZE) && 
  //       Number.parseFloat(playerPosition.bottom) < Number.parseFloat(foodPosition.bottom) + Number.parseFloat(constants.FOOD_SIZE) && 
  //       Number.parseFloat(playerPosition.left) > Number.parseFloat(foodPosition.left) - Number.parseFloat(constants.FOOD_SIZE) && 
  //       Number.parseFloat(playerPosition.left) < Number.parseFloat(foodPosition.left) + Number.parseFloat(constants.FOOD_SIZE)) {
  //       renderedFoods[i].style.display = "none";
  //     }
  //   }
  // }, 100);

  return (
    <CollectedContext.Provider value={collectedContext}>
      <div id={"app"}>
        <header id={"topBar"}>
          <h3 className={"title"}></h3>
        </header>
        <div id={"gameArea"}>
          <Player />
          {/* {foods.map((element) => element)} */}
          <Food id={"food"} collect={collect} />
        </div>
        <footer id="appFooter"></footer>
      </div>
    </CollectedContext.Provider>
  );
}

export default App;
