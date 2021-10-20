import React, { useState } from "react";
import getColor from "./randomColor";
import Game from "./Game";
function Header({ name }) {
  const colorList = getColor(8);
  function handleActive(index) {
    setActive('active')
  }
  return (
    <section class="color-background">
      <div class="game">
        <h1 class="game__title">Color Matching</h1>
        <p class="game__timer"></p>
        <div class="game__button-wrapper">
          <button class="game__button">Play Again</button>
        </div>
        <div class="game__board">
          <ul id="colorList" class="color-list">
            {colorList.map((color, index) => (
              <Game color={color} index={index} active={active} handleActive={handleActive}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
