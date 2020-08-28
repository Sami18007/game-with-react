import constants from './constants';

// Variables for the players movement
let playerPosition;
let newPlayerPosition;
let playerParts;
let playerPartsPositions = [];
let upKeyDown = false;
let downKeyDown = false;
let leftKeyDown = false;
let rightKeyDown = false;
let moveUp;
let moveDown;
let moveLeft;
let moveRight;

// Controls and their functions for the game


// let renderedParts = document.getElementsByClassName("playerPart");
// for (let i = 1; i < renderedParts.length; i++) {
//     renderedParts[i].style.bottom = renderedParts[i - 1].style.bottom;
//     renderedParts[i].style.left = renderedParts[i - 1].style.left;
// }

// Start moving the player element by pressing w, s, a or d key
document.onkeydown = function(e) {
    switch (e.key) {
        case 'Escape':
            break;
        case 'w':
            if (upKeyDown === false) { // Avoid creating multiple intervals when key is held down
                upKeyDown = true;
                // player = document.getElementById("playerHead");
                playerParts = document.getElementsByClassName("playerPart");
                let bottomPos;
                let leftPos;
                moveUp = setInterval(() => {
                    playerPartsPositions = [];
                    for (let i = 0; i < playerParts.length; i++) {
                        bottomPos = Number.parseFloat(getComputedStyle(playerParts[i]).bottom);
                        leftPos = Number.parseFloat(getComputedStyle(playerParts[i]).left);
                        playerPartsPositions.push({bottom: bottomPos, left: leftPos});
                    }
                    playerPosition = playerPartsPositions[0].bottom;
                    if (playerPosition <= window.innerHeight * 0.9 - constants.PLAYER_SIZE / 2) { // Move only when inside gameArea
                        newPlayerPosition = playerPosition + constants.PLAYER_SPEED;
                        playerParts[0].style.bottom = newPlayerPosition + "px";
                        for (let i = 1; i < playerParts.length; i++) {
                            playerParts[i].style.bottom = playerPartsPositions[i - 1].bottom + "px";
                            playerParts[i].style.left = playerPartsPositions[i - 1].left + "px";
                        }
                    }
                }, constants.REFRESH_RATE);
            }
            break;
        case 's':
            if (downKeyDown === false) { // Avoid creating multiple intervals when key is held down
                downKeyDown = true;
                // player = document.getElementById("playerHead");
                playerParts = document.getElementsByClassName("playerPart");
                let bottomPos;
                let leftPos;
                moveDown = setInterval(() => {
                    playerPartsPositions = [];
                    for (let i = 0; i < playerParts.length; i++) {
                        bottomPos = Number.parseFloat(getComputedStyle(playerParts[i]).bottom);
                        leftPos = Number.parseFloat(getComputedStyle(playerParts[i]).left);
                        playerPartsPositions.push({bottom: bottomPos, left: leftPos});
                    }
                    playerPosition = playerPartsPositions[0].bottom;
                    if (playerPosition >= window.innerHeight * 0.1 + constants.PLAYER_SIZE / 2) { // Move only when inside gameArea
                        newPlayerPosition = playerPosition - constants.PLAYER_SPEED;
                        playerParts[0].style.bottom = newPlayerPosition + "px";
                        for (let i = 1; i < playerParts.length; i++) {
                            playerParts[i].style.bottom = playerPartsPositions[i - 1].bottom + "px";
                            playerParts[i].style.left = playerPartsPositions[i - 1].left + "px";
                        }
                    }
                }, constants.REFRESH_RATE);
            }
            break;
        case 'a':
            if (leftKeyDown === false) { // Avoid creating multiple intervals when key is held down
                leftKeyDown = true;
                // player = document.getElementById("playerHead");
                playerParts = document.getElementsByClassName("playerPart");
                let bottomPos;
                let leftPos;
                moveLeft = setInterval(() => {
                    playerPartsPositions = [];
                    for (let i = 0; i < playerParts.length; i++) {
                        bottomPos = Number.parseFloat(getComputedStyle(playerParts[i]).bottom);
                        leftPos = Number.parseFloat(getComputedStyle(playerParts[i]).left);
                        playerPartsPositions.push({bottom: bottomPos, left: leftPos});
                    }
                    playerPosition = playerPartsPositions[0].left;
                    newPlayerPosition = playerPosition - constants.PLAYER_SPEED;
                    playerParts[0].style.left = newPlayerPosition + "px";
                    for (let i = 1; i < playerParts.length; i++) {
                        playerParts[i].style.bottom = playerPartsPositions[i - 1].bottom + "px";
                        playerParts[i].style.left = playerPartsPositions[i - 1].left + "px";
                    }
                    if (playerPosition <= 0 + constants.PLAYER_SIZE / 2) { // Teleport to the right side of the gameArea
                        playerParts[0].style.left = window.innerWidth - constants.PLAYER_SIZE / 2 + "px";
                    }
                }, constants.REFRESH_RATE);
            }
            break;
        case 'd':
            if (rightKeyDown === false) { // Avoid creating multiple intervals when key is held down
                rightKeyDown = true;
                // player = document.getElementById("playerHead");
                playerParts = document.getElementsByClassName("playerPart");
                let bottomPos;
                let leftPos;
                moveRight = setInterval(() => {
                    playerPartsPositions = [];
                    for (let i = 0; i < playerParts.length; i++) {
                        bottomPos = Number.parseFloat(getComputedStyle(playerParts[i]).bottom);
                        leftPos = Number.parseFloat(getComputedStyle(playerParts[i]).left);
                        playerPartsPositions.push({bottom: bottomPos, left: leftPos});
                    }
                    playerPosition = playerPartsPositions[0].left;
                    newPlayerPosition = playerPosition + constants.PLAYER_SPEED;
                    playerParts[0].style.left = newPlayerPosition + "px";
                    for (let i = 1; i < playerParts.length; i++) {
                        playerParts[i].style.bottom = playerPartsPositions[i - 1].bottom + "px";
                        playerParts[i].style.left = playerPartsPositions[i - 1].left + "px";
                    }
                    if (playerPosition >= window.innerWidth - constants.PLAYER_SIZE / 2) { // Teleport to the left side of the gameArea
                        playerParts[0].style.left = 0 + constants.PLAYER_SIZE / 2 + "px";
                    }
                }, constants.REFRESH_RATE);
            }
            break;
    }
}

// Stop moving the player element when key is released
document.onkeyup = function(e) {
    switch (e.key) {
        case 'w':
            upKeyDown = false;
            clearInterval(moveUp);
            break;
        case 's':
            downKeyDown = false;
            clearInterval(moveDown);
            break;
        case 'a':
            leftKeyDown = false;
            clearInterval(moveLeft);
            break;
        case 'd':
            rightKeyDown = false;
            clearInterval(moveRight);
            break;
    }
}