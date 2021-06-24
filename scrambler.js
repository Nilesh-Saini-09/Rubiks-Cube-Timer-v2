// 2x2 scram

function scrambleGen2() {
    var move; //includes face to turn and how to turn it. Ex. 2F
    var face; //Face to turn. Either R, L, F, B, U, or D
    var faceNum; //1-6, corresponds to face R-D
    var lastFaceNum = 10; //The face of the previous turn
    var turn; //How to turn a face. Either ', 2, or nothing.
    var scramble = ""; //inlucdes 25 moves
    var output = document.getElementById("scram");
    for (var x = 0; x < 9; x++) {
      do {
        faceNum = Math.floor(Math.random() * 6) + 1;
      } while (faceNum === lastFaceNum); //the same face can't appear in consecutive moves.
      lastFaceNum = faceNum;
      if (faceNum === 1) {
        face = "R";
      }
      if (faceNum === 2) {
        face = "L";
      }
      if (faceNum === 3) {
        face = "U";
      }
      if (faceNum === 4) {
        face = "D";
      }
      if (faceNum === 5) {
        face = "F";
      }
      if (faceNum === 6) {
        face = "B";
      }
      turn = Math.floor(Math.random() * 3) + 1;
      if (turn === 1) {
        move = face;
      }
      if (turn === 2) {
        move = face + "2";
      }
      if (turn === 3) {
        move = face + "'";
      }
  
      scramble += move + " ";
    }
    output.innerHTML = `${scramble}`;
  }
  
  // 3x3 scram
  function scrambleGen3() {
    var move; //includes face to turn and how to turn it. Ex. 2F
    var face; //Face to turn. Either R, L, F, B, U, or D
    var faceNum; //1-6, corresponds to face R-D
    var lastFaceNum = 10; //The face of the previous turn
    var turn; //How to turn a face. Either ', 2, or nothing.
    var scramble = ""; //inlucdes 25 moves
    var output = document.getElementById("scram");
    for (var x = 0; x < 25; x++) {
      do {
        faceNum = Math.floor(Math.random() * 6) + 1;
      } while (faceNum === lastFaceNum); //the same face can't appear in consecutive moves.
      lastFaceNum = faceNum;
      if (faceNum === 1) {
        face = "R";
      }
      if (faceNum === 2) {
        face = "L";
      }
      if (faceNum === 3) {
        face = "U";
      }
      if (faceNum === 4) {
        face = "D";
      }
      if (faceNum === 5) {
        face = "F";
      }
      if (faceNum === 6) {
        face = "B";
      }
      turn = Math.floor(Math.random() * 3) + 1;
      if (turn === 1) {
        move = face;
      }
      if (turn === 2) {
        move = face + "2";
      }
      if (turn === 3) {
        move = face + "'";
      }
  
      scramble += move + " ";
    }
    output.innerHTML = `${scramble}`;
  }
  
  // 4x4 scram
  
  function scrambleGen4() {
    var move; //includes face to turn and how to turn it. Ex. 2F
    var face; //Face to turn. Either R, L, F, B, U, or D
    var faceNum; //1-6, corresponds to face R-D
    var lastFaceNum = 10; //The face of the previous turn
    var turn; //How to turn a face. Either ', 2, or nothing.
    var scramble = ""; //inlucdes 25 moves
    var output = document.getElementById("scram");
    for (var x = 0; x < 45; x++) {
      do {
        faceNum = Math.floor(Math.random() * 12) + 1;
      } while (faceNum === lastFaceNum); //the same face can't appear in consecutive moves.
      lastFaceNum = faceNum;
      if (faceNum === 1) {
        face = "R";
      }
      if (faceNum === 2) {
        face = "L";
      }
      if (faceNum === 3) {
        face = "U";
      }
      if (faceNum === 4) {
        face = "D";
      }
      if (faceNum === 5) {
        face = "F";
      }
      if (faceNum === 6) {
        face = "B";
      }
      if (faceNum === 7) {
        face = "Rw";
      }
      if (faceNum === 8) {
        face = "Lw";
      }
      if (faceNum === 9) {
        face = "Uw";
      }
      if (faceNum === 10) {
        face = "Dw";
      }
      if (faceNum === 11) {
        face = "Fw";
      }
      if (faceNum === 12) {
        face = "Bw";
      }
      turn = Math.floor(Math.random() * 3) + 1;
      if (turn === 1) {
        move = face;
      }
      if (turn === 2) {
        move = face + "2";
      }
      if (turn === 3) {
        move = face + "'";
      }
  
      scramble += move + " ";
    }
    output.innerHTML = `${scramble}`;
  }
  
  // 5x5 scram
  
  function scrambleGen5() {
    var move; //includes face to turn and how to turn it. Ex. 2F
    var face; //Face to turn. Either R, L, F, B, U, or D
    var faceNum; //1-6, corresponds to face R-D
    var lastFaceNum = 10; //The face of the previous turn
    var turn; //How to turn a face. Either ', 2, or nothing.
    var scramble = ""; //inlucdes 25 moves
    var output = document.getElementById("scram");
    for (var x = 0; x < 65; x++) {
      do {
        faceNum = Math.floor(Math.random() * 12) + 1;
      } while (faceNum === lastFaceNum); //the same face can't appear in consecutive moves.
      lastFaceNum = faceNum;
      if (faceNum === 1) {
        face = "R";
      }
      if (faceNum === 2) {
        face = "L";
      }
      if (faceNum === 3) {
        face = "U";
      }
      if (faceNum === 4) {
        face = "D";
      }
      if (faceNum === 5) {
        face = "F";
      }
      if (faceNum === 6) {
        face = "B";
      }
      if (faceNum === 7) {
        face = "Rw";
      }
      if (faceNum === 8) {
        face = "Lw";
      }
      if (faceNum === 9) {
        face = "Uw";
      }
      if (faceNum === 10) {
        face = "Dw";
      }
      if (faceNum === 11) {
        face = "Fw";
      }
      if (faceNum === 12) {
        face = "Bw";
      }
      turn = Math.floor(Math.random() * 3) + 1;
      if (turn === 1) {
        move = face;
      }
      if (turn === 2) {
        move = face + "2";
      }
      if (turn === 3) {
        move = face + "'";
      }
  
      scramble += move + " ";
    }
    output.innerHTML = `${scramble}`;
  }
  
  // Pyraminx Scrambler
  function pyraminx() {
    var move; //includes face to turn and how to turn it. Ex. 2F
    var face; //Face to turn. Either R, L, F, B, U, or D
    var faceNum; //1-6, corresponds to face R-D
    var lastFaceNum = 10; //The face of the previous turn
    var turn; //How to turn a face. Either ', 2, or nothing.
    var scramble = ""; //inlucdes 25 moves
    var output = document.getElementById("scram");
    for (var x = 0; x < 6; x++) {
      do {
        faceNum = Math.floor(Math.random() * 4) + 1;
      } while (faceNum === lastFaceNum); //the same face can't appear in consecutive moves.
      lastFaceNum = faceNum;
      if (faceNum === 1) {
        face = "R";
      }
      if (faceNum === 2) {
        face = "L";
      }
      if (faceNum === 3) {
        face = "U";
      }
      if (faceNum === 4) {
        face = "B";
      }
      
      turn = Math.floor(Math.random() * 6) + 1;
      if (turn === 1) {
        move = face;
      }
      if (turn === 2) {
        move = face + "'";
      }
      if (turn === 3) {
        move = face + " r";
      }
      if (turn === 4) {
        move = face + " u";
      }
      if (turn === 5) {
        move = face + " l";
      }
      if (turn === 6) {
        move = face + " b";
      }
  
      scramble += move + " ";
    }
    output.innerHTML = `${scramble}`;
  }

  // Skewb
  function skewb() {
    var move; //includes face to turn and how to turn it. Ex. 2F
    var face; //Face to turn. Either R, L, F, B, U, or D
    var faceNum; //1-6, corresponds to face R-D
    var lastFaceNum = 10; //The face of the previous turn
    var turn; //How to turn a face. Either ', 2, or nothing.
    var scramble = ""; //inlucdes 25 moves
    var output = document.getElementById("scram");
    for (var x = 0; x < 10; x++) {
      do {
        faceNum = Math.floor(Math.random() * 4) + 1;
      } while (faceNum === lastFaceNum); //the same face can't appear in consecutive moves.
      lastFaceNum = faceNum;
      if (faceNum === 1) {
        face = "R";
      }
      if (faceNum === 2) {
        face = "L";
      }
      if (faceNum === 3) {
        face = "U";
      }
      if (faceNum === 4) {
        face = "B";
      }

      turn = Math.floor(Math.random() * 2) + 1;
      if (turn === 1) {
        move = face;
      }
      if (turn === 2) {
        move = face + "'";
      }
  
      scramble += move + " ";
    }
    output.innerHTML = `${scramble}`;
  }
  
  //End of Scramble generator.......