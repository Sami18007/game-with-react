import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player/Player.js';
import Food from './components/Food/Food.js';
import './gameLogic/controls.js';
import constants from './gameLogic/constants';
import GameContext from './context';
import HealthBar from './components/HealthBar/HealthBar';
import Menu from './components/Menu/Menu.js';

function App() {
  
  const appAreaHeight = window.innerHeight;
  const appAreaWidth = window.innerWidth;

  // This function will be used to update the context value "collected"
  const collect = () => {
    const newFoodLocation =  {
      bottom: Number.parseFloat(Math.random() * appAreaHeight * 0.7 + appAreaHeight * 0.15),
      left: Number.parseFloat(Math.random() * appAreaWidth * 0.9 + appAreaWidth * 0.05)
    }

    setGameContext({
      collected: gameContext.collected + 1,
      playerHealth: gameContext.playerHealth,
      currFoodPos: { bottom: newFoodLocation.bottom, left: newFoodLocation.left },
      difficulty: gameContext.difficulty,
      setCollected: collect,
      setPlayerHealth: setHealth,
      setDifficulty: setDifficulty
    });
  };

  // This function will be used to update the context value "playerHealth"
  const setHealth = () => {
    if (gameContext.playerHealth > 0) {
      setGameContext({
        collected: gameContext.collected,
        playerHealth: gameContext.playerHealth - 10,
        currFoodPos: gameContext.currFoodPos,
        difficulty: gameContext.difficulty,
        setCollected: collect,
        setPlayerHealth: setHealth,
        setDifficulty: setDifficulty
      });
    } else {
      // TODO: Configure what happens when the game ends.
    }
  };

  const setDifficulty = (value) => {
    setGameContext({
      collected: gameContext.collected,
      playerHealth: gameContext.playerHealth,
      currFoodPos: gameContext.currFoodPos,
      difficulty: value,
      setCollected: collect,
      setPlayerHealth: setHealth,
      setDifficulty: setDifficulty
    });
  };

  // This state has the values to set to the context
  const [ gameContext, setGameContext ] = useState({
    collected: 0,
    playerHealth: 100,
    currFoodPos: {
      bottom: Number.parseFloat(Math.random() * appAreaHeight * 0.7 + appAreaHeight * 0.15),
      left: Number.parseFloat(Math.random() * appAreaWidth * 0.9 + appAreaWidth * 0.05)
    },
    difficulty: 1,
    setCollected: collect,
    setPlayerHealth: setHealth,
    setDifficulty: setDifficulty
  });

  useEffect(() => {
    const player = document.getElementById("playerHead");

    // Fast updater - approximately 60fps
    const fastUpdater = setInterval(() => {
      
    }, 15);

    // Slow updater - approximately 10fps
    const slowUpdater = setInterval(() => {
      // Check the player position...
      const playerPosition = {
        bottom: getComputedStyle(player).bottom,
        left: getComputedStyle(player).left
      };
      // ...and if it collides with the food object
      if (Number.parseFloat(playerPosition.bottom) > gameContext.currFoodPos.bottom - constants.FOOD_SIZE && 
          Number.parseFloat(playerPosition.bottom) < gameContext.currFoodPos.bottom + constants.FOOD_SIZE && 
          Number.parseFloat(playerPosition.left) > gameContext.currFoodPos.left - constants.FOOD_SIZE && 
          Number.parseFloat(playerPosition.left) < gameContext.currFoodPos.left + constants.FOOD_SIZE) {
          collect();
          clearInterval(slowUpdater);
      }
    }, 100);
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
    <GameContext.Provider value={gameContext}>
      <div id={"app"}>
        <header id={"topBar"}>
          <h3 className={"title textWhite"}>Game With react</h3>
          <h2 className={"title textYellow"}>{gameContext.collected}</h2>
        </header>
        <div id={"gameArea"}>
          <Menu setDifficulty={setDifficulty} />
          <HealthBar id={"playerHealthBar"} />
          <Player />
          {/* {foods.map((element) => element)} */}
          <Food id={"food"} />
        </div>
        <footer id="appFooter"></footer>
      </div>
    </GameContext.Provider>
  );
}

export default App;
