console.log("hello world");

// 0 1*2*6437958
// 1 895*6*2147*3*
// 2 3*74*9*8*5126
// 3 45719*3*86*2*
// 4 9*8*32*4*65*1*7
// 5 *6*12*5*78394
// 6 2693*1*4*78*5
// 7 *5*4876*9*231
// 8 7318526*4*9

var numSelected = null;
var tileSleected = null;

var errors = 0;

var board = [
    "- 2 - - - - - - -",
    "- - - 6 - -  - - 3",
    "- 7 4 - 8 - - - -",
    "- - - - - 3 - - 2",
    "- 8 - - 4 - - 1 -",
    "6 - - 5 - - - - -",
    "- - - - 1 - 7 8 -",
    "5 - - - - 9 - - -",
    "- - - - - - - 4 -"
]

var solution = [
    "126437958",
    "895621473",
    "374985126",
    "457193862",
    "983246517",
    "612578394",
    "269314785",
    "548769231",
    "731852649",
]

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 1; i <= 9; 1++) {
        let number = document.createElement("div");
    }
}