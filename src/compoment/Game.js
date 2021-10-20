import React, {useState} from "react";
import getColor from './randomColor';

function Game({color, index, active, handleActive}){
    const [isActive, setActive] = useState(false)
    function handleClick(event){
        setActive(!isActive)
        console.log(event.target.className);
    }
    const checkActive = () => {
    }
    return (
        <li onClick={handleClick} className={isActive && 'active'} data-color={color}>
            <div className="overlay" style = {{backgroundColor:color}}></div>
        </li>
    )
}

export default Game;