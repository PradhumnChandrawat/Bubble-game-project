function createCircle() {
  var makeBubble = "";

  for (var i = 0; i < 184; i++) {
    var value = Math.floor(Math.random() * 10);
    makeBubble += `<div id="bubble">${value}</div>`;
  }
  document.querySelector(".content").innerHTML = makeBubble;
}

var timer = 30;
function runtimer() {
  var clock = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(clock);
      document.querySelector(
        ".content"
      ).innerHTML = `<h1 style = "color: = black; ">${"Game Over"}</h1>`;
    }
  }, 1000);
}
var hitNo;
function getHit() {
  hitNo = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").innerHTML = hitNo;
}

var score = 0;
function incrementScore() {
  score += 1;
  document.querySelector("#scorevalue").innerHTML = score;
}

function dicrementScore() {
  score -= 1;
  document.querySelector("#scorevalue").innerHTML = score;
}

document.querySelector(".content").addEventListener("click", (info) => {
  var clickedNum = Number(info.target.textContent);
  if (clickedNum === hitNo) {
    incrementScore();
    getHit();
    createCircle();
  } else {
    dicrementScore();
  }
});

runtimer();
getHit();
createCircle();
