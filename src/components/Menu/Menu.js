import React, { useContext } from 'react';
import './Menu.css';
import GameContext from '../../context';

function Menu(props) {

    let gameContext = useContext(GameContext);
    let difficulty;
    let menuOptions = document.getElementsByClassName("menuOption");

    const setBackgroundColor = () => {

    };

    const resetBackgroundColor = () => {
        for (let i = 0; i < menuOptions.length; i++) {
            if (i !== difficulty - 1) {
                menuOptions[i].style.backgroundColor = "#eee";
            }
        }
    };

    const selectDifficulty = () => {
        // Clear background color for all the difficulty buttons
        for (let i = 0; i < menuOptions.length; i++) {
            menuOptions[i].style.backgroundColor = "#eee";
        }

        // Set the difficulty to the variable
        let str = document.activeElement.innerHTML;
        if (str === menuOptions[0].innerHTML) {
            menuOptions[0].style.backgroundColor = "#bbb";
            difficulty = 1;
        } else if (str === menuOptions[1].innerHTML) {
            menuOptions[1].style.backgroundColor = "#bbb";
            difficulty = 2;
        } else {
            menuOptions[2].style.backgroundColor = "#bbb";
            difficulty = 3;
        }
    };

    const startGame = () => {
        props.setDifficulty(difficulty);
        document.getElementById("menu").style.display = "none";
    };

    return (
        <div id={"menu"}>
            <div>
                <h1>Menu</h1>
                <p>Choose difficulty:</p>

                <button className={"menuOption"} 
                    onClick={selectDifficulty} onMouseEnter={() => menuOptions[0].style.backgroundColor = "#bbb"} 
                    onMouseLeave={resetBackgroundColor}>Easy</button>

                <button className={"menuOption"} 
                    onClick={selectDifficulty} onMouseEnter={() => menuOptions[1].style.backgroundColor = "#bbb"} 
                    onMouseLeave={resetBackgroundColor}>Normal</button>

                <button className={"menuOption"} onClick={selectDifficulty} 
                    onMouseEnter={() => menuOptions[2].style.backgroundColor = "#bbb"} 
                    onMouseLeave={resetBackgroundColor}>Hard</button>

                <button id={"startButton"} onClick={startGame} 
                    onMouseEnter={() => document.getElementById("startButton").style.backgroundColor = "#248"}
                    onMouseLeave={() => document.getElementById("startButton").style.backgroundColor = "#eee"}>Start Game</button>
            </div>
        </div>
    );
}

export default Menu;