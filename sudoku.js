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

var error = 0;

var board = [
    "-2-------",
    "---6----3",
    "-74-8----",
    "-----3--2",
    "-8--4--1-",
    "6--5-----",
    "----1-78-",
    "5----9---",
    "-------4-"
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
    // digits 1-9
    for (let i = 1; i <= 9; i++) {
        // <div id="1" class="number"></div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // board 9x9
    for (let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coords =  this.id.split("-"); // ["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            error += 1;
            document.getElementById("error").innerText = error;
        }
    }
}