

function popBoard(size) {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div")
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'white'
        board.insertAdjacentElement("beforeend", square)
    }
}
popBoard(16)


function changeSize(input) {
    let prompt = document.querySelector('.prompt')
    if (input > 50 || input < 2) {
        prompt.textContent = "Enter a value between 2 and 50"
    }
    else {
        popBoard(input)
        prompt.textContent = "Board has been successfully populated"
    }

}

function colorSquare() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    let prompt = document.querySelector('.prompt')    
    if (choice === "random") {
        color = getRandomColor();
        prompt.textContent = `You're now coloring in ${color}`
        prompt.style.color = `${color}`
    } else {
        color = choice; 
        prompt.textContent = `You're now coloring in ${color}`
        prompt.style.color = `${color}`

    }
}

function getRandomColor() {
    let random = Math.floor(Math.random() * 5) + 1;
    switch (random) {
        case 1:
            return "red";          
        case 2:
            return "yellow";
        case 3:
            return "orange";
        case 4:
            return "purple";
        case 5:
            return "pink";
    }
}

function reset(){
    popBoard(16)
    let text = document.querySelector('.textInput')
    text.value = "16"
    let prompt = document.querySelector('.prompt')
    prompt.textContent = "Board has been reset."
    prompt.style.color = 'black'
    changeColor('black')
}