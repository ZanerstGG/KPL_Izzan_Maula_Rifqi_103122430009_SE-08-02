// fungsi melakukan panggilan
function div(a, b) {
    // Prakondisi
    if (typeof a !== 'number') {
        throw new TypeError("Salah tipe data untuk argumen a");
    }
    if (b === 0) {
        return 0;
    }
    const hasil = a / b;

    // PascaKondisi
    if (hasil * b === a) {
        return hasil;
    }

    return 0;
}

console.log(div(20, 40));