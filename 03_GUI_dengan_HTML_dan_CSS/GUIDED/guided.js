const elemenEditor = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");

const elemenHk = document.getElementById("hk");
const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");
 
// supaya dapat dipanggil berkali-kali nanti.
function hitungSemua(teks) {
    // memecah teks menjadi array huruf, contoh: ['K', 'a', 't', 'a']
    const chr = teks.split('');

    // menyimpan huruf besar, huruf kecil, dan huruf yang bukan spasi
    let jumlahHurufSejati = 0;
    let jumlahHurufBesar = 0;
    let jumlahHurufKecil = 0; 

    // mendeteksi spasi dan huruf besar
    const spasi = /\s+/;
    const besar = /[A-Z]/;
    const kecil = /[a-z]/; 

    // Mengecek apakah itu huruf besar, huruf kecil, atau spasi
    chr.forEach(karakter => {
        if (spasi.test(karakter)) {
            return;
        }

        if (besar.test(karakter)) {
            jumlahHurufBesar = jumlahHurufBesar + 1;
        } 

        else if (kecil.test(karakter)) {
            jumlahHurufKecil = jumlahHurufKecil + 1;
        }

        // menghitung semua huruf yang bukan spasi
        jumlahHurufSejati = jumlahHurufSejati + 1;
    });

    // menampilkan hasil ke layar
    elemenHf.textContent = jumlahHurufSejati;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil; 
}

// fungsi untuk menangani input di kotak-teks
function tanganiInput(event) {
    const inputIsi = event.target.value;
    hitungSemua(inputIsi);
}
elemenEditor.addEventListener("input", tanganiInput);

// tombol untuk mengubah huruf menjadi besar
btnBesarkan.addEventListener("click", () => {
    elemenEditor.value = elemenEditor.value.toUpperCase();
    hitungSemua(elemenEditor.value); 
});

// tombol untuk mengubah huruf menjadi kecil
btnKecilkan.addEventListener("click", () => {
    elemenEditor.value = elemenEditor.value.toLowerCase();
    hitungSemua(elemenEditor.value); 
});