const boxes = document.querySelectorAll(".box");
const result = document.getElementById("result");
const reset = document.querySelector("#reset");

let oTurn = true;
let btnCount = 0;

const winPattens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function cheakWinner() {
  for (const patten of winPattens) {
    let pos1Val = boxes[patten[0]].innerText;
    let pos2Val = boxes[patten[1]].innerText;
    let pos3Val = boxes[patten[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        patten.forEach((i) => {
          if (boxes[i].innerText === "O") {
            boxes[i].style.backgroundColor = "green";
          } else {
            boxes[i].style.backgroundColor = "red";
          }
        });
        result.innerText = `Congratulations,Winner is ${pos1Val}`;
        disabledBoxes();
      } else if (btnCount == 9 && result.innerText === "") {
        result.innerText = `Game Was Draw`;
      }
    }
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    btnCount++;
    if (oTurn) {
      box.innerText = "O";
      oTurn = false;
    } else {
      box.innerText = "X";
      oTurn = true;
    }
    box.disabled = true;
    cheakWinner();
  });
});

function disabledBoxes() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

function enabledBoxes() {
  for (let box of boxes) {
    box.disabled = false;
    result.innerText = "";
    box.innerText = "";
    box.style.backgroundColor = "white";
  }
}

function resetGame() {
  oTurn = true;
  enabledBoxes();
}
reset.addEventListener("click", resetGame);
