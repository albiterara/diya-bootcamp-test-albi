/*Dari 1000 orang di kota kecil, 500 anggota koor(paduan suara). 
Dari 500 anggota koor ini 100
adalah laki-laki. Dari 500 penduduk yang tidak ikut koor, 
300 adalah laki-laki. Jika dipilih secara
random di antara laki-laki, berapa probabilitas laki-laki itu anggota koor? */
let lompatan = [2, 3, 1, 1, 4];
// let truee = null;
let step = lompatan[1];
let lompatan2 = 0;
for (let i = 1; i < lompatan.length; i++) {
  lompatan2++;
  if (lompatan2 === step) {
    console.log(lompatan[i]);
    step = lompatan[i];
    lompatan2 = 0;
    // truee = true;
  } else {
    // truee = false;
  }
}
console.log(truee);
console.log(step);
