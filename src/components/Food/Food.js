import React, { useContext } from 'react';
import './Food.css';
import CollectedContext from '../../context';

function Food(props) {
    const collectedContext = useContext(CollectedContext);

    const style = {
        bottom: collectedContext.currFoodPos.bottom + "px", 
        left: collectedContext.currFoodPos.left + "px"
    };

    return (
        <div id={props.id} style={style} className={"food"}></div>
    );
}

export default Food;