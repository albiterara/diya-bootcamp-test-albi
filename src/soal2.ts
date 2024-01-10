let number = "00-44 48 5555 8361";
let tampung: any = "";
let lompat = 3;
let cek = "";

for (let i = 0; i < number.length; i++) {
  for (let j = 0; j < number.length; j += 3) {
    if (number[i] !== "-" && number[i] !== " ") {
      tampung += number[i];
      break;
    }
    if (tampung === lompat) {
      tampung += "-";
      lompat += 3;
      console.log(lompat);
    }
  }
}

// console.log(tampung);
