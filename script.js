function startGame() {
  document.turn = "X ";

  setMessage(document.turn + "gets to start.");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if (square.innerText == "") {
  square.innerText = document.turn;
  switchTurn();
  } else {
      setMessage("Not allowed");
  }
}

function switchTurn() {
  if (document.turn == "O") {
    document.turn = "X";
  } else {
    document.turn = "O";
  }
  setMessage("It is " + document.turn + "'s turn.'")
}
