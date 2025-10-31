let lahan = [
  ["subur", "kering", "subur", "subur"],
  ["kering", "subur", "kering", "kering"],
  ["subur", "subur", "subur", "kering"],
  ["tandus", "kering", "kering", "kering"]
];

let cuaca = {
  suhu: 25,         
  kelembapan: 60,  
  angin: 10         
};


for (let i = 0; i < lahan.length; i++) {
  let jumlahSubur = 0;

  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      jumlahSubur++;
    }
  }

  let persentaseSubur = (jumlahSubur / lahan[i].length) * 100;

  if (persentaseSubur < 50) {
    for (let j = 0; j < lahan[i].length; j++) {
      lahan[i][j] = "kering";
    }
  }
}

let totalSubur = 0;
for (let i = 0; i < lahan.length; i++) {
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      totalSubur++;
    }
  }
}

let cuacaCocok = (
  cuaca.suhu >= 20 && cuaca.suhu <= 30 &&
  cuaca.kelembapan > 50 &&
  cuaca.angin < 15
);

console.log("Total petak subur:", totalSubur);
console.log("Total petak yang ditanami:", cuacaCocok ? totalSubur : 0);

if (!cuacaCocok) {
  console.log("Cuaca tidak cocok untuk bercocok tanam");
} else {
  console.log("Cuaca cocok untuk bercocok tanam");
}
