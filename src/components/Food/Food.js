import React, { useContext, useEffect } from 'react';
import './Food.css';
import constants from '../../gameLogic/constants';
import CollectedContext from '../context';

function Food(props) {
    // Set random position for the food
    const appAreaHeight = window.innerHeight;
    const appAreaWidth = window.innerWidth;
    let bottomLocation = 0.5 * appAreaHeight;
    let leftLocation = 0.5 * appAreaWidth;

    while (bottomLocation > 0.4 * appAreaHeight && bottomLocation < 0.6 * appAreaHeight && 
        leftLocation > 0.4 * appAreaWidth && leftLocation < 0.6 * appAreaWidth) {
        bottomLocation = Number.parseFloat(Math.random() * appAreaHeight * 0.7 + appAreaHeight * 0.15);
        leftLocation = Number.parseFloat(Math.random() * appAreaWidth * 0.9 + appAreaWidth * 0.05);
    }

    // if (useContext(CollectedContext).collected === 0) {

    // }

    const checkIfEaten = setInterval(() => {
        const player = document.getElementById("playerHead");
        const playerPosition = {
            bottom: getComputedStyle(player).bottom,
            left: getComputedStyle(player).left
        };
        // const renderedFoods = document.getElementsByClassName("food");
        // const food = document.getElementById("food");

        if (Number.parseFloat(playerPosition.bottom) > bottomLocation - constants.FOOD_SIZE && 
            Number.parseFloat(playerPosition.bottom) < bottomLocation + constants.FOOD_SIZE && 
            Number.parseFloat(playerPosition.left) > leftLocation - constants.FOOD_SIZE && 
            Number.parseFloat(playerPosition.left) < leftLocation + constants.FOOD_SIZE) {
            // for (let i = 0; i < renderedFoods.length; i++) {
            //     if (renderedFoods[i].style.display !== "none" && renderedFoods[i].id === props.id) {
            //         renderedFoods[i].style.display = "none";
            //         props.collect();
            //         setCollected({
            //             collected: collected++,
            //             setCollected: setCollected
            //         });
            //         clearInterval(checkIfEaten);
            //     }
            // }
            props.collect();
            clearInterval(checkIfEaten);
        }
    }, 100);

    const style = {
        bottom: bottomLocation + "px", 
        left: leftLocation + "px"
    };

    return (
        <div id={props.id} style={style} className={"food"}></div>
    );
}

export default Food;