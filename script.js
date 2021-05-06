const gridContainer = document.querySelector("#grid-container");
let numOfTimes = 256;
for(let i =0;i<numOfTimes;i++) {
    const singleCell  = document.createElement("div");
    singleCell.textContent = "McKenna";
    singleCell.style.color = "black";
    singleCell.classList.add("bg-red")
    singleCell.addEventListener("mouseover", () => {
        singleCell.classList.add("mouse-over");
    });
    gridContainer.appendChild(singleCell);
}