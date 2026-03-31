const elemenEditor = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");
const elemenHk = document.getElementById("hk"); 
const btnBesarkan = document.getElementById("huruf-besar"); 
const btnKecilkan = document.getElementById("huruf-kecil"); 
const btnlight = document.getElementById("light");
const btndark = document.getElementById("dark");
const btnsepia = document.getElementById("sepia");

function hitungSemua(teks) {
    const chr = teks.split('');
    let jumlahHurufSejati = 0;
    let jumlahHurufBesar = 0;
    let jumlahHurufKecil = 0; 
    const spasi = /\s+/;
    const besar = /[A-Z]/;
    const kecil = /[a-z]/; 

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
        jumlahHurufSejati = jumlahHurufSejati + 1;
    });

    elemenHf.textContent = jumlahHurufSejati;
    elemenHb.textContent = jumlahHurufBesar;
    elemenHk.textContent = jumlahHurufKecil; 
}

function tanganiInput(event) {
    const inputIsi = event.target.value;
    hitungSemua(inputIsi);
}

elemenEditor.addEventListener("input", tanganiInput);

btnBesarkan.addEventListener("click", () => {
    elemenEditor.value = elemenEditor.value.toUpperCase();
    hitungSemua(elemenEditor.value); 
});

btnKecilkan.addEventListener("click", () => {
    elemenEditor.value = elemenEditor.value.toLowerCase();
    hitungSemua(elemenEditor.value); 
});

function selectmode(mode) {
    document.body.className = mode;
}
btnlight.addEventListener("click", () => {
    selectmode("light-mode");
});

btndark.addEventListener("click", () => {
    selectmode("dark-mode");
});

btnsepia.addEventListener("click", () => {
    selectmode("sepia-mode");
});