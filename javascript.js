function addSquares(number) {
    const container = document.querySelector(".container");
    for (let i = 1; i <= number ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `1 1 calc(100% / ${number})`;
        container.appendChild(square);
    }
}

addSquares(16);