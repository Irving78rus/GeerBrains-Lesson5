var board_digits = document.createElement("div");
document.body.appendChild(board_digits);
board_digits.id = 'board_digits';

var board = document.createElement("div");
board_digits.appendChild(board);
board.id = 'board';

var digits = document.createElement("div");
board_digits.appendChild(digits);
digits.id = 'digits';

var letters = document.createElement("div");
document.body.appendChild(letters);
letters.id = 'letters';

var gameBoard = {
    cells: [],
}
var gameBoard2 = {}
var gameBoard3 = {}

var boardd = ["83654729",
    "abababab",
    "10101010",
    "01010101",
    "10101010",
    "01010101",
    "qwqwqwqw",
    "eiyzxtur",
];

var number = [1, 2, 3, 4, 5, 6, 7, 8];
var byk = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


function initdigits(number) {
    gameBoard3.element = document.getElementById("digits");

    for (var i = 0; i < number.length; i++) {
        var letters = document.createElement("div");
        letters.classList.add("sqw");
        letters.innerText = number[i]
        gameBoard3.element.appendChild(letters);

    }
}
initdigits(number);

function initletters(byk) {

    gameBoard2.element = document.getElementById("letters");

    for (var i = 0; i < byk.length; i++) {
        var letters = document.createElement("div");
        letters.classList.add("sqw");
        letters.innerText = byk[i]
        gameBoard2.element.appendChild(letters);

    }
}
initletters(byk);


function initBoard(boardd) {
    gameBoard.element = document.getElementById("board");
    for (var i = 0; i < boardd.length; i++) {
        gameBoard.cells[i] = [];
        for (var j = 0; j < boardd[i].length; j++) {
            var cell = document.createElement("div");
            switch (boardd[i][j]) {
                case '1':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqb");
                    break;
                case '0':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqw");
                    break;
                case '2':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwk-b");
                    break;
                case '3':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwk-w");
                    break;
                case '4':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwki-b");
                    break;
                case '5':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwd-w");
                    break;
                case '6':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqws-b");
                    break;
                case '7':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqws-w");
                    break;
                case '8':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwl-b");
                    break;
                case '9':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwl-w");

                    break;
                case 'a':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwp-w");
                    break;
                case 'b':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwp-b");
                    break;
                case 'q':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwp-wb");
                    break;
                case 'w':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwp-ww");
                    break;
                case 'e':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwl-ww");
                    break;
                case 'r':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwl-wb");
                    break;
                case 't':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqws-wb");
                    break;
                case 'y':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqws-ww");
                    break;
                case 'u':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwk-ww");
                    break;
                case 'i':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwk-wb");
                    break;
                case 'z':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwking-wb");
                    break;
                case 'x':
                    gameBoard.cells[i][j] = { element: cell };
                    cell.classList.add("sqwquen-ww");
                    break;

            }


            // else if (gameBoard.cells[0])
            gameBoard.element.appendChild(cell);
        }

    }



}

initBoard(boardd);

console.log(number[3])