const kotaDikunjungi = ["Tegal", "New York", "Chernobyl"];

kotaDikunjungi.unshift("Jakarta");
kotaDikunjungi.push("Tokyo");
kotaDikunjungi.pop();  // Hapus Array dari belakang
// kotaDikunjungi.reverse();
kotaDikunjungi.splice(0,1); // Hapus Array by Index target
kotaDikunjungi[1] = "Brebes"; // Cara ganti elemen Array

console.log(kotaDikunjungi);