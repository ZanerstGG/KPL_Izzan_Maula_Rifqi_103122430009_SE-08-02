# Tugas Pendahuluan 03: GUI dengan HTML dan CSS

**Nama:** Izzan Maula Rifqi <br>
**NIM:** 103122430009 <br>
**Kelas:** SE-08-02 <br>
**Dosen Pengampu:** Yudha Islami Sulistiya <br>
**Asisten Praktikum:** Adhiansyah Muhammad Pradana Farawowan, Hamid Khaeruman <br>

## Soal
Buatlah tata letak laman yang kamu buat berada di tengah seperti di bawah ini, dan juga ubah font-nya dengan Inconsolata dari [Google Fonts](https://fonts.google.com).
<img src="https://private-user-images.githubusercontent.com/69331906/559136401-7806afde-0808-4e5f-8d2b-ef4b63276a41.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzMyMTk2OTMsIm5iZiI6MTc3MzIxOTM5MywicGF0aCI6Ii82OTMzMTkwNi81NTkxMzY0MDEtNzgwNmFmZGUtMDgwOC00ZTVmLThkMmItZWY0YjYzMjc2YTQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzExVDA4NTYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI4M2VhNTFlYzc5MjBiMWZhOGY0YWRmNDdlMjk2MmZhMzJhYmJjNzY0MDUxNjFmNGI0ZTg5ZjcwNjdhZjYxOTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ZMu07NNtnL3I7FzVnxsUJaH4Gvsv3avIgLD4UL-yKc4">

## Program/Kode
Tersedia di [HTML](index.html)
, [CSS](index.css)
dan [JavaScript](index.js)

## Output
![Screenshoot](image.png)

## Deskripsi Program
Program ini adalah sebuah alat pengkonversi gaya teks interaktif berbasis web, dimana pengguna bisa memasukkan kalimat ke dalam kotak teks yang disediakan, lalu sistem akan secara otomatis mendeteksi dan menghitung jumlah total huruf beserta rincian huruf besar dan kecilnya.     
Setelah itu laman akan dibuat berada di tengah dan mengubah font-nya dengan Inconsolata dari Google Fonts. Cara meneraptkan font Inconsolata yaitu pada `index.html` menambahkan `<link>` font Inconsolata dari Google fonts di dalam bagian `<head>`, Setelah itu pada `index.css`, Menambahkan universal selector (`*`) dengan properti `font-family: 'Inconsolata', monospace;`, Ini berfungsi untuk memaksa semua elemen berubah fontnya ke Inconsolata.
Untuk menengahkan layout halaman, pada `index.html` membungkus seluruh elemen pada `<body>` ke dalam sebuah `<div>` baru yang diberi class `<container>`. Lalu di `index.css`, Menggunakan Flexbox pada `body` dengan properti `display: flex;` dan `justify-content: center;` Supaya elemen-elemen di dalamnya (container) tepat ke tengah layar secara horizontal.