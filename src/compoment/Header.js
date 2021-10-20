import React from "react";
import getColor from "./randomColor";
import Game from './Game';
function Header ({name}) {
  const colorList = getColor(8);
  console.log(colorList);
  return (
    <section class="color-background">
      <div class="game">
        <h1 class="game__title">Color Matching</h1>
        <p class="game__timer"></p>
        <div class="game__button-wrapper">
          <button class="game__button">Play Again</button>
        </div>
        <div class="game__board">
          {colorList.map(color => <Game color={color}/>)}
        </div>
      </div>
    </section>
  );
}

export default Header;
