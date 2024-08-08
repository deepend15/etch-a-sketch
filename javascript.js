function addSquares(number) {
    for (let i = 1; i <= number ** 2; i++) {
        const container = document.querySelector(".container");
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `1 1 calc(100% / ${number})`;
        container.appendChild(square);
        square.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = `black`);
        let randomColor = () => Math.floor(Math.random() * 256);
        // square.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        let count = 0;
        // square.addEventListener("mouseenter", function(e) {
        //     count++;
        //     e.target.style.backgroundColor = `rgb(0, 0, 0, calc(${count / 10}))`;
        //     console.log(count);
        // });
        // square.addEventListener("mouseenter", function(e) {
        //     count++;
        //     e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}, calc(${count / 10}))`;
        //     console.log(count);
        // });
    }
}

addSquares(16);

const gridButton = document.querySelector(".grid");

function promptSquares() {
    let inputtedSquares = prompt("How many squares do you want per row? (e.g. '20' will create a 20x20 grid)\n\nMinimum: 2\nMaximum: 100");
    if (inputtedSquares === null) {
        return;
    } else if (Number(inputtedSquares) > 100 || Number(inputtedSquares) <= 1 || isNaN(Number(inputtedSquares))) {
        alert("Error: invalid number entered, unable to complete request");
    } else {
        const body = document.querySelector("body");
        body.removeChild(body.lastElementChild);
        const newContainer = document.createElement("div");
        newContainer.classList.add("container");
        body.appendChild(newContainer);
        addSquares(Number(inputtedSquares));
    }
}

gridButton.addEventListener("click", promptSquares);
