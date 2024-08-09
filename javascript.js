function addSquares(number) {
    for (let i = 1; i <= number ** 2; i++) {
        const container = document.querySelector(".container");
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `1 1 calc(100% / ${number})`;
        container.appendChild(square);
    }
}

addSquares(16);

let squares = document.querySelectorAll(".square");

function addBlack(e) {
    e.target.style.backgroundColor = 'black';
}

squares.forEach((square) => {
    square.addEventListener("mouseenter", addBlack, true);
});

const blackButton = document.querySelector(".black");

function toggleBlack() {
    function checkRainbow() {
        if (rainbowButton.className === "rainbow rainbow-on") {
            toggleRainbow();
        } else {
            return;
        }
    }
    checkRainbow();
    blackButton.classList.toggle("black-on");
    blackButton.classList.toggle("black-off");
    if (blackButton.className === 'black black-on') {
        blackButton.textContent = "Black: on";
        squares.forEach((square) => {
            square.addEventListener("mouseenter", addBlack, true);
        });
    } else {
        blackButton.textContent = "Black: off";
        squares.forEach((square) => {
            square.removeEventListener("mouseenter", addBlack, true);
        });
    }
} 

blackButton.addEventListener("click", toggleBlack);

const rainbowButton = document.querySelector(".rainbow");

function addRainbow(e) {
    let randomColor = () => Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function toggleRainbow() {
    function checkBlack() {
        if (blackButton.className === "black black-on") {
            toggleBlack();
        } else {
            return;
        }
    }
    checkBlack();
    rainbowButton.classList.toggle("rainbow-on");
    rainbowButton.classList.toggle("rainbow-off");
    if (rainbowButton.className === 'rainbow rainbow-on') {
        rainbowButton.textContent = "Rainbow: on";
        squares.forEach((square) => {
            square.addEventListener("mouseenter", addRainbow, true);
        });
    } else {
        rainbowButton.textContent = "Rainbow: off";
        squares.forEach((square) => {
            square.removeEventListener("mouseenter", addRainbow, true);
        });
    }
}

rainbowButton.addEventListener("click", toggleRainbow);

// Can't get below to work. Intent is to have a square's background color
// increase in opacity by 10% every time the mouse hovers over that
// particular square. The code below adds and removes the listener event
// successfully (with some minor kinks that will need to be worked out),
// however the opacity increases by 10% when the mouse hovers over every
// adjacent square. I.e. the opacity increase is not local/exclusive to a
// particular square; it increases across all squares. Have tried
// modifications and am stumped.

const opacityButton = document.querySelector(".opacity");

function toggleOpacity() {
    opacityButton.classList.toggle("opacity-on");
    opacityButton.classList.toggle("opacity-off");
    let count = 0;
    function addOpacity(e) {
        count++;
        e.target.style.opacity = `calc(${count} / 10)`;
        console.log(count);
    }
    squares.forEach((square) => {
        if (opacityButton.className === 'opacity opacity-on') {
            opacityButton.textContent = 'Opacity: on';
            square.addEventListener("mouseenter", addOpacity, true);
        } else {
            opacityButton.textContent = 'Opacity: off';
            square.removeEventListener("mouseenter", addOpacity, true);
        }
    });
}

opacityButton.addEventListener("click", toggleOpacity);

// end non-working code

const gridButton = document.querySelector(".grid-button");

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
        squares = document.querySelectorAll(".square");
        if (blackButton.className === "black black-on") {
            squares.forEach((square) => {
                square.addEventListener("mouseenter", addBlack, true);
            });
        } else if (rainbowButton.className === "rainbow rainbow-on") {
            squares.forEach((square) => {
                square.addEventListener("mouseenter", addRainbow, true);
            });
        } else {
            return;
        };
    }   
}

gridButton.addEventListener("click", promptSquares);

const clearButton = document.querySelector(".clear-button");

function clearGrid() {
    let numberOfSquares = squares.length;
    const body = document.querySelector("body");
    body.removeChild(body.lastElementChild);
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    body.appendChild(newContainer);
    addSquares(Math.sqrt(numberOfSquares));
    squares = document.querySelectorAll(".square");
    if (blackButton.className === "black black-on") {
        squares.forEach((square) => {
            square.addEventListener("mouseenter", addBlack, true);
        });
    } else if (rainbowButton.className === "rainbow rainbow-on") {
        squares.forEach((square) => {
            square.addEventListener("mouseenter", addRainbow, true);
        });
    } else {
        return;
    };
}

clearButton.addEventListener("click", clearGrid);