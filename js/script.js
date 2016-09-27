document.addEventListener('DOMContentLoaded', init)

function init () {
  // var numPlayer = 2
  // var clickCount = 0
  // var winningCombi = [[][][]]
  var currentPlayer = 1

  var start =document.getElementById("start");

  var imgs = document.getElementsByClassName('box'),
  conditions = true,
  p1 = document.getElementById("p1"),     // Call the paragraph fields with id
  p2 = document.getElementById("p2"),
  p3 = document.getElementById("p3"),
  p4 = document.getElementById("p4"),
  p5 = document.getElementById("p5"),
  p6 = document.getElementById("p6"),
  p7 = document.getElementById("p7"),
  p8 = document.getElementById("p8"),
  p9 = document.getElementById("p9");
  start = document.getElementById("start");

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', boxClick)
  }

  function boxClick () {
    if (currentPlayer === 1) {
      this.classList.add('x');
      checkWin();
      checkDraw();
    } else {
      this.classList.add('o');
      checkWin();
      checkDraw();
    }
    switchPlayer();
  }

  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }
}

function checkWin() {
  if ((p1.classList.contains('x')) && (p2.classList.contains('x')) && (p3.classList.contains('x')) ||
  ((p4.classList.contains('x')) && (p5.classList.contains('x')) && (p6.classList.contains('x'))) ||
  ((p7.classList.contains('x')) && (p8.classList.contains('x')) && (p9.classList.contains('x'))) ||
  ((p1.classList.contains('x')) && (p4.classList.contains('x')) && (p7.classList.contains('x'))) ||
  ((p2.classList.contains('x')) && (p5.classList.contains('x')) && (p8.classList.contains('x'))) ||
  ((p3.classList.contains('x')) && (p6.classList.contains('x')) && (p9.classList.contains('x'))) ||
  ((p1.classList.contains('x')) && (p5.classList.contains('x')) && (p9.classList.contains('x'))) ||
  ((p7.classList.contains('x')) && (p5.classList.contains('x')) && (p3.classList.contains('x')))) {
    alert('X is the Winner');
    reStart();
    }
  if ((p1.classList.contains('o')) && (p2.classList.contains('o')) && (p3.classList.contains('o')) ||
    ((p4.classList.contains('o')) && (p5.classList.contains('o')) && (p6.classList.contains('o'))) ||
    ((p7.classList.contains('o')) && (p8.classList.contains('o')) && (p9.classList.contains('o'))) ||
    ((p1.classList.contains('o')) && (p4.classList.contains('o')) && (p7.classList.contains('o'))) ||
    ((p2.classList.contains('o')) && (p5.classList.contains('o')) && (p8.classList.contains('o'))) ||
    ((p3.classList.contains('o')) && (p6.classList.contains('o')) && (p9.classList.contains('o'))) ||
    ((p1.classList.contains('o')) && (p5.classList.contains('o')) && (p9.classList.contains('o'))) ||
    ((p7.classList.contains('o')) && (p5.classList.contains('o')) && (p3.classList.contains('o')))) {
      alert("O is the Winner");
      reStart();
    }
  }

function checkDraw () {
  if ((p1.classList.contains('x') || p1.classList.contains('o')) &&
  (p2.classList.contains("x") || p2.classList.contains("o")) &&
  (p3.classList.contains("x") || p3.classList.contains("o")) &&
  (p4.classList.contains("x") || p4.classList.contains("o")) &&
  (p5.classList.contains("x") || p5.classList.contains("o")) &&
  (p6.classList.contains("x") || p6.classList.contains("o")) &&
  (p7.classList.contains("x") || p7.classList.contains("o")) &&
  (p8.classList.contains("x") || p8.classList.contains("o")) &&
  (p9.classList.contains("x") || p9.classList.contains("o"))
) {
  alert('It is a Draw!')
  reStart();
}
}

function reStart(){
  p1.setAttribute("class", "box");
  p2.setAttribute("class", "box");
  p3.setAttribute("class", "box");
  p4.setAttribute("class", "box");
  p5.setAttribute("class", "box");
  p6.setAttribute("class", "box");
  p7.setAttribute("class", "box");
  p8.setAttribute("class", "box");
  p9.setAttribute("class", "box");

}

start.addEventListener("click", reStart);
start.addEventListener("touchend", reStart);
