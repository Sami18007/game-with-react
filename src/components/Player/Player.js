import React, { useContext, useEffect } from 'react';
import './Player.css';
import CollectedContext from '../context';

function Player(props) {
    const length = useContext(CollectedContext).collected;
    let parts = [<div id={"playerHead"} className={"playerPart"} key={0}></div>];

    // Create the player - length depends on state
    for(let i = 0; i < length; i++) {
        parts.push(<div className={"playerPart"} key={i + 1}></div>);
    }

    useEffect(() => {
        let playerParts = document.getElementsByClassName("playerPart");
        let playerPartsPositions = [];
        let bottomPos;
        let leftPos;

        // for (let i = 0; i < playerParts.length; i++) {
        //     bottomPos = Number.parseFloat(getComputedStyle(playerParts[i]).bottom);
        //     leftPos = Number.parseFloat(getComputedStyle(playerParts[i]).left);
        //     playerPartsPositions.push({bottom: bottomPos, left: leftPos});
        // }

        // for (let i = 1; i < playerParts.length; i++) {
        //     playerParts[i].style.bottom = playerPartsPositions[0].bottom + "px";
        //     playerParts[i].style.left = playerPartsPositions[0].left + "px";
        // }

        playerParts[playerParts.length - 1].style.bottom = Number.parseFloat(getComputedStyle(playerParts[0]).bottom) + "px";
        playerParts[playerParts.length - 1].style.left = Number.parseFloat(getComputedStyle(playerParts[0]).left) + "px";
        playerParts[playerParts.length - 1].style.display = "block";
    });

    // Set where different parts of the player should be located related to each other
    // let setTailsPosition = setInterval(() => {
    //     if (document.getElementById("player")) {
    //     }
    // }, constants.REFRESH_RATE);
    
    return (
        <div id={"player"}>
            {parts.map((element) => element)}
        </div>
    );
}

export default Player;