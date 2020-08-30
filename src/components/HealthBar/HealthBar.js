import React, { useContext, useEffect } from 'react';
import './HealthBar.css';
import CollectedContext from '../../context';

function HealthBar(props) {
    const collectedContext = useContext(CollectedContext);
    
    useEffect(() => {
        let healthBarForeground = document.getElementById("playerHealthBarForeground");
        healthBarForeground.style.width = collectedContext.playerHealth + "%";
    });

    return (
        <div id={props.id} className={"healthBarBackground"}>
            <div id={props.id + "Foreground"} className={"healthBarForeground"}></div>
        </div>
    )
}

export default HealthBar;