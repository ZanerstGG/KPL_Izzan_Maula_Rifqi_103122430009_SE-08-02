/**
 * 1. Buatlah sebuah array yang berisi 3 minuman favorit kalian, dan simpan dalam variabel
 * bernama ListMinuman.
 * 2. Setelah itu, ubah 2 elemen pertama menggunakan notasi kurung dan penugasan.
 * 3. Terakhir, tambahkan minuman baru di depan array
 */ 

const ListMinuman = ["Es Kuwut", "Es Dawet", "Es Kelapa"];
ListMinuman[0] = "Susu Buah Naga";
ListMinuman[1] = "Es Cream";
ListMinuman.unshift("Es Teh Hangat");
console.log(ListMinuman);