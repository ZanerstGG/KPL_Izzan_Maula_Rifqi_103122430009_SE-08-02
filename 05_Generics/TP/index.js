function hitung(teks, tipe) {
    let totalHitungan = 0;
    for (const c of teks) {
        if (tipe === "huruf" && c === ' ') {
            continue;
        }
        totalHitungan++;
    }
    return totalHitungan;
}

const str = "Bar bar bar";

console.log(
    hitung(str, "semua") // Harusnya 11
);

console.log(
    hitung(str, "huruf") // Harusnya 9
);

hitung(str, "huruf"); // Tidak terjadi apa-apa