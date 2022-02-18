var msDisplay = document.querySelector("#milliSec");
var secDisplay = document.querySelector("#second");
var minDisplay = document.querySelector("#minute");
var minColon = document.querySelector("#minColon");
var displayTimeContainer = document.querySelector('.display-time-container');
var displayTime = document.querySelector("#displayTime");
var displayReset = document.querySelector("#displayReset");
var timeList = document.querySelector("#listOfTime");
var puzzleSelected = document.querySelector("#puzzleSelected");
var puzzle = document.querySelector("#puzzle");
var scramble = document.querySelector("#scram");
var newScramGenerate = document.querySelector("#newScramGenerate");
var clearAll = document.querySelector("#clear");
var showHtl = document.querySelector(".showHtl");
var showTimes = document.querySelector("#showTimes");
var splitRight = document.querySelector(".split-right");

var puzzleSelect;
var savedTimes;
// new variables stats
var csTimes = [];
var avAll = 0;
var avAllOut = document.getElementById("overallAv");
var best = 999999999999999999;
var bestOut = document.getElementById("fastest");
var worst = 0;
var numSolves = 0;
var total = 0;
var numSolvesOut = document.querySelector(".solveNum");
// ends here

var timeDisplay = [];
// if(puzzleSelect === '2'){
//   scrambleGen2();
// }
switch (puzzleSelect) {
  case "2":
    scrambleGen2();
    break;
  case "3":
    scrambleGen3();
    break;
  case "4":
    scrambleGen4();
    break;
  case "5":
    scrambleGen5();
    break;
  case "6":
    pyraminx();
    break;
  case "7":
    skewb();
    break;
  default:
    scrambleGen3();
}

var running = false;
var milliSec = 0;
var second = 0;
var minute = 0;
var cs = 0;

var csTimes = [];
let interval;

function timer() {
  milliSec++;
  cs++; //counts time in centiseconds
  msDisplay.textContent = milliSec;

  //once milliseconds === 100 we start increasing sec

  if (milliSec >= 100) {
    milliSec = 0;
    second++;

    //once sec > 59 we increase minute

    if (second > 59) {
      second = 0;
      minute++;
      minColon.innerHTML = ":";
      minDisplay.innerHTML = minute;
      displayTime.style.width = "350px";
    }

    //for single digit seceonds we give an additional zero

    if (second <= 9 && minute > 0) {
      second = "0" + second;
    }
    secDisplay.innerHTML = second;
  }

  // for single digit milliseconds we give an additional second

  if (milliSec <= 9) {
    milliSec = "0" + milliSec;
    msDisplay.innerHTML = milliSec;
  }
}

//.............timer function ends here..................
//.......................................................
//.............Run function starts here..................

function run() {
  if (!running) {
    milliSec = 0;
    second = 0;
    minute = 0;
    cs = 0;
    secDisplay.innerHTML = "0";
    minDisplay.innerHTML = "";
    minColon.innerHTML = "";
    running = true;

    scramble = "";
    timeList.scrollTop = timeList.scrollHeight;
    switch (puzzleSelect) {
      case "2":
        scrambleGen2();
        break;
      case "3":
        scrambleGen3();
        break;
      case "4":
        scrambleGen4();
        break;
      case "5":
        scrambleGen5();
        break;
      case "6":
        pyraminx();
        break;
      case "7":
        skewb();
        break;
      default:
        scrambleGen3();
    }

    interval = setInterval(timer, 10);
  } else if (running) {
    running = false;
    clearInterval(interval);
    timeDisplay.push(" " + displayTime.innerText.split(" ").join(""));
    csTimes.push(cs);
    timeList.textContent = timeDisplay;
    calculateStats();
    store();
    view();
    timeList.scrollTop = timeList.scrollHeight;
  }
}

// Local Storage functions

function store() {
  var newData = " " + displayTime.innerText.split(" ").join("");
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }

  var oldData = JSON.parse(localStorage.getItem("data"));
  oldData.push(newData);

  localStorage.setItem("data", JSON.stringify(oldData));
}

function view() {
  if (localStorage.getItem("data") != null) {
    timeList.textContent = JSON.parse(localStorage.getItem("data"));
  }
}


// Snackbar function
function snackbar() {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

displayTimeContainer.addEventListener("click", run);
// timer will work when the key goes up



// window.onkeyup = run;
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 32) {
    run();
  } else {
    //snackbar();
  }
});



//document.querySelector('.split-left').addEventListener('click', run);

timeList.onload = view();
timeList.scrollTop = timeList.scrollHeight;

//function to store the value of selected puzzle
function puzzle_select() {
  puzzleSelect = puzzle.value;
}

puzzle.addEventListener("change", function () {
  if (puzzleSelect === "2") {
    scrambleGen2();
    puzzleSelected.textContent = "2x2x2";
  }
  if (puzzleSelect === "3") {
    scrambleGen3();
    puzzleSelected.textContent = "3x3x3";
  }
  if (puzzleSelect === "4") {
    scrambleGen4();
    puzzleSelected.textContent = "4x4x4";
  }
  if (puzzleSelect === "5") {
    scrambleGen5();
    puzzleSelected.textContent = "5x5x5";
  }
  if (puzzleSelect === "6") {
    pyraminx();
    puzzleSelected.textContent = "PYRAMINX";
  }
  if (puzzleSelect === "7") {
    skewb();
    puzzleSelected.textContent = "SKEWB";
  }
});

clearAll.addEventListener("click", function () {
  clearTimes(), snackbar();
});

// clear times function
function clearTimes() {
  csTimes = [];
  timeDisplay = [];
  localStorage.clear();
  timeList.innerHTML = timeDisplay;
  numSolves = 0;
  numSolvesOut.innerHTML = "Solves: " + numSolves;
  best = 99999999999;
  bestOut.innerHTML = "Best: ";
  worst = 0;
  avAll = 0;
  total = 0;
  avAllOut.innerHTML = "Average: ";
}

//stats
function calculateStats() {
  numSolves++;
  total = 0;
  numSolvesOut.innerHTML = "Solves: " + numSolves;
  for (var x = 0; x < csTimes.length; x++) {
    if (csTimes[x] < best) {
      best = csTimes[x];
    }
    if (csTimes[x] > worst) {
      worst = csTimes[x];
    }
    total += csTimes[x];
  }
  avAll = total / numSolves;
  avAllOut.innerHTML = "Average: " + formatTime(avAll);
  bestOut.innerHTML = "Best: " + formatTime(best);
}

function formatTime(t) {
  //m = minute, s = second, c = centisecond
  var m = 0,
    s = 0,
    c = 0,
    out = "";
  m = Math.floor(t / 6000);
  t = t % 6000;
  s = Math.floor(t / 100);
  t = t % 100;
  c = Math.floor(t);
  if (m < 1) {
    m = "";
  } else {
    m = m + ":";
    if (s < 10) {
      s = "0" + s;
    }
  }
  if (c < 10) {
    c = "0" + c;
  }

  out = "" + m + s + "." + c;
  return out;
}

newScramGenerate.addEventListener("click", function () {
  
  switch (puzzleSelect) {
    case "2":
      scrambleGen2();
      break;
    case "3":
      scrambleGen3();
      break;
    case "4":
      scrambleGen4();
      break;
    case "5":
      scrambleGen5();
      break;
    case "6":
      pyraminx();
      break;
    case "7":
      skewb();
      break;
    default:
      scrambleGen3();
  }
});


window.addEventListener(
  "keydown",
  function (e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);
