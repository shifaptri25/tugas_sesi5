let papan = [
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","R",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","K",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
];

let posisiRaja = null;
let posisiBenteng = null;

for (let i = 0; i < papan.length; i++) {
  for (let j = 0; j < papan[i].length; j++) {
    if (papan[i][j] === "K") {
      posisiRaja = { baris: i, kolom: j };
    }
    if (papan[i][j] === "R") {
      posisiBenteng = { baris: i, kolom: j };
    }
  }
}

function cekSkak(raja, benteng) {
  if (raja.baris === benteng.baris) {
    let start = Math.min(raja.kolom, benteng.kolom) + 1;
    let end = Math.max(raja.kolom, benteng.kolom);
    for (let k = start; k < end; k++) {
      if (papan[raja.baris][k] !== ".") return false; 
    }
    return true;
  }

  if (raja.kolom === benteng.kolom) {
    let start = Math.min(raja.baris, benteng.baris) + 1;
    let end = Math.max(raja.baris, benteng.baris);
    for (let k = start; k < end; k++) {
      if (papan[k][raja.kolom] !== ".") return false; 
    }
    return true;
  }

  return false;
}

if (cekSkak(posisiRaja, posisiBenteng)) {
  console.log("SKAK!");
} else {
  console.log("Aman");
}
