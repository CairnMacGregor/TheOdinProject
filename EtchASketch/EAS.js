let gridSize = 16;
const gridContainer = document.getElementById('etchGrid');
const createGrid = (gridSize) => {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    };

const populateGrid = () => {
    for( let i = 1; i <= (gridSize * gridSize); i++){
        const gridItem = document.createElement("div");
        gridItem.classList = "grid-item";
        gridItem.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridItem);
    }
}
const changeColor = (e) => {
    let currentColor = Number(e.target.style.background.slice(-4, -1));
    console.log(currentColor)
    e.target.style.background = `rgba(0, 0, 0, ${ currentColor + 0.2})`
}

const reset = () => {
    document.querySelectorAll('.grid-item').forEach(e => e.parentNode.removeChild(e));
    resize();
}

const resize = () => {
    let size = parseInt(prompt("How big should the grid be?"))
    if( size > 100 || size < 10){
        alert("Please make sure that the grid is between 10 and 100")
        resize()
    } else {
    gridSize = size;
    createGrid(gridSize);
    populateGrid(gridSize);
}}

resize()
