const gridContainer = document.querySelector("#grid-container");
const root = document.documentElement;
// object.onclick = function(){myScript};

let numOfTimes = 16;
let autos = "";
for(let i =0;i<numOfTimes;i++) {
    autos += " auto";
}
document.querySelector("#btn").addEventListener('click', () => {
    numOfTimes = prompt("Question ");
    gridContainer.innerHTML = "";
    buildGridFunction();
});
console.log(autos)
root.style.setProperty('--cols',autos);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }

function buildGridFunction(){


for(let j =0;j<numOfTimes;j++) {
    const row  = document.createElement("div");
    for(let i =0;i<numOfTimes;i++) {
        const singleCell  = document.createElement("div");
        singleCell.innerHTML = "&nbsp;";
        singleCell.style.color = "black";
        singleCell.classList.add("grid-item")
        singleCell.addEventListener("mouseover", () => {

            singleCell.style.backgroundColor = getRandomColor();
        });
        row.appendChild(singleCell);
    }
    gridContainer.appendChild(row);
}
}

buildGridFunction();