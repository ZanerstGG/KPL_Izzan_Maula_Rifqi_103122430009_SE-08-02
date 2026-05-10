import { plsv_tiga } from "hitung_nilai";

// 5x + 20 = 5 -> x=-3
// 2x - 8 = -8 -> x=0
// -3x + 10 = 25 -> x=-5

console.log("5x + 20 = 5 -> x =", plsv_tiga("5x", 20, 5));
console.log("2x - 8 = -8 -> x =", plsv_tiga("2x", -8, -8));
console.log("-3x + 10 = 25 -> x =", plsv_tiga("-3x", 10, 25));
console.log("3x - 7 = 11 -> x =", plsv_tiga("3x", -7, 11));