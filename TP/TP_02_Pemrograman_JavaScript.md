Tugas Pendahuluan 02: Pemrograman JavaScript

Soal

Kamu sudah menulis fungsi mulOfArray. Ujilah dengan input [2, 0, 26, 28, -2], dengan output yang seharusnya adalah 1456. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

Cara memperbaikinya adalah hanya perlu mengubah operator >= 0 menjadi > 0 didalam kolom if. Angka 0 bukanlah bilangan positif sehingga operator > 0 hanya akan mengalikan angka yang benar-benar positif yaitu 2, 26, dan 28, sehingga akan didapatkan hasilnya 1456

Hasilnya sama karena Operator >= membuat angka 0 lolos dan diproses saat programnya jalan sehingga variabel result akan dikalikan dengan 0. Di dalam matematika sudah sangat jelas bahwa angka berapapun jika dikalikan 0 maka hasilnya tetap 0, jadi mulai dari titik itu, nilai result akan terus 0 sampai perulangan selesai, mengabaikan angka besar seperti 26 dan 28 di belakangnya.