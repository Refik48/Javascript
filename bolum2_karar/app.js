// const s1 = Number(prompt("Birinci sayi:"));
// const islem = prompt("Islemi giriniz");
// const s2 = Number(prompt("Ikinci sayi:"));
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if ((islem = "*")) {
//   sonuc = s1 * s2;
// } else if ((islem = "/")) {
//   sonuc = s1 / s2;
// } else {
//   alert("yanlis islem yaptiniz.");
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

const age = prompt("yasinizi giriniz:");
const healt = prompt("Saglikli misiniz e/h");
const result = age > 18 && healt == "e" ? "Askere Gidebilir" : "Askere Gidemez";

console.log(result);
alert(result);
