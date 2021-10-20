

function shuffleColor(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function getColor(count){
    const randomColor = require('randomcolor');

    const colorList = [];
    const hueList = ['red','yellow','blue','magenta','green','black','white','pink'];
    
    for(let i = 0; i < count; i++) {
        const color = randomColor({
            luminosity: 'light',
            hue: [hueList[Math.floor(Math.random()*hueList.length)]]
        })
        colorList.push(color)
    }
    const fullColorList = [...colorList, ...colorList];
    shuffleColor(fullColorList)
    return fullColorList;
}



export default getColor