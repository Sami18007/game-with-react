import React from 'react';
import './Food.css';

function Food(props) {
    // Set random position for the food
    let bottomLocation = 50.0;
    let leftLocation = 50.0;

    while (bottomLocation > 40 && bottomLocation < 60 && leftLocation > 40 && leftLocation < 60) {
        bottomLocation = Number.parseFloat(Math.random() * 75 + 12.5);
        leftLocation = Number.parseFloat(Math.random() * 95 + 2.5);
    }

    const style = {
        bottom: bottomLocation + "%", 
        left: leftLocation + "%"
    };

    return (
        <div id={props.id} style={style} className={"food"}></div>
    );
}

export default Food;