var numOfSquares = 6;
var colors = [];
var rightColor;
var squares = document.querySelectorAll(".square");
var correctColor = document.querySelector(".correctColor");
var msgDisplay = document.querySelector(".message");
var resetButton = document.querySelector(".reset");
var myMode = document.querySelectorAll(".myMode");

correctColor.textContent = rightColor;

init();

resetButton.addEventListener("click", function() {
    reset();
});

function init() {
    modeChange();
    msg();
    reset();
}

function modeChange() {
    for (i = 0; i < myMode.length; i++) {
        myMode[i].addEventListener("click", function() {
            myMode[0].classList.remove("btnClicked");
            myMode[1].classList.remove("btnClicked");
            this.classList.add("btnClicked");
    
            if (this.textContent === "EASY") {
                numOfSquares = 3;
            } else {
                numOfSquares = 6;
            }
            reset();
        });
    }
}

function msg() {
    for (var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to rightColor
            if (clickedColor === rightColor) {
                msgDisplay.textContent = "Correct!";
                resetButton.textContent = "PLAY AGAIN";
                changeColors(clickedColor);
            } else {
                msgDisplay.textContent = "Try Again";
                this.style.opacity = "0";
            }
        });
    }
}


function reset(){
    colors = generateColor(numOfSquares);
    rightColor = pickColor();
    correctColor.textContent = rightColor;

    resetButton.textContent = "RESET COLOR";
    msgDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++){
        squares[i].style.opacity = "1";
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomnum = Math.floor(Math.random()*colors.length);
    return colors[randomnum];
}

function generateColor(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push(randomRGB());
    }

    return arr;
}

function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}