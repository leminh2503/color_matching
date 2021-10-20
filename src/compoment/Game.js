import React from "react";
import getColor from './randomColor';

function Game({color}){
    
    return (
    
    <ul id="colorList" class="color-list">
        <li>
            <div class="overlay" style = {{backgroundColor:color}}></div>
        </li>
    </ul>)
}

export default Game;